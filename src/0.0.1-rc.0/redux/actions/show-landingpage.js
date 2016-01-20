"use strict";

/**
 * Redux-Action which turns the home-view into the state of the landing-page,
 * by setting for the property `state.detailpage` into the value: 0.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/show-landingpage.js
 * @class ActionShowLandingpage
 * @since 2.0.0
*/

const action = () => {
    return {
        type: "SHOW_LANDINGPAGE"
    };
};

export default action;
