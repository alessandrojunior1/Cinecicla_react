
import React from 'react';
import EmailForm from '@/components/EmailForm';
import Navbar from '@/components/Navbar';

const EmailFormPage = () => {
  return (
    <div>
      <Navbar/>
      <h1 className=''>Nos Mande seu Feedback</h1>
      <EmailForm />
    </div>
  );
};

export default EmailFormPage;
