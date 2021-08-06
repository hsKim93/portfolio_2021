import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div id='contact' className='zone contact_display bb bw1 b--black-30'>
            <p>Email: jonathanhsk@hotmail.com <br />
                Phone: 516-342-0136</p>
            <a rel="noreferrer" target="_blank" className="email_me" href="mailto:jonathanhsk@email.com">
                Email me</a>
        </div>
    )
}

export default Contact;