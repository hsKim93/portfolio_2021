import React from 'react';
import './Header.css';

function Header() {
    return (
        <div id='header' className='zone jumbotron header_bg bb bw1 b--black-30'>
            <h1 className='my_name animate__animated animate__fadeInDown '>Hi, my name is <br />
                <span className='blue'>Hyungsuk Kim</span>
            </h1>
            <div className='divider'>
                <h1 className='animate__animated animate__fadeInLeft animate__delay-1s'>I am the devloper you need</h1>
                <br />
                <a className='ttu about_me animate__animated animate__fadeInUp animate__delay-5s' href='/#about'>About me</a>
            </div>
        </div>
    );
}

export default Header;