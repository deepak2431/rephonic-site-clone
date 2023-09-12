import React from 'react'   

interface IProps {
    logoSrc: string
    title: string
    content: string
}

const FeatureCard = () => { 
    return(
        <div className='feature_card'>
            <div className='card_content'>
                <img style={{width: '50px'}} src='https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperson.ca629d04.svg&w=96&q=75' alt='Card Logo' />
                <h3>Guest Apperances</h3>
                <p>Discover relevant podcasts, reach out and get booked. Get your message out to the right listeners.</p>
                <button className='card_button'>Learn More</button>
            </div>
        </div>
    )
}

export default FeatureCard;