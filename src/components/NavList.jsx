import React from 'react';

const NavList = () => {
    const items = ['Home', 'About', 'Services', 'Contact'];

    return (
        <ul className='text-left'>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default NavList;