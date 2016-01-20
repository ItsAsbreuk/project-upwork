"use strict";

/**
 * Mixin for react-Components, which will ensure that ste Component
 * gets re-rendered whenever the Redux-store changes.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module state-listener-mixin.js
 * @class MixinStateListener
 * @since 2.0.0
*/

import appStore from "./app-store";

const MixinStateListener = {

    /**
     * componentDidMount will subscribe to Redux"s Store and invoke "forceUpdate"
     * when the state changes
     *
     * @method componentDidMount
     * @since 2.0.0
     */
    componentDidMount() {
        this.unSubscribeStore = appStore.subscribe(this.forceUpdate.bind(this));
    },

    /**
     * componentWillUnmount will unsubscribe the component from Redux"s Store.
     *
     * @method componentWillUnmount
     * @since 2.0.0
     */
    componentWillUnmount() {
        this.unSubscribeStore();
    }

};

export default MixinStateListener;
