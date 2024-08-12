import React from 'react';
import { Container, Title, Paragraph, Subtitle, List, Link } from './styles';

function PoliticaCookies() {
  return (
    <Container>
      <Title>Política de Cookies do Uni HomeMatch</Title>
      <Paragraph>Última atualização: 12 de Agosto de 2024</Paragraph>
      <Paragraph>
        O Uni HomeMatch utiliza cookies para melhorar a sua experiência no nosso site e aplicativo. Esta Política de Cookies explica como usamos cookies e como você pode controlar sua utilização.
      </Paragraph>
      <Subtitle>1. O que são cookies?</Subtitle>
      <Paragraph>
        Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site ou utiliza um aplicativo.
      </Paragraph>
      <Subtitle>2. Quais tipos de cookies usamos?</Subtitle>
      <Paragraph>
        Nós usamos os seguintes tipos de cookies:
      </Paragraph>
      <List>
        <li>Cookies essenciais: necessários para o funcionamento do nosso site e aplicativo.</li>
        <li>Cookies de performance: utilizados para melhorar a velocidade e eficiência do nosso site e aplicativo.</li>
        <li>Cookies de funcionalidade: utilizados para lembrar suas preferências e personalizar sua experiência.</li>
        <li>Cookies de targeting: utilizados para mostrar anúncios relevantes e personalizados.</li>
      </List>
      <Subtitle>3. Como usamos cookies?</Subtitle>
      <Paragraph>
        Nós usamos cookies para:
      </Paragraph>
      <List>
        <li>Autorizar e autenticar sua sessão.</li>
        <li>Armazenar suas preferências e configurações.</li>
        <li>Analisar o tráfego e comportamento do usuário.</li>
        <li>Mostrar anúncios relevantes e personalizados.</li>
      </List>
      <Subtitle>4. Como controlar a utilização de cookies?</Subtitle>
      <Paragraph>
        Você pode controlar a utilização de cookies através das seguintes opções:
      </Paragraph>
      <List>
        <li>Configurações do navegador: você pode configurar seu navegador para bloquear ou deletar cookies.</li>
        <li> Ferramentas de gerenciamento de cookies: você pode utilizar ferramentas de gerenciamento de cookies para controlar a utilização de cookies.</li>
      </List>
      <Subtitle>5. Alterações à Política de Cookies</Subtitle>
      <Paragraph>
        Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que você revise esta página regularmente para quaisquer mudanças. Seu uso continuado do Uni HomeMatch após tais mudanças constitui seu consentimento à Política de Cookies revisada.
      </Paragraph>
      <Subtitle>Contato</Subtitle>
      <Paragraph>
        Se você tiver alguma dúvida sobre esta Política de Cookies ou sobre como tratamos suas informações pessoais, entre em contato conosco pelo e-mail: <Link><a href="mailto:privacidade@unihomematch.com">privacidade@unihomematch.com</a></Link>
      </Paragraph>
    </Container>
  );
}

export default PoliticaCookies;