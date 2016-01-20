/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, alternative-detail-page for the home view.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/detail-page-alternative.jsx
 * @class ModuleDetailPageAlternative
 * @since 2.0.0
*/

import "../../assets/css/base.scss";
import "../../assets/css/pages/home/components/detail-page-alternative.scss";
import "../../assets/css/components/form-layout.scss";
import "../../assets/css/components/ordered-list.scss";

import React, {PropTypes} from "react";
import appStore from "../../redux/app-store";
import stateListenerMixin from "../../redux/state-listener-mixin";

import Navbar from "../../react-components/navbar.jsx";
import FormAlternative from "./forms/form-alternative.jsx";

const DetailPageAlternative = React.createClass({

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
            classname = ((appStore.getState().detailpage===2) ? "" : "is-right ") +
            "SlideLayout-page FormLayout is-lightGray is-withLeaves";

        return (
            <div className={classname} data-detail-alternative-page="">
                <Navbar className="Nav" navEmpty={true} />
                <div data-detail-alternative-page-content="">
                    <div className="FormLayout-subPage" data-form-alternative-page="">
                        <FormAlternative
                            cityCustomers={this.props.cityCustomers}
                            messages={this.props.messages}
                            name="signupAlternativeFrom"
                            zipCodes={this.props.zipCodes} />
                    </div>
                    <div className="ThanksPage ThanksPage--alternative FormLayout-subPage is-right" data-thanks-alternative-page>
                        <div className="ThanksPage-content">
                            <h1 className="FormLayout-title">Thank You!</h1>
                            <p className="ThanksPage-text is-first">Your proposal request has been received! Here’s what will happen next:</p>
                            <div className="OrderedList OrderedList--small OrderedList--gray Section-topSpacing">
                                <div className="OrderedList-item"><span>We’ll prepare your blueprint and service proposal and email you a link within 48 hours.</span></div>
                                <div className="OrderedList-item"><span>Review your proposal and choose the plan that’s right for you.</span></div>
                                <div className="OrderedList-item"><span>Sign up online and begin your ezhome service!</span></div>
                            </div>
                            <p className="ThanksPage-text u-mt30">
                                If you have questions, check out our <a href="/faq/">FAQ</a> or <a href="mailto:contact@ezhome.com">email us</a>.
                            </p>
                        </div>
                        <div className="ThanksPage-bottomSection">
                            <div className="u-mb20">Follow us</div>
                            <ul className="ezh-footer-social">
                                <li><a data-external-link="" data-label="facebook" href={props.ezhomeURLs.facebook} target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a data-external-link="" data-label="twitter" href={props.ezhomeURLs.twitter} target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a data-external-link="" data-label="instagram" href={props.ezhomeURLs.instagram} target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a data-external-link="" data-label="pinterest" href={props.ezhomeURLs.pinterest} target="_blank"><i className="fa fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="WaitPage FormLayout-subPage is-right" data-wait-alternative-page="">
                        <h1 className="FormLayout-title">Thank You!</h1>
                        <p className="WaitPage-text">We"ll send you an email as soon as we"re available in your area.</p>
                        <a className="WaitPage-btn Btn Btn--greenGrass Btn--medium" data-name="To landing page" data-place="0"
                            data-to-landing-page="" href="/">OK!</a>
                    </div>
                </div>
            </div>
        );
    }

});

export default DetailPageAlternative;
