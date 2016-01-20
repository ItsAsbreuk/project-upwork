/* global describe, it */

"use strict";

// require("babel-core/register");

const React = require("react");
const TestUtils = require("react-addons-test-utils");

const chai = require("chai");
const expect = chai.expect;
const equalJSX = require("chai-equal-jsx");
const renderer = TestUtils.createRenderer();

// const AvailabilityCheck = require("../react-components/availability-check.jsx");
// const Footer = require("../react-components/footer.jsx");
// const Input = require("../react-components/input.jsx");
const Label = require("../react-components/label.jsx");
// const Navbar = require("../react-components/navbar.jsx");
// const Textarea = require("../react-components/textarea.jsx");

chai.use(equalJSX);

/*
 * Note: the react-components have css-requirements.
 * currently testing will fail: need to fins a solution to require
 * components that are build through webpack
*/

describe("React components", () => {

/*
    it("availability-check.jsx", () => {
        renderer.render(<AvailabilityCheck className="someclass" htmlFor="inputnode" value="ezhome" />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <label className="someclass" htmlFor="inputnode">
                ezhome
            </label>
        );
        expect(actual).to.be.eql(expected);
    });

    it("footer.jsx", () => {
        renderer.render(<Footer lightFooter={true} />);
        const actual = renderer.getRenderOutput();
        const expected = ();
        expect(actual).to.be.eql(expected);
    });

    it("input.jsx", () => {
        renderer.render(<Input className="someclass" htmlFor="inputnode" value="ezhome" />);
        const actual = renderer.getRenderOutput();
        const expected = ();
        expect(actual).to.be.eql(expected);
    });
*/
    it("label.jsx", () => {
        renderer.render(<Label className="someclass" htmlFor="inputnode" value="ezhome" />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <label className="someclass" htmlFor="inputnode">
                ezhome
            </label>
        );
        expect(actual).to.be.eql(expected);
    });
/*
    it("navbar.jsx", () => {
        renderer.render(<Navbar className="someclass" htmlFor="inputnode" value="ezhome" />);
        const actual = renderer.getRenderOutput();
        const expected = ();
        expect(actual).to.be.eql(expected);
    });

    it("textarea.jsx", () => {
        renderer.render(<Textarea className="someclass" htmlFor="inputnode" value="ezhome" />);
        const actual = renderer.getRenderOutput();
        const expected = ();
        expect(actual).to.be.eql(expected);
    });
*/
});
