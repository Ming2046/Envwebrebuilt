import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class FunFacts extends Component {
    render() {
        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        820
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>Data Analytics</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        150
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>Data Management</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        20
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>Managed  Analytics</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        120
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>Big Data</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;