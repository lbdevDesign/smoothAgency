import React, { useContext } from 'react';
import ButtonColorContext from './ButtonColorContext';

function LearnMoreCta() {

    const buttonColor = useContext(ButtonColorContext);

    return (
        <button className='button'>
            <span className='button__shape' style={{ 'background-color': buttonColor }}></span>
            Learn more
        </button>
    )
}

export default LearnMoreCta;