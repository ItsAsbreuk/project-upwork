/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "What We Offer" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/what-we-offer.jsx
 * @class ModuleWhatWeOffer
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/what-we-offer.scss";

import React from "react";

const WhatWeOffer = React.createClass({

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <section className="Section">
                <div className="Section-content clearfix container">
                    <h2 className="Section-title">What We Offer</h2>

                    <h3 className="Section-subtitle">Our weekly or bi-weekly essentials yard maintenance package includes:</h3>

                    <div className="OffersList Section-topSpacing">
                        <ul className="clearfix">
                            <li className="icon-lawn-case col-sm-4 col-xs-12">
                                <h4>Lawn Care</h4>
                                Mowing, edging and trimming your lawn
                            </li>
                            <li className="icon-cleaning-case  col-sm-4 col-xs-12">
                                <h4>Cleaning</h4>
                                Cleaning and weeding hardscape and softscape
                            </li>
                            <li className="icon-hedging col-sm-4 col-xs-12">
                                <h4>Hedging</h4>
                                Power hedging bushes up to 5 feet tall
                            </li>
                        </ul>
                        <div className="OffersList-more">
                            We also offer a variety of add-on services for our maintenance customers,
                            including pruning, mulching, plantings, fertilization, and irrigation repairs.
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default WhatWeOffer;
