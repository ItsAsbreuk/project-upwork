"use strict";

/**
 * Redux"s store, holding all reducers specified by the combined reducer: "/redux/reducers/app.js"
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module redux.app-store.js
 * @class Store
 * @since 2.0.0
*/

import "js-ext/lib/object"; // add support for deepcloning object

import {createStore} from "redux";
import appReducer from "./reducers/combined";
import initialState from "./initial-state";
import clientStorage from "itsa-redux-clientstorage";

let _store;

// specify if Redux-state should be stored (and retrieved) in localstorage:
const useLocalStorage = false;

const AppStore = () => {
    let state;
    if (!_store) {
        useLocalStorage && (state=clientStorage.readStateFromClientStorage(initialState));

        state = initialState.deepClone();
        _store = createStore(appReducer, state);

        useLocalStorage && clientStorage.watch(_store);
    }
    return _store;
};

export default {
    /**
     * Returns the current state of the web-application as an immutable object.
     * (just a plain object, but without any shared references)
     *
     * @method getState
     * @return {Object} the current state of the web-application
     * @since 2.0.0
     */
    getState: AppStore().getState,

    /**
     * Sets a new state, specified by the "action", which should be a Redux-action
     * Valid Redux-actions are within the folder: "/redux/actions".
     *
     * @method dispatch
     * @param action {Object} the Redux-action to dispatch
     * @since 2.0.0
     */
    dispatch: AppStore().dispatch,

    /**
     * Subscribes a callback function to whenever Redux changes its state.
     * Typically, this should be set within the "componentDidMount"-method of a React-Component.
     *
     * The return-value is a function that should be used to detach the subscriber.
     * Typically, detaching should be set within the "componentWillUnmount"-method of a React-Component.
     *
     * @method subscribe
     * @param callback {Function} the function to be invoked when the Redux-state changes
     * @return {Function} a handler to detach the subscription
     * @since 2.0.0
     */
    subscribe: AppStore().subscribe,

    /**
     * Replaces the reducer that the store AppStore.
     *
     * @method replaceReducer
     * @param newReducer {Function} the new Reducer to be used by the store.
     * @since 2.0.0
     */
    replaceReducer: AppStore().replaceReducer
};
