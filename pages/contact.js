import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Contact Us" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Contact Us" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img1"
                />

                <ContactInfo />

                <ContactForm />

                <div className="ptb-100">
                    <SubscribeStyleThree />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default Contact;