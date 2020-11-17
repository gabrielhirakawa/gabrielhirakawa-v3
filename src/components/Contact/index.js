import React from 'react';

import { Container, Form, Content } from './styles';

function Contact() {

  async function submit(){

  }

  return <Container id="contato">
    <Content>
    <h2>Contato</h2>
      <Form onSubmit={submit}>
        <input placeholder="Nome" />
        <input placeholder="Assunto" />
        <input placeholder="Email" />
        <textarea placeholder="Mensagem" />
        <button type="submit">Enviar</button>
      </Form>
    </Content>
  </Container>;
}

export default Contact;
