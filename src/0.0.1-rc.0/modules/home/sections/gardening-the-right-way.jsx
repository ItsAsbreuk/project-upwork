/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "Gardening the Right Way" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/gardening-the-right-way.jsx
 * @class ModuleGardeningTheRightWay
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/gardening-the-right-way.scss";

import React from "react";

const GardeningTheRightWay = React.createClass({

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <section className="Section Section--lightGreen">
                <div className="Section-content clearfix container">
                    <h2 className="Section-title">Gardening the Right Way</h2>

                    <h3 className="Section-subtitle">We care about more than just the beauty of your garden</h3>

                    <div className="DetailList">
                        <div className="row">
                            <div className="DetailList-item is-dollar icon-lawn-case col-sm-6">
                                <h4 className="DetailList-title">Fair Wages</h4>

                                <p className="DetailList-text hidden-xs">
                                    All of our gardeners are ezhome employees and receive full benefits. We take labor
                                    laws seriously and we care about our workforce because we believe it’s the right thing to do.
                                </p>

                                <p className="DetailList-text visible-xs-block">
                                    All of our gardeners are ezhome employees and receive full benefits.
                                </p>
                            </div>
                            <div className="DetailList-item is-blow icon-lawn-case col-sm-6">
                                <h4 className="DetailList-title">Blower Regulations</h4>

                                <p className="DetailList-text hidden-xs">
                                    We adhere to local noise regulations and use electric blowers in cities that require them.
                                    The vast majority of "mow and blow" gardeners ignore local noise ordinances.
                                </p>

                                <p className="DetailList-text visible-xs-block">
                                    We adhere to all local noise regulations and use electric blowers whenever required.
                                </p>
                            </div>
                            <div className="DetailList-item is-organic icon-lawn-case col-sm-6">
                                <h4 className="DetailList-title">Organic Weeding</h4>

                                <p className="DetailList-text hidden-xs">
                                    Prefer your garden to be chemical-free? We have organic packages
                                    that include hand weeding and organic fertilizers.
                                </p>

                                <p className="DetailList-text visible-xs-block">
                                    We have organic packages that include hand-weeding and organic fertilizer.
                                </p>
                            </div>
                            <div className="DetailList-item is-insurance icon-lawn-case col-sm-6">
                                <h4 className="DetailList-title">Liability Insurance</h4>

                                <p className="DetailList-text hidden-xs">
                                    We carry a multimillion-dollar liability insurance policy that protects both
                                    our customers and our employees.
                                </p>

                                <p className="DetailList-text visible-xs-block">
                                    We carry multimillion-dollar insurance to protect our customers and our employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default GardeningTheRightWay;
