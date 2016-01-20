"use strict";

/**
 * Input react-component.
 *
 * Custom input-Component with special features that shows up when validated or not-validated.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module react-components/input.jsx
 * @class Input
 * @since 2.0.0
*/

import React, {PropTypes} from "react";
import ReactDom from "react-dom";
import classnames from "classnames";
import Label from "./label.jsx";
import MaskedInput from "react-maskedinput";

const Input = React.createClass({

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
         * Set this value whenever the field should use a pattern
         *
         * @property pattern
         * @type String
         * @since 2.0.0
        */
        pattern: PropTypes.string,

        /**
         * The `placeholder` for the element.
         *
         * @property placeholder
         * @type String
         * @since 2.0.0
        */
        placeholder: PropTypes.string,

        /**
         * The `type` of the input-element.
         *
         * @property type
         * @type String
         * @since 2.0.0
        */
        type: PropTypes.string,

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
     * componentDidMount will call `this.activatePlaces()`;
     *
     * @method componentDidMount
     * @since 2.0.0
     */
    componentDidMount() {
        if (this.props.autoFocus && this.refs.input) {
            ReactDom.findDOMNode(this.refs.input).focus();
        }
    },

    /**
     * Gets the Component"s internal state. Note, that the this is NOT Redux"s state.
     *
     * @method getInitialState
     * @return Object the Component internal initial state
     * @since 2.0.0
     */
    getInitialState() {
        return {
            focussed: this.props.autoFocus
        };
    },

    /**
     * The method that is called whenever the input-Element changes its value.
     * Will update the Redux-store (signupuser.homeaddress);
     *
     * @method handleChange
     * @param e {Object} event-payload
     * @since 2.0.0
     */
    handleChange(e) {
        this.changed = true;
        this.props.onChange(e);
    },

    /**
     * The method that is called whenever the input-Element gets the focus.
     * It will change its internal state, so that the css looks right and
     * also any validation-messages disappear.
     *
     * @method handleFocus
     * @param e {Object} event-payload
     * @since 2.0.0
     */
    handleFocus() {
        this.changed = false;
        this.setState({
            focussed: true
        });
    },

    /**
     * The method that is called whenever the input-Element gets blurred.
     * It will change its internal state, so that the css looks right and
     * also any validation-messages appear.
     *
     * @method handleBlur
     * @param e {Object} event-payload
     * @since 2.0.0
     */
    handleBlur() {
        this.changed = false;
        this.setState({
            focussed: false
        });
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        let label, errorMsg, validateMsg, help, labelClass, inputProps, inputElement, maskComponent;
        const props = this.props,
            type = props.type || "text",
            errored = (!this.state.focussed &&
                !this.changed &&
                (props.validated===false) &&
                (props.value || props.formSubmitted)),
            wrapperClass = classnames("Form-formGroup",
                props.className,
                {
                    "is-error": errored,
                    "is-focused": this.state.focused
                });


        if (errored && props.errorMsg) {
            errorMsg = (<div className="help-block">{props.errorMsg}</div>);
        }

        if (!errored && !this.state.focussed && !this.changed && props.value && props.validated) {
            validateMsg = (<span className="form-control-feedback is-success" />);
        }

        if (props.label) {
            labelClass = classnames("control-label", props.labelClasses);
            label = (<Label className={labelClass} htmlFor={props.id} value={props.label} />);
        }

        if (props.helpText) {
            help = (<div className="Form-helpText">{props.helpText}</div>);
        }

        inputProps = {
            className: "form-control",
            id: props.id,
            name: props.name,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            placeholder: props.placeholder,
            ref: "input",
            type: type,
            value: props.value
        };

        // in case we are using `react-maskedinput`, then it doesn"t accept an empty value
        // once it already has content. This makes it impossible to emtpy.
        // therefore we need to empty the maks by hacking it:
        if (props.pattern) {
            maskComponent = this.refs.mask; // only there when already rendered before
            if (maskComponent && !props.value) {
                maskComponent.mask.setValue();
            }
        }

        inputElement = props.pattern ?
                      (<MaskedInput mask={props.pattern} ref="mask" {...inputProps} />) :
                      props.type==="textarea" ?
                          (<textarea {...inputProps} />) :
                          (<input {...inputProps} />);

        return (
            <div className={wrapperClass}>
                {label}
                <div className="Form-inputBox">
                    {inputElement}
                    {validateMsg}
                    {errorMsg}
                </div>
                {help}
            </div>
        );
    }

});

export default Input;
