"use strict";

/**
 * Navbar react-component --> the navbar (menu) that appears on the ezhome.io web-page.
 *
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module react-components/navbar.jsx
 * @class Navbar
 * @since 2.0.0
*/

import "../assets/css/react-components/nav.scss";

import React, {PropTypes} from "react";
import appStore from "../redux/app-store";
import actionToggleNavbar from "../redux/actions/toggle-navbar-collapsed";
import stateListenerMixin from "../redux/state-listener-mixin";

import logoWhite from "../../../node_modules/@ezhome/ezh-theme/app/images/logo-white.svg";
import logoColored from "../../../node_modules/@ezhome/ezh-theme/app/images/logo-colored.svg";

const urlLogin = "http://my.ezhome.com/login/";

const Navbar = React.createClass({

    propTypes: {
        /**
         * Whether to autofocus the Component.
         *
         * @property autoFocus
         * @type Boolean
         * @since 2.0.0
        */
        className: PropTypes.string,

        /**
         * Whether to autofocus the Component.
         *
         * @property autoFocus
         * @type Boolean
         * @since 2.0.0
        */
        hideLinks: PropTypes.bool,

        /**
         * Whether to autofocus the Component.
         *
         * @property autoFocus
         * @type Boolean
         * @since 2.0.0
        */
        lightNav: PropTypes.bool,

        /**
         * Whether to autofocus the Component.
         *
         * @property autoFocus
         * @type Boolean
         * @since 2.0.0
        */
        navEmpty: PropTypes.bool
    },

    // forceUpdate when Redux-state changes by using the `stateListenerMixin:
    /**
     * componentDidMount will subscribe to Redux"s Store and invoke "forceUpdate"
     * when the state changes
     *
     * @method componentDidMount
     * @since 2.0.0
     */

    /**
     * componentWillUnmount will unsubscribe the component from Redux"s Store.
     *
     * @method componentWillUnmount
     * @since 2.0.0
     */
    mixins: [stateListenerMixin],

    /**
     * Returns the hamburger-button on the navbar.
     *
     * @method getHamburgerButton
     * @return AnchorComponent
     * @since 2.0.0
     */
    getHamburgerButton() {
        // use <a> instead of <button> here to fix weird intermittent rendering issues in Chrome
        let classname;
        if (this.props.hideLinks) {
            classname = (this.props.lightNav ? "ezh-btn-outline-dark " : "") +
                "navbar-right visible-xs-inline-block pull-right u-mr15 btn "+
                "btn-default ezh-btn-outline btn-sm navbar-btn";
            return <a className={classname} href={urlLogin}>Login</a>;
        }
        classname = (appStore.getState().navbarcollapsed ? "collapsed " : "") + "navbar-toggle";
        return (<a className={classname} onClick={this.toggleNavbar} role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </a>);
    },

    /**
     * Toggles the mobile-navbar.
     *
     * @method render
     * @return toggleNavbar
     * @chainable
     * @since 2.0.0
     */
    toggleNavbar() {
        appStore.dispatch(actionToggleNavbar());
        return this;
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        let links, navClass, loginClass, vendorImage, component, classnameNavCollapse;
        if (this.props.navEmpty) {
            navClass = this.props.className;
            component = (
                <a className="nav-brand" href="/#">
                    <img height="30" src={logoWhite} />
                </a>
            );
        } else {
            navClass = (this.props.className ? this.props.className+" " : "") +
                "navbar navbar-default ezh-navbar";
            loginClass = (this.props.lightNav ? "ezh-btn-outline-dark " : "") +
                "navbar-right btn btn-default ezh-btn-outline btn-sm navbar-btn",
            classnameNavCollapse = (appStore.getState().navbarcollapsed ? "" : "in ") +
                "navbar-collapse collapse",
            vendorImage = this.props.lightNav ? logoColored : logoWhite;

            if (!this.props.hideLinks) {
                links = (<ul className="nav navbar-nav navbar-right">
                            <li><a href="/careers/">Careers</a></li>
                            <li><a href="/faq/">FAQ</a></li>
                        </ul>);
            }

            component = (
                <div className="container">
                    <div className="navbar-header">
                        {this.getHamburgerButton()}
                        <a className="navbar-brand" href="/">
                            <img height="30" src={vendorImage} />
                        </a>
                    </div>

                    <div className={classnameNavCollapse} id="ezh-navbar-collapse">
                        <a className={loginClass} href={urlLogin}>Login</a>
                        {links}
                    </div>
                </div>
            );
        }

        return (
            <nav className={navClass}>
                {component}
            </nav>
        );
    }

});

export default Navbar;
