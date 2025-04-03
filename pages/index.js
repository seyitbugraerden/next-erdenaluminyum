import React, { Fragment } from 'react';
import Hero from '../components/hero/hero';
import FunFact from '../components/FunFact';
import About from '../components/about/about';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';

const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <FunFact fClass={'s3'} />
            <About />
            <ServiceSection />
            <ProjectSection />
        </Fragment>
    )
};
export default HomePage;