"use strict";

/**
 * Redux-Action which sets the state for the property `state.signupuser.comments`
 *
 * The reducer accepts 1 argument: "comments", which should be a String,
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/set-signupuser-comments.js
 * @class ActionSetSignupuserComments
 * @since 2.0.0
*/

const action = comments => {
    return {
        type: "SET_COMMENTS",
        comments
    };
};

export default action;
