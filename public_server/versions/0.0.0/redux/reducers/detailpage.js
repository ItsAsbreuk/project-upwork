"use strict";

/**
 * Reducer which sets the new state for the property `state.detailpage`
 *
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/reducers/detailpage.js
 * @class ReducerDetailpage
 * @since 2.0.0
*/

const detailpage = (state, action) => {
    if (state===undefined) {
        state = 0;
    }
    if (action.type==="SHOW_LANDINGPAGE") {
        state = 0;
    } else if (action.type==="SHOW_DETAILPAGE") {
        state = 1;
    } else if (action.type==="SHOW_DETAILPAGE_ALTERNATIVE") {
        state = 2;
    }
    return state;
};

export default detailpage;
