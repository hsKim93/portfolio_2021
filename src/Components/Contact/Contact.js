import React from 'react';
import './Contact.css';
import AnchorButton from '../AnchorButton/AnchorButton';

function Contact() {
    return (
        <div id='contact' className='zone contact_display bb bw1 b--black-30'>
            <p>Email: jonathanhsk@hotmail.com <br />
                Phone: 516-342-0136</p>
            <AnchorButton link={'mailto:jonathanhsk@email.com'}
                content={'Email me'}
                classAttr={'blue ttu'}
                new_tab={true} />
            {/* <a rel="noreferrer" target="_blank" className="email_me" href="mailto:jonathanhsk@email.com">
                Email me</a> */}
        </div>
    )
}

export default Contact;