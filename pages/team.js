import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamMemberContent from '../components/Team/TeamMemberContent';
import Testimonial from '../components/Common/Testimonial';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Team" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Our Team Member" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img5"
                />

                <TeamMemberContent />

                <Testimonial />

                <div className="ptb-100">
                    <SubscribeStyleThree />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default Team;