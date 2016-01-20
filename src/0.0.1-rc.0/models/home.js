// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * Model to retrieve "this.props" for the home-view.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/home.js
 * @class ModelHome
 * @since 2.0.0
*/

require("js-ext/lib/promise");
require("fs-extra");

const fsp = require("fs-promise");
const Path = require("path");

/**
 * Holds the City-customer from the file /models/data/city-customers.js
 *
 * @property cityCustomersPromise
 * @type Promise
 * @since 2.0.0
*/
const cityCustomersPromise = require("./data/city-customers");

/**
 * Holds the ezhome service-rates
 *
 * @property serviceRates
 * @type Object
 * @since 2.0.5
*/
const serviceRates = require("./data/service-rates");

/**
 * Holds the ezhome url's to facebook, twitter etc.
 *
 * @property ezhomeURLs
 * @type Object
 * @since 2.0.5
*/
const ezhomeURLs = require("./data/ezhome-links");

/**
 * Holds the Zipcode from the file /models/data/zipcodes.js
 *
 * @property zipCodesPromise
 * @type Promise
 * @since 2.0.0
*/
const zipCodesPromise = require("./data/zipcodes");

const model = (options, language) => {
    // this === request
    const promiseArray = [
        cityCustomersPromise,
        zipCodesPromise,
        fsp.readJson(Path.resolve(__dirname, "../languages/"+language+".json"))
    ];

    return Promise.finishAll(promiseArray)
                  .then(response => {
                      const fulfilled = response.fulfilled;
                      return {
                          cityCustomers: fulfilled[0],
                          cityLanding: false,
                          ezhomeURLs: ezhomeURLs,
                          messages: fulfilled[2],
                          serviceRates: serviceRates,
                          zipCodes: fulfilled[1]
                      };
                  });

};

module.exports = model;
