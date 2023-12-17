'use client'

import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Adiciona a verificação apenas se o campo de e-mail não estiver vazio
    setIsValidEmail(newEmail === '' || validateEmail(newEmail));
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail) {
      console.log('E-mail válido:', email);
      console.log('Mensagem:', message);
    } else {
      console.log('E-mail inválido:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" mt-[50px] bg-green-600 text-black p-8 rounded-lg">
      <label className="block mb-4">
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full px-4 py-2 mt-2 rounded ${
            isValidEmail || email === '' ? 'border border-white' : 'border border-red-500'
          }`}
        />
      </label>
      <label className="block mb-4">
        Mensagem:
        <textarea
          value={message}
          onChange={handleMessageChange}
          className="w-full px-4 py-2 mt-2 rounded border border-white"
        />
      </label>
      <button type="submit" className="w-full bg-white text-green-600 px-4 py-2 rounded">
        Enviar
      </button>
      {(!isValidEmail && email !== '') && (
        <p className="text-red-500 mt-2">Digite um e-mail válido.</p>
      )}
    </form>
  );
};

export default EmailForm;