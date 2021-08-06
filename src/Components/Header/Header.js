import React from 'react';
import AnchorButton from '../AnchorButton/AnchorButton';
import './Header.css';

function Header() {
    return (
        <div id='header' className='zone jumbotron header_bg bb bw1 b--black-30'>
            <h1 className='tshadow my_name animate__animated animate__fadeInDown '>Hi, my name is <br />
                <span className='hsk'>Hyungsuk Kim</span>
            </h1>
            <div className='divider'>
                <h1 className='tshadow animate__animated animate__fadeInLeft animate__delay-1s'>I am the devloper you need</h1>
                <br />
                <AnchorButton link={'#about'}
                    content={'about me'}
                    classAttr={'blue ttu animate__animated animate__fadeInUp animate__delay-5s'}
                    new_tab={false}/>
            </div>
        </div>
    );
}

export default Header;