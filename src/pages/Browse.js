import React from 'react';
import Footer from '../Components/MainLayout/Footer';
import Header from '../Components/MainLayout/Header';
import Background from '../Components/Background';
import NoiseBackground from '../Components/NoiseBackground';
import BrowseSection from '../Components/BrowseSection';

const Browse = () => {
    return (
    <NoiseBackground>
    <Background className={"dark:bg-transparent min-h-screen"}>
        <Header />
        <BrowseSection/>
        <Footer/>
    </Background>
    </NoiseBackground>
)}

export default Browse;
