// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * ezhome's urls's to facebook, twitter etc.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/data/ezhome-urls.js
 * @class DataCityCustomers
 * @since 2.0.0
*/

/**
 * Holds the ezhome links to facebook, twitter etc.
 *
 * @property ezhomeURLs
 * @type Object
 * @since 2.0.5
*/

// In reality, these values should be read from a db

const ezhomeURLs = {
    facebook: "http://www.facebook.com/ezhomeinc",
    twitter: "http://www.twitter.com/ezhomeinc",
    instagram: "http://www.instagram.com/ezhomeinc",
    pinterest: "http://www.pinterest.com/ezhomeinc"
};

module.exports = ezhomeURLs;
