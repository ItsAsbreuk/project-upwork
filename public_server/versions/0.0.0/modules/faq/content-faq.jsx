"use strict";

/**
 * React-Component, the for the faq-page (view).
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/faq/content-faq.jsx
 * @class ModuleContentFAQ
 * @since 2.0.0
*/

import React, {PropTypes} from "react";

const categoryBaseClass = "ezh-button-list-icon-faq ezh-button-list-icon-sm ";

const ContentFAQ = React.createClass({

    propTypes: {
        /**
         * All Frequently Asked Questions with their answers.
         *
         * @property faq
         * @type Array
         * @since 2.0.0
        */
        faq: PropTypes.array.isRequired
    },

    /**
     * Generates an array with the icons for all faq-categories.
     *
     * @method generateIcons
     * @return [ReactComponents]
     * @since 2.0.0
     */
    generateIcons() {
        return this.props.faq.map((category, i) => {
            let href = "#" + category.slug,
                classname = categoryBaseClass + category.icon;
            return (
                <li key={i}>
                    <a className="ezh-button-list-item ezh-button-list-item-lg" href={href}>
                        <div className={classname}></div>
                        <p>{category.name}</p>
                    </a>
                </li>
            );
        });
    },

    /**
     * Generates an array with all the faq"s.
     *
     * @method generateFAQ
     * @return [ReactComponents]
     * @since 2.0.0
     */
    generateFAQ() {
        let faq = [];
        const generateCategoryQuestions = (questions, answers) => {
            return questions.map((question, i) => {
                return (
                    <section key={i}>
                        <h4>{question}</h4>
                        <div dangerouslySetInnerHTML={answers[i]} />
                    </section>
                );
            });
        };

        this.props.faq.forEach((category, i) => {
            const categoryQuestions = generateCategoryQuestions(category.questions, category.answers),
                classname = "container ezh-fixed-container ezh-spaced-sections-60 "+
                    "ezh-container-padded-top ezh-container-padded-bottom",
                keyAnchor = "a" + i;

            faq.push((<a id={category.slug} key={keyAnchor} name={category.slug} />));
            faq.push((
                <div className="ezh-fluid-container ezh-subtle-bordered-bottom" key={i}>
                    <div className={classname}>
                        <section>
                            <h3 className="ezh-upper-dark-green">{category.name}</h3>
                        </section>
                        {categoryQuestions}
                    </div>
                </div>
            ));
        });
        return faq;
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
            <div>
                <div className="ezh-fluid-container ezh-subtle-bordered-bottom">
                    <div className="container ezh-fixed-container">
                        <ul className="ezh-button-list-faq">
                            {this.generateIcons()}
                        </ul>
                    </div>
                </div>
                {this.generateFAQ()}
            </div>
        );
    }
});

export default ContentFAQ;
