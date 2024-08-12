import React, {useEffect} from 'react';
import { Container, Title, Paragraph, Subtitle, List, Link } from './styles';

function PoliticaPrivacidade() {
    useEffect(() => {
        // Scroll to top when the page loads
        window.scrollTo(0, 0);
    }, []);;
  return (
    <Container>
      <Title>Política de Privacidade do Uni HomeMatch</Title>
      <Paragraph>Última atualização: 12 de Agosto de 2024</Paragraph>
      <Paragraph>
        Agradecemos por escolher o Uni HomeMatch como sua plataforma para encontrar ou alugar quartos. Sua privacidade é importante para nós, e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você usa nosso aplicativo.
      </Paragraph>
      <Subtitle>1. Informações Pessoais Que Coletamos</Subtitle>
      <Paragraph>
        Ao usar o Uni HomeMatch, podemos coletar várias informações pessoais, incluindo:
      </Paragraph>
      <List>
        <li>Informações de contato, como nome, endereço de e-mail e número de telefone.</li>
        <li>Informações demográficas, como idade, gênero e localização.</li>
        <li>Detalhes sobre suas preferências de aluguel, como tipo de quarto, preço máximo e localizações desejadas.</li>
        <li>Informações financeiras, como detalhes de pagamento, quando você realiza transações através do nosso aplicativo.</li>
        <li>Dados técnicos, como endereços IP, informações de login e detalhes sobre o seu uso do aplicativo.</li>
      </List>
      <Subtitle>2. Como Usamos Suas Informações</Subtitle>
      <Paragraph>
        Usamos suas informações pessoais para:
      </Paragraph>
      <List>
        <li>Fornecer e melhorar nosso serviço.</li>
        <li>Processar transações e fornecer suporte ao cliente.</li>
        <li>Personalizar sua experiência no aplicativo.</li>
        <li>Comunicar-nos com você sobre atualizações, ofertas especiais e outros assuntos relacionados ao Uni HomeMatch.</li>
        <li>Analisar tendências e padrões de uso para melhorar nosso serviço.</li>
      </List>
      <Subtitle>3. Compartilhamento de Informações</Subtitle>
      <Paragraph>
        Podemos compartilhar suas informações pessoais com:
      </Paragraph>
      <List>
        <li>Prestadores de serviços que nos ajudam a operar nosso aplicativo, desde que estejam comprometidos em proteger suas informações.</li>
        <li>Autoridades legais, quando exigido por lei ou em resposta a um processo legal válido.</li>
        <li>Terceiros, no caso de uma reestruturação corporativa, como uma fusão ou venda de ativos da empresa.</li>
      </List>
      <Subtitle>4. Segurança das Informações</Subtitle>
      <Paragraph>
        Adotamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema de segurança é infalível, e não podemos garantir a segurança total das suas informações.
      </Paragraph>
      <Subtitle>5. Seus Direitos</Subtitle>
      <Paragraph>
        Você tem o direito de acessar, corrigir ou excluir suas informações pessoais mantidas por nós. Para exercer esses direitos, entre em contato conosco através do endereço de e-mail fornecido na seção de contato abaixo.
      </Paragraph>
      <Subtitle>6. Alterações à Política de Privacidade</Subtitle>
      <Paragraph>
        Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para quaisquer mudanças. Seu uso continuado do Uni HomeMatch após tais mudanças constitui seu consentimento à Política de Privacidade revisada.
      </Paragraph>
      <Subtitle>Contato</Subtitle>
      <Paragraph>
        Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco pelo e-mail: <Link><a href="mailto:privacidade@unihomematch.com">privacidade@unihomematch.com</a></Link>
      </Paragraph>
    </Container>
  );
}

export default PoliticaPrivacidade;