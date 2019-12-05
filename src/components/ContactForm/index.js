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
      <Label htmlFor="name">Name:</Label>
      <Input type="text" name="name" id="name" />
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="email">Email:</Label>
      <Input type="email" name="email" id="email" />
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="subject">Subject:</Label>
      <Input type="text" name="subject" id="subject" />
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="message">Message:</Label>
      <Textarea name="message" id="message" rows="5" />
    </InputWrapper>
    <ButtonWrapper>
      <Reset type="reset" value="Clear" />
      <Button type="submit">Send</Button>
    </ButtonWrapper>
  </Form>
);

export default ContactForm;
