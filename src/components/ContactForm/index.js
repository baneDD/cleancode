import React from 'react';
import {
  Form,
  Label,
  Input,
  Textarea,
  Button,
  Reset,
  InputWrapper,
  ButtonWrapper,
} from './style';

const ContactForm = () => (
  <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
    <Input type="hidden" name="bot-field" />
    <InputWrapper>
      <Label for="name">Name:</Label>
      <Input type="text" name="name" id="name" />
    </InputWrapper>
    <InputWrapper>
      <Label for="email">Email:</Label>
      <Input type="email" name="email" id="email" />
    </InputWrapper>
    <InputWrapper>
      <Label for="subject">Subject:</Label>
      <Input type="text" name="subject" id="subject" />
    </InputWrapper>
    <InputWrapper>
      <Label for="message">Message:</Label>
      <Textarea name="message" id="message" rows="5" />
    </InputWrapper>
    <ButtonWrapper>
      <Reset type="reset" value="Clear" />
      <Button type="submit">Send</Button>
    </ButtonWrapper>
  </Form>
);

export default ContactForm;
