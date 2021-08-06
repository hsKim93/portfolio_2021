import React from 'react';
import './About.css';
import programmer from '../../assets/programmer.png';
import resume from '../../assets/Resume.pdf';

function About() {
    return (
        <div id='about' className='zone about_display bb bw1 b--black-30'>

            <div className='intro'>
                <img className='programmer' src={programmer} alt='keyboard' width='600px'/>
                <p>
                    Hello, my name is <span className='blue'>Hyungsuk Kim</span>, but I also go by <span className='blue'>Jonathan</span>.
                </p>
                <p>
                    I am a recent SUNY Albany Computer Science honors graduate,<br />
                    passionate Java programmer and web developer.
                </p>
                <p>
                    I love solving problems, which is why I naturally chose to become a software developer.
                </p>
                <p>
                    In 2009, I moved to the States from South Korea; I speak fluent Korean
                    and English!
                </p>
                <p>
                    I love cats, playing video games, and watching documentaries.
                </p>
            </div>
            <br />
            <div>
                <a className='ttu resume_link' rel="noreferrer" href={resume} target='_blank'>Resume</a>
            </div>
        </div>
    )
}

export default About;