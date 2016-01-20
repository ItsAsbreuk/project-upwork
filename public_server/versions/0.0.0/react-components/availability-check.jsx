"use strict";

/**
 * AvailabilityCheck react-component.
 *
 * A Component that show up as in input-element where users can select their location,
 * after which the pageview will tranform into the "/#detal"-route.
 *
 * Uses the Google-location api.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module react-components/availability-check.jsx
 * @class AvailabilityCheck
 * @since 2.0.0
*/

import "../assets/css/react-components/availability-check.scss";
import "../assets/css/components/buttons.scss";

import React, {PropTypes} from "react";
import reactDOM from "react-dom";
import appStore from "../redux/app-store";
import Event from "itsa-event";

import actionSetSignupuserAddress from "../redux/actions/set-signupuser-address";
import actionSetSignupuserGooglePlaces from "../redux/actions/set-signupuser-google-places";
import Input from "./input.jsx";

const cleanedZip = (zipcode) => {
    if (!zipcode) {
        return "";
    }
    if (zipcode.length > 5) {
        return zipcode.substr(0, 5);
    }
    return zipcode;
};

const AvailabilityCheck = React.createClass({

    propTypes: {
        /**
         * Whether to autofocus the Component.
         *
         * @property autoFocus
         * @type Boolean
         * @since 2.0.0
        */
        autoFocus: PropTypes.bool,

        /**
         * The city-customers info where ezhome is currently active
         *
         * @property cityCustomers
         * @type Object
         * @since 2.0.0
        */
        cityCustomers: PropTypes.object.isRequired,

        /**
         * The hint for the Component (when not validated)
         *
         * @property hint
         * @type String
         * @since 2.0.0
        */
        hint: PropTypes.string,

        /**
         * The `id` for the generated Input-element
         *
         * @property id
         * @type String
         * @since 2.0.0
        */
        id: PropTypes.string,

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
     * Activates Google-map"s `Places` in a save way.
     *
     * @method activatePlaces
     * @chainable
     * @since 2.0.0
     */
    activatePlaces() {
        const instance = this;
        Event.onceAfter("Google:loadplaces", e => {
            e.returnValue.then(() => {
                instance.autocomplete = new window.google.maps.places.Autocomplete(
                    instance.inputElement, instance.autocompleteOpts);
                window.google.maps.event.addListener(instance.autocomplete,
                    "place_changed", instance.onChangeGooglePlaces);
            });
        });
        /**
        * Event to trigger loading of google-places by the MainApp.
        * @event Google:loadplaces
        */
        Event.emit("Google:loadplaces");
        return instance;
    },

    /**
     * componentDidMount will call `this.activatePlaces()`;
     *
     * @method componentDidMount
     * @since 2.0.0
     */
    componentDidMount() {
        const componentDomNode = reactDOM.findDOMNode(this.refs.input);
        this.inputElement = componentDomNode.querySelector("input");
        this.activatePlaces();
    },

    /**
     * Gets the Component"s internal state. Note, that the this is NOT Redux"s state.
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
     * The method that is called whenever the input-Element changes its value.
     * Will update the Redux-store (signupuser.homeaddress);
     *
     * @method handleChange
     * @param e {Object} event-payload
     * @since 2.0.0
     */
    handleChange(e) {
        // only process keyboardinput when the landingpage is active:
        (appStore.getState().detailpage===0) && appStore.dispatch(actionSetSignupuserAddress(e.target.value));
    },

    /**
     * When the user selects a new item from Google-places, this method gets invoked.
     * Will extract the address-data and update the Redux-store (signupuser.homeaddress);
     *
     * @method onChangeGooglePlaces
     * @since 2.0.0
     */
    onChangeGooglePlaces() {
        let place, parsedAddress, parsedZip, i, component, componentType, len;
        // only process keyboardinput when the landingpage is active:
        if (appStore.getState().detailpage===0) {
            place = this.autocomplete && this.autocomplete.getPlace();
            if (place && place.address_components) {
                parsedAddress = {
                    address: place.formatted_address
                };
                len = place.address_components.length;
                for (i=0; i<len; i++) {
                    component = place.address_components[i];
                    componentType = component.types[0];
                    if (componentType == "postal_code") {
                        parsedZip = cleanedZip(component.short_name);
                    } else if (componentType == "locality") {
                        parsedAddress["city_name"] = component.long_name;
                    } else if (componentType == "route") {
                        parsedAddress["street_name"] = component.long_name;
                    } else if (componentType == "street_number") {
                        parsedAddress["primary_number"] = component.short_name;
                    } else if (componentType == "administrative_area_level_1") {
                        parsedAddress["state_abbreviation"] = component.short_name;
                    }
                }
                if (!parsedAddress["city_name"]) {
                    for (i=0; i<len; i++) {
                        parsedAddress["city_name"] =
                            (component.types.indexOf("sublocality") !== -1) ? component.long_name : "";
                    }
                }
                parsedZip && (parsedAddress["zipcode"]=parsedZip);
                appStore.dispatch(actionSetSignupuserGooglePlaces(parsedAddress,
                    this.props.cityCustomers, this.props.zipCodes));
                // now emit a "availabilitycheck:submit"-event,
                // `/pageapps/home.js` will liten to this and jump to the right page
                /**
                * Event to trigger loading of detail-page-alternative, handled by the Home"s subApp.
                * @event availabilitycheck:submit
                */
                Event.emit("availabilitycheck:submit");
            }
        }
    },

    /**
     * Handles the button-click. If the home-addres is valid, the "availabilitycheck:submit" will be submitted,
     * by which the alternative-page gets loaded.
     *
     * @method handleSubmit
     * @chainable
     * @since 2.0.0
     */
    handleSubmit() {
        this.setState({formSubmitted: true});
        appStore.getState().signupuser.validated.homeaddress && Event.emit("availabilitycheck:submit");
        return this;
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
            signupuserState = appStore.getState().signupuser;

        return (
            <div className="AddressForm Form">
                <div className="AddressForm-hint">{instance.props.hint}</div>
                <div className="input-group">
                    <Input
                        autoFocus={instance.props.autoFocus}
                        errorMsg="Please select an address from the list"
                        formSubmitted={instance.state.formSubmitted}
                        id={instance.props.id}
                        name="address"
                        onChange={instance.handleChange}
                        placeholder="Enter your home address"
                        ref="input"
                        validated={signupuserState.validated.homeaddress}
                        value={signupuserState.homeaddress.address} />
                    <span className="input-group-btn">
                        <button className="Btn Btn--small" onClick={instance.handleSubmit} type="button">
                            <span className="">&#8250;</span>
                        </button>
                    </span>
                </div>
            </div>
        );
    }
});

export default AvailabilityCheck;
