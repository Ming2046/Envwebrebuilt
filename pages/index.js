import React, {Component} from 'react';
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
                    <meta property="og:title" content="EnviroByte Inc. - Home Page"/>
                    <meta property="og:PageType" content="website"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:site_name" content="https://www.envirobyte.com"/>
                    <meta property="og:url" content="https://www.envirobyte.com/pages/index.js"/>
                    <meta property="og:locale" content="en"/>
                    <meta name="twitter:site" content="@envirobyte"/>
                    <meta property="twitter:title" content="EnviroByte Inc. - Home Page"/>
                    <meta property="twitter:url" content="https://www.envirobyte.com/pages/index.js"/>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                    <meta name="description" content="Envirobyte services are here to help you and your business...Official web site of EnviroByte, located in Calgary, Alberta, Canada." />



                </Head>
                <Navbar/>

                <MainBanner/>

                <AboutUs/>

                <OurServices/>

                <FunFacts/>

                <SolutionsTab/>

                <Projects/>

                <Customers/>

                <Footer/>
            </>
        );
    }
}

export default Index3;