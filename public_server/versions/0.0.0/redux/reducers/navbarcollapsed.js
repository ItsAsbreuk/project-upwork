"use strict";

/**
 * Reducer which sets the new state for the property `state.navbarcollapsed`
 *
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/reducers/navbarcollapsed.js
 * @class ReducerNavbarcollapsed
 * @since 2.0.0
*/

const navbarcollapsed = (state, action) => {
    if (state===undefined) {
        state = true;
    }
    if (action.type==="NAVBAR_COLLAPSE_TOGGLE") {
        state = !state;
    } else if (action.type==="NAVBAR_COLLAPSE_OPEN") {
        state = false;
    } else if (action.navbarcollapsed==="NAVBAR_COLLAPSE_CLOSE") {
        state = true;
    }
    return state;
};

export default navbarcollapsed;
