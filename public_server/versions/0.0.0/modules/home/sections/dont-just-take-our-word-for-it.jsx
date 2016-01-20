/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "Don’t Just Take Our Word for It…" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/dont-just-take-our-word-for-it.jsx
 * @class ModuleDontJustTakeOurWordForIt
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/dont-just-take-our-word-for-it.scss";

import React from "react";

const DontJustTakeOurWordForIt = React.createClass({

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <section className="Section Section--gray Section--bottomLeaves">
                <div className="Section-content container">

                    <h2 className="Section-title">Don’t Just Take Our Word for It…</h2>

                    <div className="Section-topSpacing SignupPage-feedbackBox">

                        <div className="UserFeedback is-left">
                            <div className="UserFeedback-bubble">Your crew is exceptional — polite, smart, and efficient.</div>
                            <div className="UserFeedback-sign">Kathleen, San Jose</div>
                        </div>
                        <div className="UserFeedback is-right">
                            <div className="UserFeedback-bubble">We’re impressed. Our yard has not looked this good in a long time.</div>
                            <div className="UserFeedback-sign">Lisa, San Jose</div>
                        </div>
                        <div className="UserFeedback is-left">
                            <div className="UserFeedback-bubble">These guys are disrupting the landscape universe and it’s a beautiful thing!!!!</div>
                            <div className="UserFeedback-sign">Joshua, Los Gatos</div>
                        </div>
                        <div className="UserFeedback is-right">
                            <div className="UserFeedback-bubble">THE BEST DAMN GARDENER I HAVE EVER HAD!!!</div>
                            <div className="UserFeedback-sign">Kevin, Los Gatos</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default DontJustTakeOurWordForIt;
