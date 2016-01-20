"use strict";

/**
 * Redux-Action which sets the state for the property `state.signupuser.homeaddress`
 *
 * The reducer accepts 3 arguments: googleplaces, cityCustomers and zipCodes
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/actions/set-signupuser-google-places.js
 * @class ActionSetSignupuserGooglePlaces
 * @since 2.0.0
*/

const action = (googleplaces, cityCustomers, zipCodes) => {
    return {
        type: "SET_GOOGLE_PLACES",
        googleplaces,
        cityCustomers,
        zipCodes
    };
};

export default action;
