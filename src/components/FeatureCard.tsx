import React from 'react'   

interface IProps {
    logoSrc: string
    title: string
    content: string
}

const FeatureCard = ({ logoSrc, title, content}: IProps) => { 
    return(
        <div className='feature_card'>
            <div className='card_content'>
                <img style={{width: '40px'}} src={logoSrc} alt='Card Logo' />
                <h3>{title}</h3>
                <p className="text_para">{content}</p>
                <button className='card_button'>Learn More</button>
            </div>
        </div>
    )
}

export default FeatureCard;