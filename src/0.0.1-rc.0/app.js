"use strict";

/**
 * Main App that always runs on the client.
 * Is also responsible for clientside routing.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module app.js
 * @class MainApp
 * @since 2.0.0
*/

import "js-ext/lib/promise";
import Event from "itsa-event";

const MainAppRouterClass = require("itsa-apps/app-classes/MainAppRouterClass");
const GOOGLE_PLACES_SCRIPT = "https://maps.googleapis.com/maps/api/js?libraries=places";

/**
 * Clientside router.
 * See https://www.npmjs.com/package/itsa-react-router
 *
 * @property router
 * @type Router
 * @since 2.0.0
*/

/**
 * Clientside controller.
 * See https://www.npmjs.com/package/itsa-client-controller
 *
 * @property controller
 * @type Controller
 * @since 2.0.0
*/

/**
 * IO object used for creating ajax-requests.
 * See http://itsa.io/docs/itsa-io/index.html
 *
 * @property io
 * @type IO
 * @since 2.0.0
*/


const MainApp = MainAppRouterClass.subClass(function() {
    // inititiate anything here
    const instance = this;
    instance._oldEventSystem = !window.document.addEventListener;
    window.scrollTo(0, 0);
    this.router.setScrollAnchorTime(400);
    this.setupEvents();
},
    {
        /**
         * Detaches all events that are set by the App. None of the "instance"-events need to be detached,
         * this happens full automaticly.
         *
         * @method detachGlobalEvents
         * @chainable
         * @since 2.0.0
         */
        detachGlobalEvents() {
            Event.undefEvent("Google:loadplaces");
            return this;
        },

        /**
         * Injects a script into the page, as last childNode inside the "head"-Element.
         *
         * @method insertScript
         * @param url {String} the url of the script that should be inserted.
         * @return {Promise} A promise that gets resolved as soon as the script is loaded.
         * @since 2.0.0
         */
        insertScript(url) {
            let instance = this,
                newNode, promise;
            const tagName = "script";
            const DOCUMENT = window.document;
            newNode = DOCUMENT.createElement(tagName);
            newNode.async = 1;
            newNode.src = url;

            promise = new Promise((fulfill, reject) => {
                let fulfillSubscriber, rejectSubscriber;
                const unsubScribe = () => {
                    // support for IE8:
                    if (instance._oldEventSystem) {
                        newNode.detachEvent("onload", fulfillSubscriber);
                        newNode.detachEvent("onerror", rejectSubscriber);
                    } else {
                        newNode.removeEventListener("load", fulfillSubscriber);
                        newNode.removeEventListener("error", rejectSubscriber);
                    }
                };
                fulfillSubscriber = () => {
                    unsubScribe();
                    fulfill();
                };
                rejectSubscriber = e => {
                    unsubScribe();
                    reject(e);
                };
                // support for IE8:
                if (instance._oldEventSystem) {
                    newNode.attachEvent("onload", fulfillSubscriber);
                    newNode.attachEvent("onerror", rejectSubscriber);
                } else {
                    newNode.addEventListener("load", fulfillSubscriber);
                    newNode.addEventListener("error", rejectSubscriber);
                }
            });
            DOCUMENT.head.appendChild(newNode);

            return promise;
        },

        /**
         * Saves a hash inside the `router`. Can be invoked directly with a String,
         * or will be invoked on any "*:saveHistoryHash"-event.
         *
         * @method saveHistoryHash
         * @param e {String|Object} the url of the script that should be inserted.
         * @chainable
         * @since 2.0.0
         */
        saveHistoryHash(e) {
            this.router.saveHistoryHash((typeof e==="string") ? e : e.hash);
            return this;
        },

        /**
         * Sets up all events. None of the "instance"-events need to be detached,
         * this happens full automaticly.
         *
         * @method setupEvents
         * @chainable
         * @since 2.0.0
         */
        setupEvents() {
            const instance = this;
            instance.after("*:saveHistoryHash", instance.saveHistoryHash.bind(instance));
            Event.defineEvent("Google:loadplaces")
                 .defaultFn(() => {
                     if (!instance._googlePlaces) {
                         instance._googlePlaces = instance.insertScript(GOOGLE_PLACES_SCRIPT);
                     }
                     return instance._googlePlaces;
                 });
            return instance;
        },

        /**
         * Destroy-function for the App.
         *
         * @method destroy
         * @since 2.0.0
         */
        destroy() {
            // destroy anything here
            // no need to detach context-eventlisteners: they will be detached automaticly
            this.detachGlobalEvents();
        }
    }
);

// NOTE: DO NOT USE "export default MainApp" --> during the build-process this file gets examined for "module.exports"
module.exports = MainApp;
