"use strict";

/**
 * Reducer which sets the new state for the property `state.homeaddress`
 *
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/reducers/homeaddress.js
 * @class ReducerHomeaddress
 * @since 2.0.0
*/

import "js-ext/lib/object"; // enable object.deepClone() and Object.isObject()
import validate from "../validate";
import initialState from "../initial-state";

/*
              comments: "",
              email: "",
              homeaddress: {
                  address: "",
                  supported: false,
                  city: "",
                  cityCustomers: {}
              },
              name: "",
              phone: "",
              validators: {
                  email: ["required", "email"],
                  name: ["required"],
                  phone: ["required", "phone"],
              }
*/

const tryValidate = (state, field) => {
    const validator = state.validators[field];
    validator && (state.validated[field]=validate(state[field], validator));
};

const hasCitySupport = (zipcode, zipCodes) => {
    return zipCodes.indexOf(zipcode) > -1;
};

const signupuser = (state, action) => {
    let newState;
    if (state===undefined) {
        newState = initialState.signupuser.deepClone();
    } else {
        newState = state.deepClone();
    }

    if (action.type==="RESET_SIGNUPUSER") {
        newState = action.signupuser;
    } else if (action.type==="SET_ADDRESS") {
        newState.homeaddress.address = action.address;
        newState.homeaddress.supported = false;
        newState.homeaddress.city = "",
        newState.homeaddress.cityCustomers = {};
        newState.validated.homeaddress = false;
    } else if (action.type==="SET_COMMENTS") {
        newState.comments = action.comments;
        tryValidate(newState, "comments");
    } else if (action.type==="SET_EMAIL") {
        newState.email = action.email;
        tryValidate(newState, "email");
    } else if (action.type==="SET_GOOGLE_PLACES") {
        if (Object.isObject(action.googleplaces)) {
            newState.homeaddress.address = action.googleplaces.address;
            newState.homeaddress.supported = hasCitySupport(action.googleplaces.zipcode, action.zipCodes);
            newState.homeaddress.city = action.googleplaces.city_name.toLowerCase().replace(" ", "-");
            newState.homeaddress.cityCustomers = action.cityCustomers[newState.homeaddress.city] || {};
            newState.validated.homeaddress = true;
        }
    } else if (action.type==="SET_NAME") {
        newState.name = action.name;
        tryValidate(newState, "name");
    } else if (action.type==="SET_PHONE") {
        newState.phone = action.phone;
        tryValidate(newState, "phone");
    }

    return newState;
};

export default signupuser;
