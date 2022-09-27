import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Projects/ProjectDetailsContent';
import Footer from '../components/Layouts/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Project Details" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Project Details" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img1"
                />

                <ProjectDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ProjectDetails;