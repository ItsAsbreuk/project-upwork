"use strict";

/**
 * Redux-Action which re-sets the state for the property `state.signupuser` to its initial-state.
 *
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/reset-signupuser.js
 * @class ActionResetSignupuser
 * @since 2.0.0
*/

import "js-ext/lib/object"; // to support object.deepClone()
import initialState from "../initial-state";

const action = () => {
    return {
        type: "RESET_SIGNUPUSER",
        signupuser: initialState.signupuser.deepClone()
    };
};

export default action;
