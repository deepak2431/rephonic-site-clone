import React from 'react';
import Footer from '../../../components/Footer';

const footerContent = [
    {
        key: 1,
        footerTitle: "Navigate",
        footerLists: ["Home", "Discover", "Search", "Pricing", "My Account", "Developer API"]
    },
    {
        key: 2,
        footerTitle: "Features",
        footerLists: ["Home", "Discover", "Search", "Pricing", "My Account", "Developer API"]
    },
    {
        key: 3,
        footerTitle: "Use cases",
        footerLists: ["Home", "Discover", "Search", "Pricing", "My Account", "Developer API"]
    },
    {
        key: 4,
        footerTitle: "Tools",
        footerLists: ["Home", "Discover", "Search", "Pricing", "My Account", "Developer API"]
    },
    {
        key: 5,
        footerTitle: "Resources",
        footerLists: ["Home", "Discover", "Search", "Pricing", "My Account", "Developer API"]
    },
    {
        key: 6,
        footerTitle: "Company",
        footerLists: ["Home", "Discover", "Search", "Pricing", "My Account", "Developer API"]
    },

]

const FooterSection = () => {
    return(
        <div className="footer_section">
            <div className="footer_section_content">
                {
                    footerContent.map((content) => (
                    <Footer
                    key={content.key}
                    footerTitle={content.footerTitle}
                    footerLists={content.footerLists}
                    />
                ))
                }
            </div>
        </div>
    )
}
export default FooterSection;