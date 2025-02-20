import { useState, useRef } from 'react';
import './Contact.css'; // Import the CSS file
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(''); // State to store feedback message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2hjzv8m', // Replace with your EmailJS service ID
        'template_z34605d', // Replace with your EmailJS template ID
        form.current,
        'P0GFeN_9qLR3Fl2Ln' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setMessage('Your email was successfully sent!'); // Set the success message
          form.current.reset(); // Clear the form fields
          console.log('SUCCESS!');
        },
        (error) => {
          setMessage('Failed to send email. Please try again later.'); // Set the failure message
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <>
    {/* <div className="line4"></div> */}
      <div className='chat'>
      <div className="message1-container">
  <h1 className="message1">Let's Chat</h1>
</div>

      </div>
      <div className="line4"></div>
      <h3 className="message">
        Want to work together? Any questions? I will get back to you with a detailed response as soon as possible!
      </h3>

      <div className="line4"></div>

      <div className='chat9'>

      {/* Conditionally render the message */}
      {message && <p className="message">{message}</p>}

      <form ref={form} onSubmit={sendEmail}>
        <label>First Name</label>
        <input
          type="text"
          name="user_first"
          required
          title="Please enter your first name."
        />
        <label>Last Name</label>
        <input type="text" name="user_last" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Phone</label>
        <input type="text" name="user_phone" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
      </div>
    </>
  );
};

export default Contact;


