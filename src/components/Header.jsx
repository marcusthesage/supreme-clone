import React from 'react';
import Logo from './Logo.jsx';

export default function Header() {
    return (
      <>
      <header className='mt-80'> 
        <Logo />
        <h1 className="text-3xl">
          Hello world!
        </h1>   
      </header>
      </>
    )
  }
