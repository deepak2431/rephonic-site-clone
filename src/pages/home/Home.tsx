import React from 'react';
import HeaderSection from './sections/HeaderSection';
import Header from '../../components/Header';
import ContentSection from './sections/ContentSection';
import DiscoverySection from './sections/DiscoverySection';
import SearchSection from './sections/SearchSection';
import FooterSection from './sections/FooterSection';

const Home = () => { 
    return (
        <div className='home'>
            <Header />
            <div className='content_section'>
                <HeaderSection />
                <ContentSection />
                <DiscoverySection />
                <SearchSection />
            </div>
            <FooterSection />
        </div>
    )
}

export default Home;