/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "Video" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/video.jsx
 * @class ModuleVideo
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/video.scss";

import React, {PropTypes} from "react";
import AvailabilityCheck from "../../../react-components/availability-check.jsx";
import Navbar from "../../../react-components/navbar.jsx";

const availabilityHint = "Check if we\"re available in your area:";

const Video = React.createClass({

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
        return (
            <div className="Section Section--video" data-auto-height-mobile="">
                <div className="Section-video">
                    <video autoPlay loop muted
                        poster="http://dlluo0yktvfad.cloudfront.net/slides/video2-001.jpg" preload="auto">
                        <source src="http://dlluo0yktvfad.cloudfront.net/_video2.mp4" type="video/mp4" />
                        <source src="http://dlluo0yktvfad.cloudfront.net/_video2.webm" type="video/webm" />
                    </video>
                </div>

                <div className="Section-overlay" />

                <Navbar className="Navbar" />

                <div className="Section-content container">
                    <h1 className="Section-title" data-main-title="">
                        Smart Gardening
                    </h1>

                    <h2 className="Section-subtitle">
                        An affordable, weekly gardening service led by expert horticulturists
                    </h2>

                    <div className="Section-actionBox">
                        <div data-address-form="" id="address-form-top">
                            <AvailabilityCheck
                                autoFocus={true}
                                cityCustomers={this.props.cityCustomers}
                                hint={availabilityHint}
                                id="ezh-availability-check-first"
                                name="signupAddressFrom"
                                zipCodes={this.props.zipCodes} />
                        </div>
                    </div>
                </div>

                <a className="Section-mobileShowMore" href="#ezh-gardenrevolution">
                    <div />
                </a>

            </div>
        );
    }
});

export default Video;
