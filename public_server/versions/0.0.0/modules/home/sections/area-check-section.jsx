/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "Area Check" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/area-check-section.jsx
 * @class ModuleAreaCheckSection
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/area-check-section.scss";
import "../../../assets/css/components/buttons.scss";

import React, {PropTypes} from "react";
import AvailabilityCheck from "../../../react-components/availability-check.jsx";

const availabilityHint = "Check if we\"re available in your area:";

const AreaCheckSection = React.createClass({

    propTypes: {
        /**
         * The city-customers info where ezhome is currently active
         *
         * @property cityCustomers
         * @type Object
         * @since 2.0.0
        */
        cityCustomers: PropTypes.object.isRequired,

        /**
         * Whether to landingpage should be set on "city-landing" or "video"
         *
         * @property cityLanding
         * @type Boolean
         * @since 2.0.0
        */
        cityLanding: PropTypes.bool,

        /**
         * The zipcodes where ezhome is currently active
         *
         * @property zipCodes
         * @type Array
         * @since 2.0.0
        */
        zipCodes: PropTypes.array.isRequired
    },
    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        const content = this.props.cityLanding ?
            (
                <a className="Btn Btn--orange Btn--wide" data-btn-free-proposal=""
                    data-name="localized" data-place="1" href="#detail">
                    <span className="Section-mainBtnText">Get a Quote <span className="Section-mainBtnArrow">&#8250;</span></span>
                </a>
            ) :
            (
                <div data-address-form="" id="address-form-bottom">
                    <AvailabilityCheck
                        cityCustomers={this.props.cityCustomers}
                        hint={availabilityHint}
                        zipCodes={this.props.zipCodes} />
                </div>
            );

        return (
            <section className="Section Section--green ">
                <div className="Section-content clearfix container SignupPage-bottomAction">
                    {content}
                </div>
            </section>
        );
    }
});

export default AreaCheckSection;
