import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FeaturedService from '../components/Services/FeaturedService';
import ServicesContent from '../components/Services/ServicesContent';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Services" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img4"
                />

                <FeaturedService />

                <ServicesContent />

                <div className="pb-100">
                    <SubscribeStyleThree />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default Services;