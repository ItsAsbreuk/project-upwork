/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "A Revolution in Gardening" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/a-revolution-in-gardening.jsx
 * @class ModuleARevolutinInGardening
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/revolution-in-gardening.scss";

import React from "react";

const ARevolutinInGardening = React.createClass({

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <section className="Section" id="ezh-gardenrevolution">
                <div className="Section-content container">
                    <h2 className="Section-title">A Revolution in Gardening</h2>

                    <div className="Section-plainText">
                        ezhome is a new breed of gardening company that’s revolutionizing
                        the way gardening is done. We’re using technology to help gardeners with
                        their work, enable better communication, and vastly improve the customer experience.
                    </div>
                    <div className="row Section-topSpacing">
                        <div className="col-sm-6 col-sm-offset-3 Section-imagePadding">
                            <img alt="" className="Section-wideImage" src="/images/img-ipad-report.png"/>
                        </div>
                    </div>

                    <div className="row BenefitsList Section-topSpacing">
                        <div className="col-sm-4">
                            <div>
                                <div className="BenefitsList-icon is-weeklyReports"></div>
                                <h4 className="BenefitsList-title">Weekly Reports</h4>
                            </div>
                            <p className="BenefitsList-text">
                                After each service, we email you a report that includes before/after
                                photos and a list of tasks that were done. Sending us feedback is as easy as clicking a link in the email.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <div className="BenefitsList-icon is-onlineAccess"></div>
                                <h4 className="BenefitsList-title">Online Access</h4>
                            </div>
                            <p className="BenefitsList-text">
                                We provide all the conveniences you’d expect: online access to your service details and history,
                                automatic payments via credit card, and amazing support via email or phone.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <div className="BenefitsList-icon is-ledByExperts"></div>
                                <h4 className="BenefitsList-title">Led By Experts</h4>
                            </div>
                            <p className="BenefitsList-text">
                                We’re led by certified expert horticulturists that direct our team and are available
                                for consultations whenever you need guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default ARevolutinInGardening;
