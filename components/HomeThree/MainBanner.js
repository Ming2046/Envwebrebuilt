import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner-three">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <h1>Data Science as a Service</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                        <div className="banner-btn">
                                            <Link href="/about-us">
                                                <a className="default-btn-one">
                                                    About Us <span></span>
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Contact Us <span></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape1.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape2.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape3.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape4.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="bounceIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape5.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape6.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape7.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape8.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="rotateIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape9.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape10.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/home-three-shape11.png" alt="image" />
                                        </ScrollAnimation>

                                        {/* Main Image */}
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-three/main-image3.png" alt="image" />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src="/images/main-banner-shape/home-shape-3.png" alt="Image" />
                </div>
                <div className="shape-img1">
                    <img src="/images/main-banner-shape/main-banner-shape2.png" alt="main-image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/main-banner-shape/main-banner-shape3.png" alt="main-image" />
                </div>
            </div>
        );
    }
}

export default MainBanner;