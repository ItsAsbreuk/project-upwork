// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * ezHome"s Workable data
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/data/workable.js
 * @class DataWorkable
 * @since 2.0.0
*/

let workableDataCache;

const rp = require("request-promise"),
    options = {
        uri: "https://www.workable.com/api/accounts/10725",
        json: true // Automatically parses the JSON string in the response
    },
    REFRESH_INTERVAL = 30, // cachetime in minutes
    later = require("utils").later;

/**
 * Re-aranges the workable-data in a way that it can be processed by the `careers`-view (page).
 *
 * @method rearrangeData
 * @private
 * @param data {Array} unprocessed workable-data
 * @return {Array} re-arranged workable data
 * @since 2.0.0
 */
const rearrangeData = data => {
    let newData = [],
        definedGroups = {};

    data.forEach(item => {
        let group = item.department;
        if (!definedGroups[group]) {
            definedGroups[group] = {group, items: []};
            newData.push(definedGroups[group]);
        }
        definedGroups[group].items.push({
            title: item.title,
            location: (item.state || "") + ((item.state && item.city) ? ", " : "") + (item.city || ""),
            "created_at": item.created_at,
            shortcode: item.shortcode
        });
    });

    return newData;
};

/**
 * Retrieves the workable data through a http-request.
 *
 * @method getWorkableData
 * @private
 * @return {Promise} when fulfilled, the response-value is an array with the data
 * @since 2.0.0
*/
const getWorkableData = () => {
    return rp(options).then(data => rearrangeData(data.jobs));
};

/**
 * Retrieves the workable-data in the correct form that can be processed by the `careers`-view (page).
 * Will use a cached-value when present. The cached value is updated every `REFRESH_INTERVAL` minutes.
 *
 * @method getData
 * @return {Promise} when fulfilled, the response-value is an array with the data
 * @since 2.0.0
*/
const getData = () => {
    if (!workableDataCache) {
        workableDataCache = getWorkableData().catch(err => {
            console.log(err);
            return [];
        });
    }
    return workableDataCache;
};

// set the timer that reloads the workable data every `REFRESH_INTERVAL` minutes:
later(() => {
    // only when `getWorkableData()` fulfills, we reset the new workableDataCache:
    getWorkableData().then(data => {
        workableDataCache = Promise.resolve(data);
    });

}, 60000*REFRESH_INTERVAL, true);

module.exports = {getData};
