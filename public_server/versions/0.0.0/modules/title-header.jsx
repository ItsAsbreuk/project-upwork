"use strict";

/**
 * React-Component, the title and subtitle for specific pages (views), like "careers" and "faq".
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/title-header.jsx
 * @class ModuleTitleHeader
 * @since 2.0.0
*/

import React, {PropTypes} from "react";
import Navbar from "../react-components/navbar.jsx";

// because we set propTypes, we will use React.createClass instead of extend Component.
const TitleHeader = React.createClass({

    propTypes: {
        /**
         * The title for the page
         *
         * @property titleHeader
         * @type String
         * @since 2.0.0
        */
        titleHeader: PropTypes.string,

        /**
         * The sub-title for the page
         *
         * @property titleSubHeader
         * @type String
         * @since 2.0.0
        */
        titleSubHeader: PropTypes.string
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        const titleHeader = this.props.titleHeader && (<h1>{this.props.titleHeader}</h1>),
            titleSubHeader = this.props.titleSubHeader && (<h2>{this.props.titleSubHeader}</h2>);

        return (
            <div className="ezh-hero ezh-hero-with-nav ezh-hero-with-overlay" >
                <div className="ezh-hero-overlay" />

                <Navbar className="navbar" />

                <div className="ezh-hero-content">
                    {titleHeader}
                    {titleSubHeader}
                </div>
            </div>
        );
    }
});

export default TitleHeader;
