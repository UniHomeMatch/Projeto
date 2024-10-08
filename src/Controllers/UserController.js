import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

export default {
    async createUser(request, response) {

        const profile = request.file.filename;
        const { name, cpf, birthdate, generoId, email, password, confirmPassword } = request.body;
      
        const generoIdInt = parseInt(generoId, 10);

        try {
            let user = await prisma.user.findUnique({
                where: { email }
            });

            if(user) {
                return response.status(409).json({ 
                    error: true,
                    message: 'E-mail já cadastrado' 
                });
            }

            user = await prisma.user.findUnique({
                where: { cpf }
            });

            if(user) {
                return response.status(409).json({
                    error: true,
                    message: 'CPF já cadastrado' 
                });
            }

            if (password !== confirmPassword) {
                throw new Error("As senhas não coincidem.");
            }


            const HashPassword = await hash(password, 10);

            const birthdateDate = new Date(birthdate);

            user = await prisma.user.create({
                data:{
                    profile,
                    name,
                    cpf,
                    birthdate: birthdateDate.toISOString().split('T')[0] + 'T00:00:00.000Z',
                    genero: { connect: { id_genero: generoIdInt } },
                    email,
                    password: HashPassword,
                },
                    include: {
                        genero: true
                      }
            });

            return response.json({
                error: false,
                message: 'Usuário cadastrado com sucesso!',
                user
            });

        } catch (error) {
            return response.json({ message: error.message });
        }
    },
    async findAllUser(request, response) {
        try {
            const users = await prisma.user.findMany();
            return response.json(users);
        } catch (error) {
            return response.json({ message: error.message });
        }
    },

    async findUser(request, response) {
        try {
          const { userId } = request.params;
    
          const user = await prisma.user.findUnique({
            where: { id : Number(userId) }
          });
          delete user.password;
          return response.json(user);
    
        } catch (error) {
          return response.json({ message: error.message })
        }
    },

    async updateUser(request, response) {
        const { id } = request.params;
        const profile = request.file?.filename; 
        const { name, cpf, birthdate, generoId, email, password, confirmPassword } = request.body;
        const generoIdInt = parseInt(generoId, 10);
    
        try {
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user) {
                return response.status(404).json({ 
                    error: true,
                    message: 'Usuário não encontrado' 
                });
            }
    

            if (email) {
                const emailExists = await prisma.user.findUnique({ where: { email } });
                if (emailExists && emailExists.id !== user.id) {
                    return response.status(409).json({ error: true, message: 'E-mail já cadastrado' });
                }
            }
            if (cpf) {
                const cpfExists = await prisma.user.findUnique({ where: { cpf } });
                if (cpfExists && cpfExists.id !== user.id) {
                    return response.status(409).json({ error: true, message: 'CPF já cadastrado' });
                }
            }

            if (password && password !== confirmPassword) {
                return response.status(400).json({ error: true, message: 'As senhas não coincidem' });
            }
    
            
            const HashPassword = password ? await hash(password, 10) : user.password;
            const birthdateDate = birthdate ? new Date(birthdate) : user.birthdate;
    
            const updatedUser = await prisma.user.update({
                where: { id: Number(id) },
                data: {
                    profile: profile || user.profile, 
                    name: name || user.name,
                    cpf: cpf || user.cpf,
                    birthdate: birthdateDate.toISOString().split('T')[0] + 'T00:00:00.000Z',
                    genero: generoIdInt ? { connect: { id_genero: generoIdInt } } : undefined,
                    email: email || user.email,
                    password: HashPassword,
                },
                include: {
                    genero: true
                }
            });
    
            return response.json({
                error: false,
                message: 'Usuário atualizado com sucesso!',
                updatedUser
            });
    
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
}