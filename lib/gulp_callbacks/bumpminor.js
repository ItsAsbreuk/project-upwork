/**
 * Description
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module xxxapp.js
 * @class xxxMainApp
*/

'use strict';

require('../gulp_components/createserverversion');
require('../gulp_components/minor');
require('../gulp_components/package');
require('../gulp_components/changelog');
require('../gulp_components/webpack-apps');
require('../gulp_components/webpack-views');
require('./test');
require('./lint');

const getVersion = require('itsa-react-server-webpack-builder').getVersion,
      runSequence = require('run-sequence');

const cb = callback => {
  const version = getVersion(),
        nextDevVersion = version.getNextDevVersion('minor'),
        freedVersion = version.nextProdVersion;
  runSequence(
    // 'test',  // caoot be run during build
    'lint',
    'component:minor',
    'component:package',
    // 'component:changelog',
    'component:createserverversion',
    'component:webpack-views',
    'component:webpack-apps',
    function (error) {
      let message, notify;
      if (error) {
        console.log('=============================================================================================================================');
        console.log('NO VERSION-BUMP, DUE TO ERROR:');
        console.log(error.message);
        console.log('=============================================================================================================================');
      } else {
        message = 'MINOR-RELEASE FINISHED SUCCESSFULLY';
        console.log('=============================================================================================================================');
        console.log(message+': YOU CAN DEPLOY '+freedVersion+' AND YOU CAN DEVELOP FURTHER WITH VERSION '+nextDevVersion);
        console.log('NOTE: BESIDE '+freedVersion+', YOU ALSO NEED TO REPLACE package.json ON THE PUBLIC SERVER');
        console.log('=============================================================================================================================');
        notify = require('node-notify');
        notify({
            title: 'Gulp bumpprerelease',
            message,
            sound: true
        });
}
      callback(error);
    });
};

module.exports = cb;