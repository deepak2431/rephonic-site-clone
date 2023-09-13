import React from 'react';

interface IProps {
    imageSrc: string
    title?: string
    headerTitle: string
    firstParaContent: string
    secondParaContent: string
    imageLeftAlign: boolean
}

const ContentCard = ({imageSrc, title, headerTitle, firstParaContent, secondParaContent, imageLeftAlign}: IProps) => {
    return(
        <div className="content_description_card">
            {
                imageLeftAlign ?
                (
                    <>
                    <img style={{width: "450px"}} src={imageSrc} alt="Content"/>
                    <div className="content_card_section">
                        {title && <h4 className="text_para">{title}</h4>}
                        <h1>{headerTitle}</h1>
                        <p className="text_para">{firstParaContent}</p>
                        <p className="text_para">{secondParaContent}</p>
                    </div>
                    </>
                    
                ) : (
                    <>
                        <div className="content_card_section">
                            {title && <h4 className="text_para">{title}</h4>}
                            <h1>{headerTitle}</h1>
                            <p className="text_para">{firstParaContent}</p>
                            <p className="text_para">{secondParaContent}</p>
                        </div>
                        <img style={{width: "450px"}} src={imageSrc} alt="Content"/>
                    </>
                )
            }
        </div>
    )
}

export default ContentCard;