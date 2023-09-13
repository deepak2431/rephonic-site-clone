import React from 'react';

interface IProps {
    title: string
    featureLists: string[]

}

const FeatureListCard = ({title, featureLists}: IProps) => {
    return (
    <div className="feature_list_card">
        <h2>{title}</h2>
        <div className="feature_lists">
            <ul className="text_para">
                {featureLists.map(list => (
                    <li key={list}>{list}</li>
                ))}
            </ul>
        </div>
        <button className='card_button'>Learn More</button>
    </div>
    )
}

export default FeatureListCard;
