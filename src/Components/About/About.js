import React from 'react';
import './About.css';
import programmer from '../../assets/img/programmer.png';
import resume from '../../assets/Resume.pdf';
import AnchorButton from '../AnchorButton/AnchorButton';

function About() {

    return (
        <div id='about' className='zone about_display bb bw1 b--black-30'>
            <div className='intro'>
                <img src={programmer} alt='keyboard' width='600px' />
                <p className='intro_txt'>
                    Hello, my name is <span className='blue '>Hyungsuk Kim</span>, but I also go by <span className='blue'>Jonathan</span>.
                </p>
                <p className='intro_txt'>
                    I am a recent SUNY Albany Computer Science honors graduate,<br />
                    passionate Java programmer and web developer.
                </p>
                <p className='intro_txt'>
                    I love solving problems, which is why I naturally chose to become a software developer.
                </p>
                <p className='intro_txt'>
                    In 2009, I moved to the States from South Korea; I speak fluent Korean
                    and English!
                </p>
                <p className='intro_txt'>
                    I love cats, playing video games, and watching documentaries.
                </p>
            </div>
            <br />
            <AnchorButton link={resume}
                content={'Resume'}
                classAttr={'blue ttu mb4 f3'}
                new_tab={true} />
        </div>
    )
}

export default About;