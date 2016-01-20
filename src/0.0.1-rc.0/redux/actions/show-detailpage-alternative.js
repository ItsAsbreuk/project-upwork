"use strict";

/**
 * Redux-Action which turns the home-view into the state of the detail-alternative-page,
 * by setting for the property `state.detailpage` into the value: 2.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/show-detailpage-alternative.js
 * @class ActionShowDetailpageAlternative
 * @since 2.0.0
*/

const action = () => {
    return {
        type: "SHOW_DETAILPAGE_ALTERNATIVE"
    };
};

export default action;
