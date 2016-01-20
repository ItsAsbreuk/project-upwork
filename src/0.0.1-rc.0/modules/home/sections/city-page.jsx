/* eslint max-len: [1, 180, 4] */

"use strict";

/**
 * React-Component, the "City Page" section
 * for the landing-page of the home-page (view)
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/home/sections/city-page.jsx
 * @class ModuleCityPage
 * @since 2.0.0
*/

import "../../../assets/css/base.scss";
import "../../../assets/css/pages/home/components/sections/city-page.scss";

import React from "react";
import Navbar from "../../../react-components/navbar.jsx";

const CityPage = React.createClass({

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        return (
            <div className="Section Section--greenFlat InvitePage" data-auto-height-mobile="">

                <Navbar className="Navbar" hide_links={true} />

                <div className="Section-content container">
                    <h1 className="Section-title InvitePage-title" data-title="">
                        <span className="hidden-xs">ezhome</span> Smart Gardening
                    </h1>

                    <h2 className="Section-subtitle InvitePage-subTitle" data-sub-title>
                        An affordable, weekly gardening service
                    </h2>

                    <div className="row InvitePage-grid" data-grid>
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="InvitePage-image hidden-xs">
                                <div data-image></div>
                            </div>

                            <div className="InvitePage-address" data-address></div>
                        </div>
                        <div className="col-sm-6 col-md-5 col-sm-offset-1">
                            <div className="InvitePage-quotaText hidden-xs">
                                Your personalized blueprint and quote are ready!
                            </div>
                            <div className="InvitePage-priceBox">
                                <div className="InvitePage-weeklyPrice">
                                    <div className="InvitePage-price">$<span data-weekly-price></span></div>
                                    <div className="InvitePage-priceTitle">Weekly</div>
                                </div>
                                <div className="InvitePage-biweeklyPrice">
                                    <div className="InvitePage-price" >$<span data-biweekly-price></span></div>
                                    <div className="InvitePage-priceTitle">Bi-Weekly</div>
                                </div>
                            </div>
                            <button className="Btn Btn--orange Btn--wide" data-contine-btn=""
                                data-name="View My Personalized Quote" data-place="1" type="submit">
                                <span className="Section-mainBtnText" >View My Personalized Quote <span className="Section-mainBtnArrow">&#8250;</span></span>
                            </button>
                            <a className="Section-link u-mt15" href="/?from=personalized">This is not my address</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default CityPage;
