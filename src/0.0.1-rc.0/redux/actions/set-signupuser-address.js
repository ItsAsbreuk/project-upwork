"use strict";

/**
 * Redux-Action which sets the state for the property `state.signupuser.homeaddress`
 *
 * The reducer accepts 1 argument: "address", which should be a String,
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/set-signupuser-address.js
 * @class ActionSetSignupuserAddress
 * @since 2.0.0
*/

const action = address => {
    return {
        type: "SET_ADDRESS",
        address
    };
};

export default action;
