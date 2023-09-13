import React from "react";

const logoUrl = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo.1bf3613e.png&w=384&q=75"

const Header = () => {
    return(
        <div className="header">
            <img style={{width: '170px'}} src={logoUrl} alt='Logo' />
        </div>
    )
}
export default Header;