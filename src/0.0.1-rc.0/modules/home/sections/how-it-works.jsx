/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "How It Works" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/how-it-works.jsx
 * @class ModuleHowItWorks
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/components/ordered-list.scss";
import "../../../assets/css/pages/home/components/sections/how-it-works.scss";

const React = require("react");

const HowItWorks = React.createClass({

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <section className="Section Section--green Section--greenLeaves">
                <div className="Section-content container">
                    <div className="SignupPage-howItWorks">
                        <h2 className="Section-title">How It Works</h2>

                        <div className="OrderedList Section-topSpacing">
                            <div className="OrderedList-item">
                                Enter your address and contact info. Our architects will create a
                                blueprint of your garden based on satellite imagery.
                            </div>
                            <div className="OrderedList-item">
                                We’ll email you your blueprint and proposal within 48 hours. It will contain
                                a quote for both weekly and bi-weekly essentials service.
                            </div>
                            <div className="OrderedList-item">
                                Choose your plan and sign up online. If you’d like any changes to your essentials proposal,
                                we’ll work with you to create the perfect plan for your home.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default HowItWorks;
