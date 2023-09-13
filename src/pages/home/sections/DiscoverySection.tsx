import React from "react";
import FeatureListCard from "../../../components/FeatureListCard";


const discoveryCardsInfo = [
    {
        key: 1,
        title: "Listener Data",
        featureLists: ["Listener Numbers", " Gender Skew", "Engagement", " Audience Location"]
    },
    {
        key: 2,
        title: "Podcast Information",
        featureLists: ["Listener Numbers", " Gender Skew", "Engagement", " Audience Location"]
    },
    {
        key: 3,
        title: "Pitch Planning Tools",
        featureLists: ["Listener Numbers", " Gender Skew", "Engagement", " Audience Location"]
    }
]

const DiscoverySection = () => {
    return(
        <div className="discovery_section">
            <div className="discovery_header">
                <h1>Discover what else Rephonic can do</h1>
                <p className="text_para">Quickly get featured on podcasts with our all-in-one tool.</p>
            </div>
            <div className="discovery_cards">
                {
                    discoveryCardsInfo.map((card) => (
                    <FeatureListCard
                        key={card.key}
                        title={card.title}
                        featureLists={card.featureLists}
                    />
                    ))
                }
            </div>
        </div>
    )
}

export default DiscoverySection;