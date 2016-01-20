'use strict';

const getVersion = require('itsa-react-server-webpack-builder').getVersion,
      fs = require('fs'),
      version = getVersion(),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      webpack = require('webpack'),
      SRC_DIR = '/src/'+version.developmentString,
      cssFilename = 'css/[name].css',
      // publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
      publicPath = 'assets/'+version.nextProdVersion+'/',
      filename = '../views/[name].js',
      Path = require('path'),
      cwd = process.cwd();

const configFn = production => {

    let plugins, reactServerConfig, urlLoaderLimit, reactServerConfigFile;
    reactServerConfigFile = fs.readFileSync(cwd+SRC_DIR+'/reactserver.config.json', 'utf8');
    try {
        reactServerConfig = JSON.parse(reactServerConfigFile);
    }
    catch (err) {
        reactServerConfig = {};
    }
    urlLoaderLimit = reactServerConfig['url-loader-limit'],

    plugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new ExtractTextPlugin(cssFilename, {allChunks: false})
    ];

    const path = (production ? './public_server' : './development_server') +'/versions/'+version.nextProdVersion+'/assets/';

    return {
        context: cwd+SRC_DIR,
        entry: '', // <-- leave empty: gulp will use this directory as base
        output: {
            path,
            publicPath,
            filename,
            cssFilename
        },
        target: 'node',
        plugins,
        module: {
            loaders: [
                { test: /\.jsx?$/, loader: 'babel-loader', query: {compact: false} },
                { test: /\.s?css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?{"includePaths":["./node_modules/@ezhome", "./node_modules/@ezhome/ezh-theme/node_modules"]}!postcss-loader',{allChunks: false}) }, // use ! to chain loaders
                { test: /\.(jpe?g|png|gif)$/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')}, // inline base64 URLs for <=8k images, direct URLs for the rest
                { test: /\.json?$/, loader: 'json-loader' },
                { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')} // inline base64 URLs for <=8k images, direct URLs for the rest
            ]
        }
    };
};

module.exports = configFn;