import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import FunFact from '../components/FunFact';
import About from '../components/about/about';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Footer2 from '../components/footer2/Footer2';
import Scrollbar from '../components/scrollbar/scrollbar';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} topbarNone={'topbar-none'} />
            <Hero />
            <FunFact fClass={'s3'} />
            <About />
            <ServiceSection />
            <ProjectSection />
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;