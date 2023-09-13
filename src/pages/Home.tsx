import React from 'react';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import HeaderSection from './HeaderSection';
import Header from '../components/Header';
import FeatureListCard from '../components/FeatureListCard';
import ContentSection from './ContentSection';

const Home = () => { 
    return (
        <div className='home'>
            <Header />
            <div className='content_section'>
                <HeaderSection />
                <ContentSection />
            </div>
        </div>
    )
}

export default Home;