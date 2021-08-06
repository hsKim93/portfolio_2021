import React from 'react';
import './AnchorButton.css';

function AnchorButton({ link, classAttr, content, new_tab }) {
    return (
        !new_tab ?
            <a className={`ttu anch anch_${classAttr}`}
                href={link}>
                <span className='txt'>{content}</span>
            </a> :
            <a className={`ttu anch anch_${classAttr}`}
                href={link}
                rel='noreferrer'
                target='_blank'>
                <span className='txt'>{content}</span>
            </a>
    )
}

export default AnchorButton;