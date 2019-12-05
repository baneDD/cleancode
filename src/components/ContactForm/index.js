import React from 'react';
import useForm from 'react-hook-form';
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

const ContactForm = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const requiredErrorMsg = (fieldName) => `⚠ ${fieldName} is required`;
  const onSubmit = (values) => {
    console.log(values);
  };

  /* <Form method="post" netlify-honeypot="phone-number" data-netlify="true"> */

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* This is a bot field for Netlify honeypot */}
      <Input type="hidden" name="phone-number" />
      {/* Below are the fields with data that we are collecting */}
      <InputWrapper>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          className={errors.name && 'errors'}
          placeholder={
            (errors.name
              && errors.name.type === 'required'
              && requiredErrorMsg('Name'))
            || 'Name'
          }
          ref={register({ required: true, maxLength: 100 })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          className={errors.email && 'errors'}
          placeholder={
            (errors.email
              && (errors.email.message || requiredErrorMsg('Email')))
            || 'Email address'
          }
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: '⚠ Invalid email address',
            },
          })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="subject">Subject:</Label>
        <Input
          type="text"
          name="subject"
          id="subject"
          className={errors.subject && 'errors'}
          placeholder={
            (errors.subject
              && errors.subject.type === 'required'
              && requiredErrorMsg('Subject'))
            || 'Subject'
          }
          ref={register({
            required: true,
            maxLength: 200,
          })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="message">Message:</Label>
        <Textarea
          name="message"
          id="message"
          className={errors.message && 'errors'}
          placeholder={
            (errors.message
              && errors.message.type === 'required'
              && requiredErrorMsg('Message'))
            || 'Message'
          }
          rows="5"
          ref={register({ required: true })}
        />
      </InputWrapper>
      <div data-netlify-recaptcha="true" />
      <ButtonWrapper>
        <Reset
          type="reset"
          value="Clear"
          onClick={() => {
            reset();
          }}
        />
        <Button type="submit">Send</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default ContactForm;
