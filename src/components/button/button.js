import React, { useContext, useState } from 'react';
import ButtonColorContext from './ButtonColorContext';

function LearnMoreCta() {

    const buttonColor = useContext(ButtonColorContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const shapeStyle = {
        backgroundColor: buttonColor,
        opacity: isHovered ? 0.6 : 0.2, 
    };



    return (
        <button className='button'
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <a href='#adv' className='button__link'>
                <span className='button__shape' style={shapeStyle}></span>
                Learn more
            </a>
        </button>
    )
}

export default LearnMoreCta;