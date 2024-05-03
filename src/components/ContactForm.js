import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function ContactForm(props) {
  const [companyName, setCompanyName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSelectedOption(props.option)
  }, [props.option])

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sendEmail = () => {
    setIsLoading(true);
    if (companyName === '') {
      alert("Por favor, ingresa El nombre de tu empresa.");
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      setIsLoading(false);
      return;
    } 
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
        setIsLoading(false);
        alert('Mensaje enviado! Pronto nos pondremos en contacto.')
      }, (err) => {
        console.log('FAILED...', err);
        setIsLoading(false);
        alert('Error.')
      }
    );
  }

  return (
    <div id='form' className='contact-form light'>
      <h3>Contáctanos</h3>
      <label>
        <p>Nombre de la empresa <span style={{color: 'red'}}>*</span></p>
        <input
          type='text'
          placeholder='Nombre de la empresa'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </label>
      <label>
        <p>Email <span style={{color: 'red'}}>*</span></p>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <p>Teléfono</p>
        <input
          type='text'
          placeholder='Teléfono'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        <p>Cuéntanos algo más</p>
        <textarea
          placeholder='Cuéntanos...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        ></textarea>
      </label>
      <select
        value={selectedOption}
        onChange={handleSelectOption}
        required>
        <option value="">Seleccione una opción</option>
        {props.options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <a href={'#form'} onClick={sendEmail} className='button featured'>
        {isLoading ? (
          <motion.div
          className='form-loader'
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity
            }}
          />
        ) : "Enviar"}
      </a>
    </div>
  );
}

export default ContactForm;