import React from 'react';
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Cards from '@/components/Cards'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Home() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Cards/>
    <Footer/>
    </>
    )
}

