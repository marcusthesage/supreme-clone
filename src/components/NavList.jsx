import React from 'react';
import '../styles.css'
const NavList = () => {
    const items = ['shop', 'about', 'news', 'contact'];

    return (
        <div>
            <ul className='text-left tmargin'>
                {items.map((item, index) => (
                     <li key={index} className='margin20'>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default NavList;