"use strict";

/**
 * Redux-Action which sets the state for the property `state.signupuser.phone`
 *
 * The reducer accepts 1 argument: "address", which should be a String,
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/set-signupuser-phone.js
 * @class ActionSetSignupuserPhone
 * @since 2.0.0
*/

const action = phone => {
    return {
        type: "SET_PHONE",
        phone
    };
};

export default action;
