"use strict";

/**
 * Routes for the Hapi-server
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module routes.js
 * @class Routes
*/

/**
 * Routes that will be used by the Hapi-server.
 *
 * @property routes
 * @type Array
 * @since 2.0.0
*/

const routes = [
    {
        method: "GET",
        path: "/",
        handler: function(request, reply) {
            // set staticView=true --> the content of the homepage does not change over time
            reply.reactview("home", {staticView: true});
        }
    },

    {
        method: "GET",
        path: "/accountmanagers",
        handler: function(request, reply) {
            reply.reactview("accountmanagers");
        }
    },

    {
        method: "GET",
        path: "/careers",
        handler: function(request, reply) {
            reply.reactview("careers");
        }
    },

    {
        method: "GET",
        path: "/drought",
        handler: function(request, reply) {
            reply.reactview("drought");
        }
    },

    {
        method: "GET",
        path: "/faq",
        handler: function(request, reply) {
            reply.reactview("faq");
        }
    },
    {
        method: "GET",
        path: "/gardeners",
        handler: function(request, reply) {
            reply.reactview("gardeners");
        }
    },

    {
        method: "GET",
        path: "/maintenance",
        handler: function(request, reply) {
            reply.reactview("maintenance");
        }
    },

    {
        method: "GET",
        path: "/mountainview",
        handler: function(request, reply) {
            reply.reactview("mountainview");
        }
    },

    {
        method: "GET",
        path: "/signup",
        handler: function(request, reply) {
            reply.reactview("signup");
        }
    },

    {
        method: "GET",
        path: "/willowglen",
        handler: function(request, reply) {
            reply.reactview("willowglen");
        }
    }

];

// extend the route-path with `assets/vendor` (deep):
const imagesDirs = [
    "images",
    "images/city",
    "images/city-map",
    "images/people",
    "images/favicon"
];

// include {version}, so the router will only respond to assets with the current version
// this way changed assets will never be cached whith versionbumps
// note: use `this.props.__assetsdir` in the React-Components to retrieve "/assets/{version}/"
imagesDirs.forEach(imagespath => {
    routes.push({
        method: "GET",
        path: "/"+imagespath+"/{filename}",
        handler: function(request, reply) {
            reply.assets(imagespath+"/"+request.params.filename);
        }
    });
});

routes.push({
    method: "GET",
    path: "/{basedir}/assets/{version}/{filename}",
    handler: function(request, reply) {
        reply.assets(request.params.filename);
    }
});

// DO NOT USE "export default" --> the server would not start
module.exports = routes;
