import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent';
import Footer from '../components/Layouts/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Privacy Policy" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Privacy Policy" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img5"
                />

                <PrivacyPolicyContent />
                
                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;