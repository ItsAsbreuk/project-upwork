/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "How Much Does it Cost?" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/how-much-does-it-cost.jsx
 * @class ModuleHowMuchDoesItCost
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/how-much-does-it-cost.scss";

import React, {PropTypes} from "react";

const HowMuchDoesItCost = React.createClass({

    propTypes: {
        /**
         * ezhome's service-rates for weekly and two-weekly services.
         *
         * @property serviceRates
         *    @property {Number} serviceRates.startPriceServiceOtherWeek rate for service every other week (in $)
         *    @property {Number} serviceRates.startPriceWeeklyService rate for weekly service (in $)
         * @type Number
         * @since 2.0.5
        */
        serviceRates: PropTypes.object.isRequired
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <section className="Section Section--gray">
                <div className="Section-content container">
                    <h2 className="Section-title">How Much Does it Cost?</h2>

                    <div className="row middle-xs Section-topSpacing">
                        <div className="col-sm-6 Section-imagePadding">
                            <img className="Section-wideImage" src="/images/img-blueprint-and-plan.png"/>
                        </div>
                        <div className="col-sm-6 u-pt20 u-pb20">
                            <p>
                                We price your service based on a custom blueprint of your yard that we create when you request a proposal.
                                <br/>
                                <br/>
                                Prices start from just ${this.props.serviceRates.startPriceWeeklyService}/visit for weekly service,
                                or ${this.props.serviceRates.startPriceServiceOtherWeek}/visit for service every other week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default HowMuchDoesItCost;
