import React, {PropTypes} from "react";

/**
 * React-Component, an ul-element with a list of all available languages
 * inside anchor-elements.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/__language_menulist.jsx
 * @class ModuleLanguageMenulist
 * @since 2.0.0
*/

const classList = "pure-menu-list",
    classMenuItem = "pure-menu-item",
    classMenuItemSelected = "pure-menu-selected",
    classMenuItemLink = "pure-menu-link";

const LanguageMenu = React.createClass({

    propTypes: {
        /**
         * The current active language
         *
         * @property __lang
         * @type String
         * @protected
         * @private
         * @since 2.0.0
        */
        __lang: PropTypes.string.isRequired,

        /**
         * An hash with all available languages, where each language is a key
         *
         * @property __languages
         * @protected
         * @private
         * @type Object
         * @since 2.0.0
        */
        __languages: PropTypes.object.isRequired,

        /**
         * The current uri of the page.
         * This is being used to set the right links on the anchor-elements.
         *
         * @property __uri
         * @protected
         * @private
         * @type String
         * @since 2.0.0
        */
        __uri: PropTypes.string.isRequired
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        // because this.props.__languages is an object, we need to transform it into an array first:
        const languages = [];
        const keys = Object.keys(this.props.__languages);

        keys.forEach(lang => {
            if (this.props.__languages[lang]!==false) {
                languages.push(lang);
            }
        });

        return (
            <ul className={classList}>
                {languages.map(lang => {
                    const classname = classMenuItem + ((this.props.__lang===lang) ? " "+classMenuItemSelected : ""),
                        link = "/"+lang+this.props.__uri,
                        label = lang.toUpperCase(); // <-- you can specify another label here, perhaps countryflags

                    return (
                        <li className={classname} key={lang}>
                            <a className={classMenuItemLink} data-setlang={lang} href={link}>{label}</a>
                        </li>
                    );
                })}
           </ul>
        );
    }

});

export default LanguageMenu;
