import React from 'react';
import './Contact.css';
import AnchorButton from '../AnchorButton/AnchorButton';

function Contact() {
    return (
        <div id='contact' className='zone contact_display bb bw1 b--black-30'>
            <h3 className='mb3 mt4 contact ttu'>Contact</h3>
            <p className='mv2 contact_content'><span className='ttu'>Email</span>: jonathanhsk@hotmail.com</p>
                <p className='mv2 contact_content'><span className='ttu'>Phone</span>: 516-342-0136</p>
            <AnchorButton link={'mailto:jonathanhsk@email.com'}
                content={'Email me'}
                classAttr={'blue ttu mt2 mb4'}
                new_tab={true} />
        </div>
    )
}

export default Contact;