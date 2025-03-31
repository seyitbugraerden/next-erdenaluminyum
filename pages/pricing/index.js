import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Pricing from '../../components/Pricing/Pricing'


const PricingPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <Pricing/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PricingPage;
