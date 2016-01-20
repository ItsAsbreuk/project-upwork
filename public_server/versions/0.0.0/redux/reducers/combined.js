"use strict";

/**
 * Combined Reducer being used as the main reducer of web-app"s Store.
 *
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux/reducers/app.js
 * @class ReducerApp
 * @since 2.0.0
*/

import signupuser from "./signupuser";
import detailpage from "./detailpage";
import navbarcollapsed from "./navbarcollapsed";
import {combineReducers} from "redux";

const appReducer = combineReducers({
    signupuser,
    detailpage,
    navbarcollapsed
});

export default appReducer;
