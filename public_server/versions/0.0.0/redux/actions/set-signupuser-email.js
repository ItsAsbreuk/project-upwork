"use strict";

/**
 * Redux-Action which sets the state for the property `state.signupuser.email`
 *
 * The reducer accepts 1 argument: "email", which should be a String,
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/set-signupuser-email.js
 * @class ActionSetSignupuserEmail
 * @since 2.0.0
*/

const action = email => {
    return {
        type: "SET_EMAIL",
        email
    };
};

export default action;
