// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * ezhome's service-rates for weekly and two-weekly services.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/data/service-rates.js
 * @class DataServiceRates
 * @since 2.0.0
*/

/**
 * Holds the ezhome service-rates
 *
 * @property serviceRates
 * @type Object
 * @since 2.0.5
*/

// In reality, these values should be read from a db

const serviceRates = {
    startPriceServiceOtherWeek: 34, // $ per visit
    startPriceWeeklyService: 24 // $ per visit
};

module.exports = serviceRates;
