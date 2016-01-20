"use strict";

/**
 * SubApp for the Home-view.
 *
 * Will runs on the client only whenever the Home-view is active.
 * Automaticly gets destroyed and re-initiated whenever there is a view-change on the client.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module pageapps/home.js
 * @class AppHome
 * @since 2.0.0
*/

import PageAppClass from "itsa-apps/app-classes/PageAppClass";
import appStore from "../redux/app-store";
import actionShowLandingPage from "../redux/actions/show-landingpage";
import actionShowDetailPageAlternative from "../redux/actions/show-detailpage-alternative";

import {later} from "utils";

const AppHome = PageAppClass.subClass(function() {
    // inititiate anything here
    const instance = this;
    instance.setupEvents();
    instance.tryNavigatePage();
},
    {
        /**
         * Will reset the pageview either the landing-page, or the detail-page-alternative,
         * depending on the hash in the browser-url. This way the ser will see the right page
         * whever there is a full pageload.
         *
         * Do not use this method directly, to prevent running into situations where the page has gone while the app is
         * yet present. Use "NavigatePage" instead.
         *
         * @method _NavigatePage
         * @private
         * @protected
         * @chainable
         * @since 2.0.0
         */
        _NavigatePage() {
            let inputNode, href;
            if (window.location.hash==="#detail") {
                inputNode = document.getElementById("ezh-signinname");
                inputNode && inputNode.focus();
                appStore.dispatch(actionShowDetailPageAlternative());
            } else {
                href = window.location.hash;
                if (href.length<=1) {
                    // no link to internal node-id
                    // we can focus the cursosr
                    this._focusAvailabilityNode();
                }
                appStore.dispatch(actionShowLandingPage());
            }
            return this;
        },

        /**
         * Sets the focus to the first `AvailabilityNode` with a delay os 500ms
         * This delay is needed to prevent Google-Places from set its dropdownlist
         * at the wrong x-position
         *
         * @method _focusAvailabilityNode
         * @private
         * @protected
         * @chainable
         * @since 2.0.0
         */
        _focusAvailabilityNode() {
            // only set focus when sliding has finished --> otherwise Google-places might set its dropdown
            // at the wrong x-position
            // take into account that sliding happens with 400ms transition
            this.slidetimer = later(() => {
                const inputNode = document.getElementById("ezh-availability-check-first");
                inputNode && inputNode.focus();
            }, 500);
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
            instance.after("availabilitycheck:submit", instance.showDetailPageAlternative.bind(instance));
            instance.after("view:showlandingpage", instance.showLandingPage.bind(instance));
            instance.after("router:navigate", instance.tryNavigatePage.bind(instance));
            return instance;
        },

        /**
         * Will switch the view into "detail-page-alternative".
         * By emitting a "saveHistoryHash"-event.
         *
         * This event gets handled by the main-App, which ensures the navigation and url location-update take places.
         *
         * @method showDetailPageAlternative
         * @chainable
         * @since 2.0.0
         */
        showDetailPageAlternative() {
            /**
            * Event to trigger the view to go to a new hash. Gets handled by the MainApp.
            *
            * @event view:saveHistoryHash
            * @param [e.hash] {String} the hash where the view should go into
            */
            const inputNode = document.getElementById("ezh-signinname");
            inputNode && inputNode.focus();
            this.emit("saveHistoryHash", {hash: "detail"});
            return this;
        },

        /**
         * Will switch the view into "landingpage-alternative".
         * By emitting a "saveHistoryHash"-event.
         *
         * This event gets handled by the main-App, which ensures the navigation and url location-update take places.
         *
         * @method showLandingPage
         * @chainable
         * @since 2.0.0
         */
        showLandingPage() {
            this._focusAvailabilityNode();
            this.emit("saveHistoryHash");
            return this;
        },

        /**
         * Will reset the pageview either the landing-page, or the detail-page-alternative,
         * depending on the hash in the browser-url. This way the ser will see the right page
         * whever there is a full pageload.
         *
         * @method tryNavigatePage
         * @param [e] {Object} eventobject when called by the "router:navigate" event
         * @chainable
         * @since 2.0.0
         */
        tryNavigatePage(e) {
            if (!e || (e.route.view==="home")) {
                this._NavigatePage();
            }
            return this;
        },

        /**
         * Destroy-function for the App.
         *
         * @method destroy
         * @since 2.0.0
         */
        destroy() {
            this.slidetimer && this.slidetimer.cancel();
            // destroy anything here
            // no need to detach context-eventlisteners: they will be detached automaticly
        }
    }
);

export default AppHome;
