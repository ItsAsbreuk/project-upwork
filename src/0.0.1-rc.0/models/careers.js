// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * Model to retrieve "this.props" for the career-view.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/careers.js
 * @class ModelCareers
 * @since 2.0.0
*/

/**
 * Returns a Promise that holds ezHome"s workable data
 * cached every 30 minutes.
 *
 * @property workable.getData
 * @type Function
 * @since 2.0.0
*/

const workable = require("./data/workable");

/**
 * Holds the ezhome url's to facebook, twitter etc.
 *
 * @property ezhomeURLs
 * @type Object
 * @since 2.0.5
*/
const ezhomeURLs = require("./data/ezhome-links");

const model = (/* options, language */) => {
    // this === request
    return workable.getData().then(workableData => {
        return {
            ezhomeURLs: ezhomeURLs,
            titleHeader: "Careers",
            workableData
        };
    });
};

module.exports = model;
