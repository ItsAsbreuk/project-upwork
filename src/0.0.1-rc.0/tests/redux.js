/* global describe, it */

"use strict";

require("babel-core/register");

const expect = require("chai").expect,
    appStore = require("../redux/app-store"),
    actionSignupAddress = require("../redux/actions/set-signupuser-address"),
    actionSignupComments = require("../redux/actions/set-signupuser-comments"),
    actionSignupEmail = require("../redux/actions/set-signupuser-email"),
    actionSignupGooglePlaces = require("../redux/actions/set-signupuser-google-places"),
    actionSignupName = require("../redux/actions/set-signupuser-name"),
    actionSignupPhone = require("../redux/actions/set-signupuser-phone"),
    actionResetSignupuser = require("../redux/actions/reset-signupuser"),
    actionShowDetailpageAlternative = require("../redux/actions/show-detailpage-alternative"),
    actionShowLandingpage = require("../redux/actions/show-landingpage"),
    actionToggleNavbarCollapsed = require("../redux/actions/toggle-navbar-collapsed");

describe("Redux state", () => {

    it("initial state", () => {
        expect(appStore.getState().signupuser.name).to.be.eql("");
    });

});

describe("Redux actions", () => {

    it("set-signupuser-comments", () => {
        expect(appStore.getState().signupuser.validated.comments).to.be.true;
        appStore.dispatch(actionSignupComments("ezhome comments"));
        expect(appStore.getState().signupuser.comments).to.be.eql("ezhome comments");
        expect(appStore.getState().signupuser.validated.comments).to.be.true;
        appStore.dispatch(actionSignupComments(""));
        expect(appStore.getState().signupuser.comments).to.be.eql("");
        expect(appStore.getState().signupuser.validated.comments).to.be.true;
        appStore.dispatch(actionSignupComments("ezhome comments"));
        expect(appStore.getState().signupuser.comments).to.be.eql("ezhome comments");
        expect(appStore.getState().signupuser.name).to.be.eql("");
    });

    it("set-signupuser-email", () => {
        expect(appStore.getState().signupuser.validated.email).to.be.false;
        appStore.dispatch(actionSignupEmail("info@ezhome.com"));
        expect(appStore.getState().signupuser.email).to.be.eql("info@ezhome.com");
        expect(appStore.getState().signupuser.validated.email).to.be.true;
        appStore.dispatch(actionSignupEmail("x.com"));
        expect(appStore.getState().signupuser.email).to.be.eql("x.com");
        expect(appStore.getState().signupuser.validated.email).to.be.false;
        appStore.dispatch(actionSignupEmail(""));
        expect(appStore.getState().signupuser.email).to.be.eql("");
        expect(appStore.getState().signupuser.validated.email).to.be.false;
        expect(appStore.getState().signupuser.comments).to.be.eql("ezhome comments");
    });

    it("set-signupuser-google-places", () => {
        let places = {
            address: "San Francisco - California",
            "city_name": "San Francisco",
            "primary_number": "4",
            "street_name": "no-name"
        };
        expect(appStore.getState().signupuser.validated.homeaddress).to.be.false;
        appStore.dispatch(actionSignupGooglePlaces(places, [], []));
        expect(appStore.getState().signupuser.homeaddress.address).to.be.eql(places.address);
        expect(appStore.getState().signupuser.validated.homeaddress).to.be.true;
        appStore.dispatch(actionSignupGooglePlaces(null, [], []));
        expect(appStore.getState().signupuser.homeaddress.address).to.be.eql(places.address);
        expect(appStore.getState().signupuser.homeaddress.address).to.be.eql(places.address);
        expect(appStore.getState().signupuser.validated.homeaddress).to.be.true;
    });

    it("set-signupuser-address", () => {
        expect(appStore.getState().signupuser.validated.homeaddress).to.be.true;
        appStore.dispatch(actionSignupAddress("ezhome-address"));
        expect(appStore.getState().signupuser.homeaddress.address).to.be.eql("ezhome-address");
        expect(appStore.getState().signupuser.validated.homeaddress).to.be.false;
        expect(appStore.getState().signupuser.validated.homeaddress).to.be.false;
        expect(appStore.getState().signupuser.name).to.be.eql("");
    });

    it("set-signupuser-name", () => {
        expect(appStore.getState().signupuser.validated.name).to.be.false;
        appStore.dispatch(actionSignupName("ezhome"));
        expect(appStore.getState().signupuser.name).to.be.eql("ezhome");
        expect(appStore.getState().signupuser.validated.name).to.be.true;
        appStore.dispatch(actionSignupName(""));
        expect(appStore.getState().signupuser.name).to.be.eql("");
        expect(appStore.getState().signupuser.validated.name).to.be.false;
        expect(appStore.getState().signupuser.comments).to.be.eql("ezhome comments");
    });

    it("set-signupuser-phone", () => {
        expect(appStore.getState().signupuser.validated.phone).to.be.false;
        appStore.dispatch(actionSignupPhone("(222) 222-3333"));
        expect(appStore.getState().signupuser.phone).to.be.eql("(222) 222-3333");
        expect(appStore.getState().signupuser.validated.phone).to.be.true;
        appStore.dispatch(actionSignupPhone(""));
        expect(appStore.getState().signupuser.phone).to.be.eql("");
        expect(appStore.getState().signupuser.validated.phone).to.be.false;
        expect(appStore.getState().signupuser.comments).to.be.eql("ezhome comments");
    });

    it("reset-signupuser", () => {
        const emptyAddress = {
            address: "",
            supported: false,
            city: "",
            cityCustomers: {}
        };

        appStore.dispatch(actionSignupComments("ezhome comments"));
        appStore.dispatch(actionSignupEmail("info@ezhome.com"));
        appStore.dispatch(actionSignupName("ezhome"));
        appStore.dispatch(actionSignupPhone("(222) 222-3333"));

        appStore.dispatch(actionResetSignupuser("ezhome"));
        expect(appStore.getState().signupuser.name).to.be.eql("");
        expect(appStore.getState().signupuser.email).to.be.eql("");
        expect(appStore.getState().signupuser.phone).to.be.eql("");
        expect(appStore.getState().signupuser.comments).to.be.eql("");
        expect(appStore.getState().signupuser.homeaddress).to.be.eql(emptyAddress);
    });

    it("show-detailpage-alternative", () => {
        expect(appStore.getState().detailpage).to.be.eql(0);
        appStore.dispatch(actionShowDetailpageAlternative());
        expect(appStore.getState().detailpage).to.be.eql(2);
    });

    it("show-landingpage", () => {
        expect(appStore.getState().detailpage).to.be.eql(2);
        appStore.dispatch(actionShowLandingpage());
        expect(appStore.getState().detailpage).to.be.eql(0);
    });

    it("toggle-navbar-collapsed", () => {
        expect(appStore.getState().navbarcollapsed).to.be.true;
        appStore.dispatch(actionToggleNavbarCollapsed());
        expect(appStore.getState().navbarcollapsed).to.be.false;
        appStore.dispatch(actionToggleNavbarCollapsed());
        expect(appStore.getState().navbarcollapsed).to.be.true;
    });

});
