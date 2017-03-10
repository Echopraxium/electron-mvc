//==============================================================
// test.js
// Purpose: Unit Test for the 'electron-mvc' npm package
//          https://www.npmjs.com/package/electron-mvc
// Project: 'electron-mvc' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI            = require('mixin-interface/src/mixin_interface.js').MxI;
const IFactory       = require('./src/api/i_factory.js').IFactory;
const IModel         = require('./src/api/i_model.js').IModel;
const IView          = require('./src/api/i_view.js').IView;
const ICommand       = require('./src/api/i_command.js').ICommand;
const CommandFactory = require('./src/command_factory.js').CommandFactory;

//==================== start of test.js ====================
var unit_test_step = 0;

console.log();
MxI.$System.banner("Unit Test for electron-mvc package");
unit_test_step++;

var command_factory = new CommandFactory();
var cmd = command_factory.create();

MxI.$System.banner("End of Unit Test", true);
