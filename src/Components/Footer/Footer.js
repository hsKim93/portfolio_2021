import React from 'react';
import './Footer.css';
import { IconContext } from 'react-icons/lib';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <footer id='footer' className='footer_display zone'>
            <div className='footer_wrapper'>
                <IconContext.Provider value={{ size: '3em' }}>
                    <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/hyungsuk-kim-291b77200/'><AiFillLinkedin /></a>
                    <span className='separator'></span>
                    <a rel='noreferrer' target='_blank' href='https://github.com/hsKim93'><AiFillGithub /></a>
                </IconContext.Provider>
            </div>
            <br />
            <div className='end'>
                <a className='back_to_top b' href='#header'>Hyungsuk Kim</a>
            </div>
        </footer>
    )
}

export default Footer;