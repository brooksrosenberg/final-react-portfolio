import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import MediaQuery, { useMediaQuery } from "react-responsive";


 export const ContactUs = (props) => {
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75q3v8o', 'template_ok99v49', form.current, 'w0Ji9lhINJ8exkr_G')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  const desktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const phone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div>
      {desktop && (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="subject" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      {done && <div className='thanks'>Thank you!</div>}
    </form>
    </>)}
    {phone && (
    <>
    <form className='form-phone' ref={form} onSubmit={sendEmail}>
      <label className='label-phone'>Name</label>
      <input className='input-phone' type="text" name="user_name" />
      <label className='label-phone'>Email</label>
      <input className='input-phone' type="email" name="user_email" />
      <label className='label-phone'>Subject</label>
      <input className='input-phone' type="subject" name="subject" />
      <label className='label-phone'>Message</label>
      <textarea className='text-phone' name="message" />
      <input className='send-phone' type="submit" value="Send" />
      {done && <div className='thanks'>Thank you!</div>}
    </form>
    </>)}
    </div>
  );

};

