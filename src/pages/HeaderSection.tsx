import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const HeaderImage = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.e75a4370.png&w=2048&q=75";

const companyLogos = [
    {
        key: 1,
        src: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbbc.80ae0243.png&w=256&q=75",
    },
    {
        key: 2,
        src: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhubspot.42677a21.png&w=384&q=75",
    },
    {
        key: 3,
        src: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.b40df24a.png&w=256&q=75",
    },
    {
        key: 4,
        src: "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpenguin.5bf0e4a6.png&w=256&q=75",
    },
]

const HeaderSection = () => {
    return(
        <div className="header_section">
            <div className="header_content_section">
                <div className="header_content">
                    <h1>Find, pitch and get featured on podcasts</h1>
                    <p className="text_para">Podcasting is growing, fast. Get the info and contacts you need to pitch podcasts at scale and get the word out.</p>
                    <Button label="Get Started" />
                    <p className="text_para">JOIN THESE GREAT COMPANIES USING REPHONIC</p>
                    <div className="company_logos">
                        {
                            companyLogos.map((logo) => (
                                    <img style={{width: '100px'}} key={logo.key} src={logo.src} alt="Company Logo" />
                            ))
                        }
                    </div>
                </div>
                <img style={{width: '500px'}} src={HeaderImage} alt="Header"/>
            </div>
        </div>
    )
}
export default HeaderSection;