import React from 'react';

const SearchSection = () => {

    return(
        <div className="search_section">
            <div className="search_content">
                <h1>Try it for free</h1>
                <div className="search_box">
                    <div className="search_input">
                        <input type="text" placeholder="Search for a topic, podcast, or guest"/>
                        <button className="search_button">Search Podcasts</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchSection;