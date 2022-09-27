import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import FaqContactForm from '../components/Faq/FaqContactForm';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Frequently Asked Questions" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Faq" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img2"
                />

                <FaqContent />

                <FaqContactForm />
                
                <Footer />
            </>
        );
    }
}

export default Faq;