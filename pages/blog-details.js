import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/Layouts/Footer';

class BlogDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Blog Details- Tile not page tile"
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Blog Details" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img2"
                />

                <BlogDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default BlogDetails;