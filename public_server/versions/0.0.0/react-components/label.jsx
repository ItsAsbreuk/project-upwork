"use strict";

/**
 * Input react-component.
 *
 * Custom label-Component.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module react-components/label.jsx
 * @class Label
 * @since 2.0.0
*/

import React, {PropTypes} from "react";

const Label = React.createClass({

    propTypes: {
        /**
         * The class for the label-element.
         *
         * @property className
         * @type Boolean
         * @since 2.0.0
        */
        className: PropTypes.string,

        /**
         * The native `html-for`-attribibute, which jumps to the Element specified.
         *
         * @property htmlFor
         * @type Boolean
         * @since 2.0.0
        */
        htmlFor: PropTypes.string,

        /**
         * The label-text
         *
         * @property value
         * @type Boolean
         * @since 2.0.0
        */
        value: PropTypes.string.isRequired
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <label className={this.props.className} htmlFor={this.props.htmlFor}>
                {this.props.value}
            </label>
        );
    }

});

export default Label;
