"use strict";

/**
 * Home view react-component, which gets rendered after the router invokes "reply.reactview("home");"
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module views/home.jsx
 * @class ViewHome
 * @since 2.0.0
*/

import "../assets/css/base.scss";
import "../assets/css/pages/home/home.scss";

import React, {PropTypes} from "react";
import LandingPage from "../modules/home/landing-page.jsx";
import DetailPageAlternative from "../modules/home/detail-page-alternative.jsx";
import SubApp from "../pageapps/home.js";

const ViewHome = React.createClass({

    propTypes: {
        /**
         * The Component its children, which basicly consist of one react-component: the view.
         *
         * @property children
         * @type Object
         * @since 2.0.0
        */
        children: PropTypes.object,

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
         * An hash with all messages in the current language.
         *
         * @property messages
         * @type Object
         * @since 2.0.0
        */
        messages: PropTypes.object.isRequired,

        /**
         * ezhome's service-rates for weekly and two-weekly services.
         *
         * @property serviceRates
         *    @property {Number} serviceRates.startPriceServiceOtherWeek rate for service every other week (in $)
         *    @property {Number} serviceRates.startPriceWeeklyService rate for weekly service (in $)
         * @type Number
         * @since 2.0.5
        */
        serviceRates: PropTypes.object.isRequired,

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
     * componentDidMount will initiate the Home"s subApp.
     *
     * @method componentDidMount
     * @since 2.0.0
     */
    componentDidMount() {
        this.subapp = new SubApp();
    },

    /**
     * componentWillUnmount will destroy the Home"s subApp.
     *
     * @method componentWillUnmount
     * @since 2.0.0
     */
    componentWillUnmount() {
        this.subapp.destroy();
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        let props = this.props;
        return (
            <div className="SlideLayout SignupPage">
                <LandingPage
                    cityCustomers={props.cityCustomers}
                    cityLanding={props.cityLanding}
                    ezhomeURLs={props.ezhomeURLs}
                    serviceRates={props.serviceRates}
                    zipCodes={props.zipCodes} />
                <DetailPageAlternative
                    cityCustomers={props.cityCustomers}
                    ezhomeURLs={props.ezhomeURLs}
                    messages={props.messages}
                    zipCodes={props.zipCodes} />
            </div>
        );
    }

});

export default ViewHome;


// Below is he API for the protected this.props properties:

/**
 * The String where the assets of this specific version are.
 * Typically like: `/assets/0.0.1/`
 * Use this if you want the url to the assets with a dynamically version-number
 * that matches the production-version
 *
 * @property __assetsdir
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * meta char-set
 *
 * @property __charset
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * meta description
 *
 * @property __description
 * @protected
 * @private
 * @type String
 * @since 2.0.0
*/

/**
 * The device that the visitor is using: "desktop", "tablet" or "mobile"
 *
 * @property __device
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * Google-analytics api-key
 *
 * @property __ga
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * Url for the shared script-file. This files is generated by webpack as common-script,
 * and also holds all webpack-functionality which runs on the client.
 *
 * @property __itsacommonscript
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The bundled inline css content: bundled for this specific pageview only
 *
 * @property __itsapageinlinecss
 * @type Object
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * Url for the bundled css: bundled for this specific pageview only
 *
 * @property __itsapagelinkcss
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * Url for the page(view)-specific script-file. This files is generated by webpack as a chunck-file.
 *
 * @property __itsapagescript
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The language to be used for this page. Is being controlled by the visitor,
 * either by its lang-preferences, or whenever the visitor changes to another
 * language through the web-application (f.e. "en").
 *
 * @property __lang
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The language-prefix that currently is in the url, whenever u user
 * manually switched to another language (f.e. "/fr").
 *
 * @property __langprefix
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * An hash with all available languages for this web-application.
 * F.e. {"en": "default, "fr": true, "nl": true}
 *
 * @property __languages
 * @type Object
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The locales on the client
 *
 * @property __locales
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The active url-pathname
 *
 * @property __path
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * Active routes (from /routes.js) that can be used for client-side rendering
 *
 * @property __routes
 * @type Array
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The time that sessions may be kept in localstorage
 *
 * @property __sessiontime
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The title for the page
 *
 * @property __title
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The active uri
 *
 * @property __uri
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * Full useragent-information
 *
 * @property __useragent
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The version of the web-application
 *
 * @property __version
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * The name of the page"s view
 *
 * @property __view
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/

/**
 * meta viewport
 *
 * @property __viewport
 * @type String
 * @protected
 * @private
 * @since 2.0.0
*/
