/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, form-alternative-detail-page, used inside
 * the alternative-detail-page (for the home view).
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/forms/form-alternative.jsx
 * @class ModuleFormAlternative
 * @since 2.0.0
*/

import React, {PropTypes} from "react";
import appStore from "../../../redux/app-store";
import actionResetSignupuser from "../../../redux/actions/reset-signupuser";
import actionSetSignupuserName from "../../../redux/actions/set-signupuser-name";
import actionSetSignupuserEmail from "../../../redux/actions/set-signupuser-email";
import actionSetSignupuserPhone from "../../../redux/actions/set-signupuser-phone";
import actionSetSignupuserComments from "../../../redux/actions/set-signupuser-comments";
import stateListenerMixin from "../../../redux/state-listener-mixin";

import Event from "itsa-event";

import Input from "../../../react-components/input.jsx";
import Textarea from "../../../react-components/textarea.jsx";

import proposalMobileImg from "../../../assets/images/proposal-mobile.png";
import formNoticeIcon from "../../../assets/images/icon-info.svg";

const FormAlternative = React.createClass({

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
         * An hash with all messages in the current language.
         *
         * @property messages
         * @type Object
         * @since 2.0.0
        */
        messages: PropTypes.object.isRequired,

        /**
         * The name of the form, which will be available as data-name attribute
         *
         * @property name
         * @type Array
         * @since 2.0.0
        */
        name: PropTypes.string,

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
     * Checks if all form-elements are valid
     *
     * @method formValid
     * @return Boolean whether all form-elements are valid
     * @since 2.0.0
     */
    formValid() {
        const validated = appStore.getState().signupuser.validated;
        return validated.name && validated.email && validated.phone;
    },

    /**
     * Returns the label for the formbutton.
     *
     * @method getBtnLabel
     * @return String the label for the form-button
     * @since 2.0.0
     */
    getBtnLabel(supported) {
        return supported ?
            this.props.messages.getProposal :
            this.props.messages.joinWaitList;
    },

    /**
     * Gets the Component"s internal state. Note, that the form also listens to Redux"s state.
     *
     * @method getInitialState
     * @return Object the Component internal initial state
     * @since 2.0.0
     */
    getInitialState() {
        return {
            formSubmitted: false
        };
    },

    /**
     * Returns the `Notice`-text
     *
     * @method getNoticeText
     * @param supported {Boolean} whether to return the `supported` subtitle, or the `get-notifief`
     * @return String
     * @since 2.0.0
     */
    getNoticeText(supported) {
        return (supported ? this.props.messages.satelliteImagery+" " : "") +
               this.props.messages.noPrivacyShared;
    },

    /**
     * Returns the `Title` for the form.
     *
     * @method getTitle
     * @param supported {Boolean} whether to return the `supported` subtitle, or the `get-notifief`
     * @param city {String} the city-name
     * @return String
     * @since 2.0.0
     */
    getTitle(supported, city) {
        return supported ?
               this.props.messages.availableIn + " " + city + "!" :
               this.props.messages.notAvailableIn;
    },

    /**
     * Returns the `Title` for the form.
     *
     * @method getSubTitle
     * @param supported {Boolean} whether to return the `supported` subtitle, or the `get-notifief`
     * @return String
     * @since 2.0.0
     */
    getSubTitle(supported) {
        return supported ?
               this.props.messages.enterInfoGetProposal :
               this.props.messages.waitListGetNotified;
    },

    /**
     * Handles changes of the `name` input-Element
     *
     * @method handleChangeName
     * @param e {object} event-payload
     * @since 2.0.0
     */
    handleChangeName(e) {
        // only process keyboardinput when the alternative-page is active:
        (appStore.getState().detailpage===2) && appStore.dispatch(actionSetSignupuserName(e.target.value));
    },

    /**
     * Handles changes of the `email` input-Element
     *
     * @method handleChangeEmail
     * @param e {object} event-payload
     * @since 2.0.0
     */
    handleChangeEmail(e) {
        // only process keyboardinput when the landingpage is active:
        (appStore.getState().detailpage===2) && appStore.dispatch(actionSetSignupuserEmail(e.target.value));
    },

    /**
     * Handles changes of the `phone` input-Element
     *
     * @method handleChangePhone
     * @param e {object} event-payload
     * @since 2.0.0
     */
    handleChangePhone(e) {
        // only process keyboardinput when the landingpage is active:
        (appStore.getState().detailpage===2) && appStore.dispatch(actionSetSignupuserPhone(e.target.value));
    },

    /**
     * Handles changes of the `comments` input-Element
     *
     * @method handleChangeComments
     * @param e {object} event-payload
     * @since 2.0.0
     */
    handleChangeComments(e) {
        // only process keyboardinput when the landingpage is active:
        (appStore.getState().detailpage===2) && appStore.dispatch(actionSetSignupuserComments(e.target.value));
    },

    /**
     * Handles the submit when the form-button is pressed.
     *
     * @method handleSubmit
     * @since 2.0.0
     */
    handleSubmit() {
        if (!this.formValid()) {
            // setting formSubmitted true, will re-render the Component with all validation-errors
            this.setState({formSubmitted: true});
        } else {
            appStore.dispatch(actionResetSignupuser());
            // navigate to the landingpage, by emitting the "view:showlandingpage"-event
            // `/pageapps/home.js` has a subscription to this event and will navigate.
            /**
            * Event to trigger the view to go to landingpage. Gets handled by the Home"s pageApp.
            *
            * @event view:showlandingpage
            */
            Event.emit("view:showlandingpage");
        }
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        const instance = this, // set `this` into `instance`, because uglifyjs cannot compress `this`
            signupuserState = appStore.getState().signupuser,
            validated = signupuserState.validated,
            cityCustomers = signupuserState.homeaddress.cityCustomers,
            cityImageStyle = {display: cityCustomers.count ? "block" : "none"},
            cityImageBg = {
                backgroundImage: cityCustomers.count ? "url(" + cityCustomers.image + ")" : "none"
            },
            defaultImageStyle = {display: cityCustomers.count ? "none" : "block"};

        return (
            <div className="Form Form--tiled" data-name={instance.props.name}>
                <div className="container">
                    <div className="Form-title">
                        {instance.getTitle(signupuserState.homeaddress.supported, signupuserState.homeaddress.city)}
                    </div>
                    <div className="Form-subTitle">{instance.getSubTitle(signupuserState.homeaddress.supported)}</div>
                    <div className="row middle-sm center-xs">
                        <div className="col-sm-6 hidden-xs">
                            <img className="Form-image" src={proposalMobileImg} style={defaultImageStyle}/>
                            <div style={cityImageStyle}>
                                <div className="Form-imageBox">
                                    <div className="Form-image"
                                        style={cityImageBg}></div>
                                </div>
                                <div className="Form-imageText">Join {cityCustomers.count} happy customers
                                     in {signupuserState.homeaddress.city}!</div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="Form-fieldsBox">
                                <div className="Form-formBox">
                                    <Input
                                        className="form-group"
                                        errorMsg="Enter your name"
                                        formSubmitted={instance.state.formSubmitted}
                                        id="ezh-signinname"
                                        name="name"
                                        onChange={instance.handleChangeName}
                                        placeholder="Name"
                                        validated={validated.name}
                                        value={signupuserState.name} />
                                    <Input
                                        className="form-group"
                                        errorMsg="Email format is user@example.com"
                                        formSubmitted={instance.state.formSubmitted}
                                        name="email"
                                        onChange={instance.handleChangeEmail}
                                        placeholder="Email address"
                                        validated={validated.email}
                                        value={signupuserState.email} />
                                    <Input
                                        className="form-group"
                                        errorMsg="Phone number format: (555) 555-5555"
                                        formSubmitted={instance.state.formSubmitted}
                                        name="phone"
                                        onChange={instance.handleChangePhone}
                                        pattern="(111) 111-1111"
                                        placeholder="Phone"
                                        validated={validated.phone}
                                        value={signupuserState.phone} />
                                    <Textarea
                                        className="form-group hidden-xs"
                                        name="comments"
                                        onChange={instance.handleChangeComments}
                                        placeholder="Comments (optional)"
                                        validated={validated.comments}
                                        value={signupuserState.comments} />
                                </div>
                                <div className="Form-actionBox">
                                    <button
                                        className="Btn Btn--wholeWide Btn--greenGrass Btn--medium"
                                        onClick={instance.handleSubmit}
                                        type="button">
                                        {instance.getBtnLabel(signupuserState.homeaddress.supported)}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Form-noticeBox">
                    <div className="Form-noticeIcon"><img src={formNoticeIcon}/></div>
                    <div className="Form-noticeText">{instance.getNoticeText(signupuserState.homeaddress.supported)}</div>
                </div>
            </div>
        );
    }
});

export default FormAlternative;
