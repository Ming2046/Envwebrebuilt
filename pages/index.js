import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeThree/MainBanner';
import AboutUs from '../components/HomeThree/AboutUs';
import OurServices from '../components/HomeThree/OurServices';
import FunFacts from '../components/Common/FunFacts';
import SolutionsTab from '../components/Common/SolutionsTab';
import Projects from '../components/HomeThree/Projects';
//import Testimonial from '../components/Common/Testimonial';
import BlogPost from '../components/Common/BlogPost';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import Customers from '../components/Common/Customers';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";
//import Head from 'next/head';


class Index3 extends Component {
    render() {
        return (
            <>
                <Head><title>EnviroByte Inc. | Home</title>
                <meta name="keywords" content={"envirobyte Environment GHG Calgary Alberta"}/>
                </Head>
                <Navbar />

                <MainBanner />

                <AboutUs />

                <OurServices />

                <FunFacts />

                <SolutionsTab />

                <Projects />

                <Customers />
                
                <Footer />
            </>
        );
    }
}

export default Index3;