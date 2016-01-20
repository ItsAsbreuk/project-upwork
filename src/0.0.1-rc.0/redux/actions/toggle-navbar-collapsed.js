"use strict";

/**
 * Redux-Action which toggles the state for the property `state.navbarcollapsed`
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/toggle-navbar-collapsed.js
 * @class ActionToggleNavbarCollapsed
 * @since 2.0.0
*/

const action = () => {
    return {
        type: "NAVBAR_COLLAPSE_TOGGLE"
    };
};

export default action;
