"use strict";

/**
 * React-Component, landing-page of the home-view.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/landing-page.jsx
 * @class ModuleLandingPage
 * @since 2.0.0
*/

import "../../assets/css/base.scss";
import "../../assets/css/components/slide-layout.scss";
import "../../assets/css/components/form-layout.scss";
import "../../assets/css/components/section.scss";
import "../../assets/css/components/utils.scss";

import React, {PropTypes} from "react";
import appStore from "../../redux/app-store";
import stateListenerMixin from "../../redux/state-listener-mixin";

import AreaCheckSection from "./sections/area-check-section.jsx";
import ARevolutionInGardening from "./sections/a-revolution-in-gardening.jsx";
import CityPage from "./sections/city-page.jsx";
import DontJustTakeOurWordForIt from "./sections/dont-just-take-our-word-for-it.jsx";
import Footer from "../../react-components/footer.jsx";
import GardeningTheRightWay from "./sections/gardening-the-right-way.jsx";
import HowItWorks from "./sections/how-it-works.jsx";
import HowMuchDoesItCosts from "./sections/how-much-does-it-cost.jsx";
import Video from "./sections/video.jsx";
import WhatWeOffer from "./sections/what-we-offer.jsx";

const LandingPage = React.createClass({

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

    // forceUpdate when Redux-state changes by using the `stateListenerMixin:
    /**
     * componentDidMount will subscribe to Redux"s Store and invoke "forceUpdate"
     * when the state changes
     *
     * @method componentDidMount
     * @since 2.0.0
     */

    /**
     * componentWillUnmount will unsubscribe the component from Redux"s Store.
     *
     * @method componentWillUnmount
     * @since 2.0.0
     */
    mixins: [stateListenerMixin],

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        const props = this.props,
            TopComponent = this.props.cityLanding ? CityPage : Video,
            classname = ((appStore.getState().detailpage===0) ? "" : "is-left ") + "SlideLayout-page";

        return (
            <div className={classname} data-landing-page="">
                <TopComponent
                    cityCustomers={props.cityCustomers}
                    zipCodes={props.zipCodes} />
                <ARevolutionInGardening />
                <GardeningTheRightWay />
                <WhatWeOffer />
                <HowMuchDoesItCosts serviceRates={props.serviceRates} />
                <HowItWorks />
                <DontJustTakeOurWordForIt />
                <AreaCheckSection
                    cityCustomers={props.cityCustomers}
                    cityLanding={props.cityLanding}
                    zipCodes={props.zipCodes} />
                <Footer
                    ezhomeURLs={props.ezhomeURLs}
                    lightFooter={true} />
            </div>
        );
    }

});

export default LandingPage;
