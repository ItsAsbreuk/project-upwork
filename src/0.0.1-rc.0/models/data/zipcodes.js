// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * Zipcode-data where ezhome is currently active
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/data/zipcodes.js
 * @class DataZipcodes
 * @since 2.0.0
*/

/**
 * When fulfilled, the promise returns an array with zipcodes (Strings).
 *
 * @property zipCodes
 * @type Promise
 * @since 2.0.0
*/

// In reality, these values should be read from a db

const zipCodes = Promise.resolve([
    "94022", "94024", "94025", "94027", "94028", "94035", "94040", "94041", "94043",
    "94062", "94063", "94085", "94086", "94087", "94089", "94301", "94303", "94304",
    "94305", "94306", "95008", "95014", "95030", "95032", "95037", "95046", "95050",
    "95051", "95054", "95070", "95110", "95111", "95112", "95113", "95116", "95117",
    "95118", "95119", "95120", "95121", "95122", "95123", "95124", "95125", "95126",
    "95128", "95129", "95130", "95131", "95133", "95134", "95135", "95136", "95138",
    "95139", "95141", "95148", "95127", "95132", "94061"
]);

module.exports = zipCodes;
