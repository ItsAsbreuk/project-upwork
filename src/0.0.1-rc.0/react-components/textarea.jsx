"use strict";

/**
 * Textarea react-component.
 *
 * Custom textarea-Component with special features that shows up when validated or not-validated.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module react-components/textarea.jsx
 * @class Textarea
 * @since 2.0.0
*/

import React, {PropTypes} from "react";
import Input from "./input.jsx";

const Textarea = React.createClass({

    propTypes: {
        /**
         * Whether to autofocus the Component.
         *
         * @property autoFocus
         * @type Boolean
         * @since 2.0.0
        */
        autoFocus: PropTypes.bool,

        /**
         * The error-message that appears when the element is wrong validated.
         *
         * @property errorMsg
         * @type String
         * @since 2.0.0
        */
        errorMsg: PropTypes.string,

        /**
         * Whether the parent-form has been submitted.
         * This value is needed to determine if the validate-status should be set.
         *
         * @property formSubmitted
         * @type Boolean
         * @since 2.0.0
        */
        formSubmitted: PropTypes.bool,

        /**
         * The text that should appear when the element is wrong validated.
         *
         * @property helpText
         * @type String
         * @since 2.0.0
        */
        helpText: PropTypes.string,

        /**
         * The `id` of the element.
         *
         * @property id
         * @type String
         * @since 2.0.0
        */
        id: PropTypes.string,

        /**
         * The `label` for the element.
         *
         * @property label
         * @type String
         * @since 2.0.0
        */
        label: PropTypes.string,

        /**
         * The `name` for the element.
         *
         * @property name
         * @type String
         * @since 2.0.0
        */
        name: PropTypes.string,

        /**
         * The `onChange` function, which should update the `state`.
         *
         * @property onChange
         * @type Function
         * @since 2.0.0
        */
        onChange: PropTypes.func.isRequired,

        /**
         * The `placeholder` for the element.
         *
         * @property placeholder
         * @type String
         * @since 2.0.0
        */
        placeholder: PropTypes.string,

        /**
         * Whether the property is validated right.
         *
         * @property validated
         * @type Boolean
         * @since 2.0.0
        */
        validated: PropTypes.bool,

        /**
         * The `value` of the input-element.
         *
         * @property value
         * @type String
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
        return <Input {...this.props} pattern={null} type="textarea" />;
    }

});

export default Textarea;
