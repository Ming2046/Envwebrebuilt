import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogCardTwo from '../components/Blog/BlogCardTwo';
import Footer from '../components/Layouts/Footer';

class Blog2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Blog Right Sidebar" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Blog Right Sidebar" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img4"
                />

                <BlogCardTwo />
                
                <Footer />
            </>
        );
    }
}

export default Blog2;