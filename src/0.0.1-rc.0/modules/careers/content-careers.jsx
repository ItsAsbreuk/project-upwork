"use strict";

/**
 * React-Component, the header for specific "hero"-pages (views), like "careers" and "faq".
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/header.jsx
 * @class ModuleContentCareers
 * @since 2.0.0
*/

import React, {PropTypes} from "react";

const ContentCareers = React.createClass({

    propTypes: {
        /**
         * All ezHome"s open positions that are currently defined at Workable.
         * See www.workable.com
         *
         * @property workableData
         * @type Array
         * @since 2.0.0
        */
        workableData: PropTypes.array.isRequired
    },

    /**
     * Generates an array with all the careers.
     *
     * @method generateFAQ
     * @return [ReactComponents]
     * @since 2.0.0
     */
    renderCareers() {
        let careers = [];
        this.props.workableData.forEach(careerGroup => {
            let items,
                itemskey = "key" + careerGroup.group;
            careers.push((<h2 className="whr-group" key={careerGroup.group}>{careerGroup.group}</h2>));

            items = careerGroup.items.map(career => {
                const href = "https://www.workable.com/j/" + career.shortcode,
                    location = career.location &&
                        (<li className="whr-location" key={0}>
                            <span className="heading">Location:</span> {career.location}
                            </li>);

                return (
                    <li className="whr-item" key={career.shortcode}>
                        <h3 className="whr-title">
                            <a href={href}>{career.title}</a>
                        </h3>
                        <ul className="whr-info">
                            {location}
                            <li className="whr-date" key={1}>
                                <span className="heading">Creation date:</span> {career.created_at}
                            </li>
                        </ul>
                    </li>
                );
            });

            careers.push((<ul className="whr-items" key={itemskey}>{items}</ul>));
        });

        return careers;
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
            <div className="ezh-content">
                <div>
                    <section className="ezh-content-section">
                        <div className="container ezh-fixed-container">
                            <div id="whr_embed_hook">
                                {this.renderCareers()}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
});

export default ContentCareers;
