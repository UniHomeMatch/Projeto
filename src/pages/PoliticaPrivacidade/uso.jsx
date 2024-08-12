import React from 'react';
import { Container, Title, Paragraph, Subtitle, List, Link } from './styles';

function PoliticaUso() {
  return (
    <Container>
      <Title>Termos de Uso do Uni HomeMatch</Title>
      <Paragraph>Última atualização: 12 de Agosto de 2024</Paragraph>
      <Paragraph>
        Estes Termos de Uso regulam o uso do Uni HomeMatch, incluindo o nosso site e aplicativo. Ao utilizar o Uni HomeMatch, você concorda em estar vinculado a estes Termos de Uso.
      </Paragraph>
      <Subtitle>1. Definições</Subtitle>
      <Paragraph>
        Para os fins destes Termos de Uso, os seguintes termos terão os seguintes significados:
      </Paragraph>
      <List>
        <li>"Uni HomeMatch" ou "nós" refere-se à Uni HomeMatch, uma empresa de tecnologia que opera o site e aplicativo.</li>
        <li>"Você" ou "usuário" refere-se a qualquer pessoa que utilize o Uni HomeMatch.</li>
        <li>"Conteúdo" refere-se a qualquer informação, dados, texto, imagem, áudio, vídeo ou outro material disponível no Uni HomeMatch.</li>
      </List>
      <Subtitle>2. Uso do Uni HomeMatch</Subtitle>
      <Paragraph>
        Você concorda em utilizar o Uni HomeMatch apenas para fins legais e autorizados. Você não deve:
      </Paragraph>
      <List>
        <li>Utilizar o Uni HomeMatch para fins comerciais ou publicitários sem a nossa permissão.</li>
        <li>Modificar, adaptar, traduzir, vender, alugar, sublicenciar ou distribuir o Conteúdo do Uni HomeMatch.</li>
        <li>Utilizar robôs, spiders ou outros meios automatizados para acessar ou utilizar o Uni HomeMatch.</li>
      </List>
      <Subtitle>3. Propriedade Intelectual</Subtitle>
      <Paragraph>
        O Conteúdo do Uni HomeMatch é de propriedade exclusiva da Uni HomeMatch. Você não deve:
      </Paragraph>
      <List>
        <li>Reproduzir, modificar, adaptar, traduzir, vender, alugar, sublicenciar ou distribuir o Conteúdo do Uni HomeMatch.</li>
        <li>Remover ou alterar quaisquer marcas comerciais, logotipos ou avisos de direitos autorais do Conteúdo do Uni HomeMatch.</li>
      </List>
      <Subtitle>4. Responsabilidade</Subtitle>
      <Paragraph>
        Você é responsável por qualquer dano ou perda causada ao Uni HomeMatch ou a terceiros em decorrência do seu uso do Uni HomeMatch.
      </Paragraph>
      <Subtitle>5. Alterações aos Termos de Uso</Subtitle>
      <Paragraph>
        Podemos atualizar estes Termos de Uso periodicamente. Recomendamos que você revise esta página regularmente para quaisquer mudanças. Seu uso continuado do Uni HomeMatch após tais mudanças constitui seu consentimento aos Termos de Uso revisados.
      </Paragraph>
      <Subtitle>6. Lei Aplicável e Jurisdição</Subtitle>
      <Paragraph>
        Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa ou controvérsia decorrente destes Termos de Uso será submetida à jurisdição exclusiva dos tribunais do Brasil.
      </Paragraph>
      <Subtitle>Contato</Subtitle>
      <Paragraph>
        Se você tiver alguma dúvida sobre estes Termos de Uso ou sobre como tratamos suas informações pessoais, entre em contato conosco pelo e-mail: <Link><a href="mailto:privacidade@unihomematch.com">privacidade@unihomematch.com</a></Link>
      </Paragraph>
    </Container>
  );
}

export default PoliticaUso;