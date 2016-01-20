// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * City-customers data where ezhome is currently active
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/data/city-customers.js
 * @class DataCityCustomers
 * @since 2.0.0
*/

/**
 * When fulfilled, the promise returns an object with city-customers,
 * where every key is the city-location.
 *
 * @property cityCustomers
 * @type Promise
 * @since 2.0.0
*/

// In reality, these values should be read from a db

const cityCustomers = Promise.resolve({
    "campbell": {
        count: 48,
        image: "/images/city-map/campbell.jpg"
    },
    "east-palo-alto": {
        count: 8,
        image: "/images/city-map/east-palo-alto.jpg"
    },
    "los-altos": {
        count: 28,
        image: "/images/city-map/los-altos.jpg"
    },
    "los-gatos": {
        count: 39,
        image: "/images/city-map/los-gatos.jpg"
    },
    "menlo-park": {
        count: 51,
        image: "/images/city-map/menlo-park.jpg"
    },
    "morgan-hill": {
        count: 36,
        image: "/images/city-map/morgan-hill.jpg"
    },
    "mountain-view": {
        count: 62,
        image: "/images/city-map/mountain-view.jpg"
    },
    "palo-alto": {
        count: 64,
        image: "/images/city-map/palo-alto.jpg"
    },
    "redwood-city": {
        count: 21,
        image: "/images/city-map/redwood-city.jpg"
    },
    "san-jose": {
        count: 366,
        image: "/images/city-map/san-jose.jpg"
    },
    "santa-clara": {
        count: 30,
        image: "/images/city-map/santa-clara.jpg"
    },
    "saratoga": {
        count: 18,
        image: "/images/city-map/saratoga.jpg"
    },
    "sunnyvale": {
        count: 52,
        image: "/images/city-map/sunnyvale.jpg"
    }
});

module.exports = cityCustomers;
