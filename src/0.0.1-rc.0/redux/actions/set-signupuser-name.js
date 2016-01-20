"use strict";

/**
 * Redux-Action which sets the state for the property `state.signupuser.name`
 *
 * The reducer accepts 1 argument: "name", which should be a String,
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/set-signupuser-name.js
 * @class ActionSetSignupuserName
 * @since 2.0.0
*/

const action = name => {
    return {
        type: "SET_NAME",
        name
    };
};

export default action;
