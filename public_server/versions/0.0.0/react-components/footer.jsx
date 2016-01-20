/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * Footer react-component --> the footer that appears on the ezhome.io web-page.
 *
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module react-components/footer.jsx
 * @class Footer
 * @since 2.0.0
*/

import React, {PropTypes} from "react";
import logoWhite from "../../../node_modules/@ezhome/ezh-theme/app/images/logo-white.svg";
import logoColored from "../../../node_modules/@ezhome/ezh-theme/app/images/logo-colored.svg";

const Footer = React.createClass({

    propTypes: {
        /**
         * ezhome's urls's to facebook, twitter etc.
         *
         * @property ezhomeURLs
         *    @property {String} ezhomeURLs.facebook link to ezhome's facebook-page
         *    @property {String} ezhomeURLs.twitter link to ezhome's twitter-page
         *    @property {String} ezhomeURLs.instagram link to ezhome's instagram-page
         *    @property {String} ezhomeURLs.pinterest link to ezhome's pinterest-page
         * @type Number
         * @since 2.0.5
        */
        ezhomeURLs: PropTypes.object.isRequired,

        /**
         * Whether the footer should be a `light-footer`.
         *
         * @property lightFooter
         * @type Boolean
         * @since 2.0.0
        */
        lightFooter: PropTypes.bool
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        const props = this.props,
            footClass = (props.lightFooter ? "ezh-standard-footer-light " : "") +
            "ezh-footer ezh-standard-footer",
            vendorImage = this.props.lightFooter ? logoColored : logoWhite;


        return (
            <footer className={footClass}>
                <ul>
                    <li><a className="ezh-footer-logo" href="/"><img src={vendorImage} /></a></li>
                    <li><a href="mailto:contact@ezhome.com"><i className="fa fa-envelope" /> contact@ezhome.com</a></li>
                    <li><a href="tel:+1-650-300-1866"><i className="fa fa-phone" /> (650) 300-1866</a></li>
                </ul>
                <ul className="ezh-footer-social">
                    <li><a data-external-link="" data-label="facebook" href={props.ezhomeURLs.facebook} target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a data-external-link="" data-label="twitter" href={props.ezhomeURLs.twitter} target="_blank"><i className="fa fa-twitter"></i></a></li>
                    <li><a data-external-link="" data-label="instagram" href={props.ezhomeURLs.instagram} target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a data-external-link="" data-label="pinterest" href={props.ezhomeURLs.pinterest} target="_blank"><i className="fa fa-pinterest"></i></a></li>
                </ul>
            </footer>
        );
    }

});

export default Footer;
