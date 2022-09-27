import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Service Details" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img3"
                />

                <ServiceDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;