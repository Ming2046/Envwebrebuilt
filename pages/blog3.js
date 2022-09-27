import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogCardThree from '../components/Blog/BlogCardThree';
import Footer from '../components/Layouts/Footer';

class Blog3 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Blog Left Sidebar" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Blog Left Sidebar" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img5"
                />

                <BlogCardThree />
                
                <Footer />
            </>
        );
    }
}

export default Blog3;