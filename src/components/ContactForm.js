import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(props) {
  const [companyName, setCompanyName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setSelectedOption(props.option)
  }, [props.option])

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const sendEmail = () => {
    const templateParams = {
      name: companyName, 
      phone: phone,
      email: email,
      option: selectedOption,
      notes: description, 
      reply_to: email
    };
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      templateParams, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      }
    );
  }

  return (
    <div id='form' className='contact-form'>
      <h3>Contáctanos</h3>
      <input
        type='text'
        placeholder='Nombre de la empresa'
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />
      <select
        value={selectedOption}
        onChange={handleSelectOption}
        required
      >
        <option value="">Seleccione una opción</option>
        {props.options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Teléfono'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder='Cuéntanos...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
      ></textarea>
      <a href={'#form'} onClick={sendEmail} className='button featured'>
        Enviar
      </a>
    </div>
  );
}

export default ContactForm;