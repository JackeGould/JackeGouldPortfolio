import { useState } from 'react';
import './Contact.css'; // Import the CSS file

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(''); // Empty variable to store the message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2hjzv8m', 'template_z34605d', form.current, {
        publicKey: 'P0GFeN_9qLR3Fl2Ln',
      })
      .then(
        () => {
          setMessage('Your email was successfully sent!'); // Set the success message
          console.log('SUCCESS!');
        },
        (error) => {
          setMessage('Failed to send email. Please try again later.'); // Set the failure message
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <h1 className='message'>Let's chat</h1>
      <h4 className='message'>I will get back to you with a detailed response as soon as possible</h4>

      {/* Conditionally render the message */}
      {message && <p className='message'>{message}</p>}

      <form ref={form} onSubmit={sendEmail}>
        <label>First Name</label>
        <input type="text" name="user_first" />
        <label>Last Name</label>
        <input type="text" name="user_last" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Phone</label>
        <input type="text" name="user_phone" />

        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;
