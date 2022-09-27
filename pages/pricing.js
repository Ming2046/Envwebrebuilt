import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingContent from '../components/Pricing/PricingContent';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Pricing" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Pricing" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img4"
                />

                <PricingContent />

                <div className="pb-100">
                    <SubscribeStyleThree />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default Pricing;