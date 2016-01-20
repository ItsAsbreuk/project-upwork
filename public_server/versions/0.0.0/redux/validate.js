"use strict";

/**
 * Validator for Redux-store objects. Will be used by Redux-reducers.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module validate.js
 * @class ReduxValidate
 * @since 2.0.0
*/

import "js-ext/lib/string"; // enable `String.validateEmail`

const REG_EXP_PHONE = /^\(\d{0,3}\) \d{0,3}\-\d{0,4}$/;

/**
 * Holds all validate-functions, specified by `key`.
 *
 * @property validatorsFunc
 * @type Object
 * @private
 * @since 2.0.0
 */
const validatorsFunc = {

    required(val) {
        return !!val;
    },

    email(val) {
        return val.validateEmail();
    },

    phone(val) {
        return REG_EXP_PHONE.test(val) || !val;
    }

};

/**
 * Validates the `value` by its `validators`.
 * Uses the private method `validatorsFunc` to validate.
 *
 * @method validate
 * @param value {Any} the value of the property
 * @param validators {Array} all validators that should be checked
 * @return Boolean whether the `value` is validated
 * @since 2.0.0
 */
const validate = (value, validators) => {
    let valid;
    if (!validators) {
        return true;
    }

    validators.some(validatorKey => {
        validatorsFunc[validatorKey] && (valid=validatorsFunc[validatorKey](value));
        return !valid;
    });

    return !!valid;
};

export default validate;
