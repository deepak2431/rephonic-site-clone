import React from 'react';

interface IProps {
    footerTitle: string
    footerLists: string []
}

const Footer = ({footerTitle, footerLists}: IProps) => {
    return(
        <div className='footer'>
            <div className="footer_content">
                <h5 style={{color: "rgba(0, 0, 0, 0.6)"}}>{footerTitle}</h5>
                {
                    footerLists.map(list => (
                        <span className="text_para" key={list}>{list}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer;