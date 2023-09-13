import React from "react";

import FeatureCard from "../components/FeatureCard";


const outReachCardContent = [
    {
        key: 1,
        logoSrc: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperson.ca629d04.svg&w=96&q=75",
        title: "Guest Apperances",
        content: "Discover relevant podcasts, reach out and get booked. Get your message out to the right listeners.",
    },
    {
        key: 2,
        logoSrc: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flightbulb.ba741fa6.svg&w=128&q=75",
        title: "PR for Clients",
        content: "Find podcast PR opportunities for your clients with our podcast media database. Get more bookings.",
    },    
    {
        key: 3,
        logoSrc: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmicrophone-light.f6363df2.svg&w=96&q=75",
        title: "Cross-Promotion",
        content: "Grow your audience by researching the most relevant shows to partner with and cross-promote.",
    },    
    {
        key: 4,
        logoSrc: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmegaphone.896d32c2.svg&w=256&q=75",
        title: "Sponsorship",
        content: "Advertise your business by discovering the top podcasts in your industry that share your target audience.",
    },
]

const OutreachSection = () => {
    return(
        <div className="outreach_section">
            <div className="outreach_content">
                <h1 style={{textAlign: "center"}}>Everything you need for podcast outreach and research</h1>
                <p className="text_para" style={{textAlign: 'center'}}>Rephonic reveals valuable podcast data so you can pitch the right shows and maximize opportunities.</p>
            </div>
            <div className="outreach_cards">
                {
                    outReachCardContent.map((card) => (
                    <FeatureCard
                        key={card.key}
                        logoSrc={card.logoSrc}
                        title={card.title}
                        content={card.content}
                    />
                ))
                }
            </div>
        </div>      
    )
}
export default OutreachSection;