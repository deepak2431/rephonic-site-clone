import React from 'react';

interface IProps {
    title: string
    featureLists: string[]

}

const FeatureListCard = ({title, featureLists}: IProps) => {
    return (
    <div className="feature_list_card">
        <h3>{title}</h3>
        <ul>
            {featureLists.map(list => (
                <li key={list}>{list}</li>
            ))}
        </ul>
        <button className='card_button'>Learn More</button>
    </div>
    )
}

export default FeatureListCard;
