import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <nav className='zone nav_display fw6 bb bw1 b--black-30'>
            <a className='nav_comps' href='#header'>Top</a>
            <a className='nav_comps' href='#about'>About</a>
            <a className='nav_comps' href='#projects'>Projects</a>
            <a className='nav_comps' href='#contact'>Contact</a>
        </nav>
    )
}

export default Navigation;