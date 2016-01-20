"use strict";

/**
 * Returns the web-applications initial state, used by Redux.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux.initial-state.js
 * @class ReduxState
 * @since 2.0.0
*/

import validate from "./validate";

const initialState = {
    /**
     * Whether the homepage is showing the landingpage (0), pr the alternative-page (2)
     *
     * @property detailpage
     * @type number
     * @default 0
     * @since 2.0.0
    */
    detailpage: 0,

    /**
     * Whether the homepage is showing the landingpage (0), pr the alternative-page (2)
     *
     * @property navbarcollapsed
     * @type boolean
     * @default true
     * @since 2.0.0
    */
    navbarcollapsed: true,

    /**
     * Whether the homepage is showing the landingpage (0), pr the alternative-page (2)
     *
     * @property {Object} signupuser
     *    @property {String} signupuser.comments default: ""
     *    @property {String} signupuser.email default: ""
     *    @property {Object} signupuser.homeaddress see: <i>signupuser.homeaddress</i>
     *    @property {String} signupuser.name default: ""
     *    @property {String} signupuser.phone default: ""
     *    @property {Object} signupuser.validators see: <i>signupuser.validators</i>
     *    @property {Object} signupuser.validated default: {}
     * @type object
     * @since 2.0.0
    */
    signupuser: {
        comments: "",
        email: "",
        /**
         * Whether the homepage is showing the landingpage (0), pr the alternative-page (2)
         *
         * @property {Object} signupuser.homeaddress
         *    @property {String} signupuser.homeaddress.address default: ""
         *    @property {Boolean} signupuser.homeaddress.supported default: false
         *    @property {String} signupuser.homeaddress.city default: ""
         *    @property {Object} signupuser.homeaddress.cityCustomers default: {}
         * @type object
         * @since 2.0.0
        */
        homeaddress: {
            address: "",
            supported: false,
            city: "",
            cityCustomers: {}
        },
        name: "",
        phone: "",
        /**
         * Whether the homepage is showing the landingpage (0), pr the alternative-page (2)
         *
         * @property {Object} signupuser.validators
         *    @property {String} signupuser.validators.email default: ["required", "email"]
         *    @property {Boolean} signupuser.validators.name default: ["required"]
         *    @property {String} signupuser.validators.phone default: ["required", "phone"]
         * @type object
         * @since 2.0.0
        */
        validators: {
            email: ["required", "email"],
            name: ["required"],
            phone: ["required", "phone"]
        },
        validated: {}
    }
};

// set initial validation:
const keys = Object.keys(initialState.signupuser);
keys.forEach(key => {
    // only inspect primary type-properties of initialState.signupuser
    if (typeof initialState.signupuser[key]!=="object") {
        initialState.signupuser.validated[key] = validate(initialState.signupuser[key],
            initialState.signupuser.validators[key]);
    }
});
initialState.signupuser.validated.homeaddress = false;

export default initialState;
