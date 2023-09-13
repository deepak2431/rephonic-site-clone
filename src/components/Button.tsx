import React from 'react';

interface IProps {
    label: string;
    onClick?: () => void;
}

const Button = ({ label, onClick} : IProps) => { 
    return(
        <div className='cta__button'>
            <button className='cta_button'>{label}</button>
        </div>
    )
}

export default Button;

