import React, { useState } from 'react';
import { navigate } from 'gatsby';
import useForm from 'react-hook-form';
import Recaptcha from 'react-google-recaptcha';
import {
  Form,
  Label,
  Input,
  Textarea,
  Button,
  Reset,
  ButtonWrapper,
  RecaptchaWrapper,
} from './style';

const siteRecaptchaKey = process.env.GATSBY_SITE_RECAPTCHA_KEY;

const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();
  const requiredErrorMsg = (fieldName) => `⚠ ${fieldName} is required`;
  const submitForm = (values) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values, ...recaptchaValue }),
    })
      .then(() => {
        reset();
        navigate('/thanks');
      })
      .catch((error) => alert(error));
  };

  const handleRecaptcha = (value) => setRecaptchaValue({ 'g-recaptcha-response': value });

  return (
    <Form
      onSubmit={handleSubmit(submitForm)}
      name="contact"
      method="post"
      action="thanks"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="phone-number"
    >
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>
      {/* This is a bot field for Netlify honeypot */}
      <Input type="hidden" name="phone-number" />
      {/* Below are the fields with data that we are collecting */}
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
      {siteRecaptchaKey && (
        <RecaptchaWrapper>
          <Recaptcha sitekey={siteRecaptchaKey} onChange={handleRecaptcha} />
        </RecaptchaWrapper>
      )}
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
