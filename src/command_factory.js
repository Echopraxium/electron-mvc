//==============================================================
// command_factory.js
// Purpose: 'CommandFactory' class
// Project: 'electron-mvc' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IFactory = require('./api/i_factory.js').IFactory;

//==================== 'CommandFactory' interface class ====================
class CommandFactory extends MxI.$Implementation(MxI.$Object).$with(IFactory) {
  constructor() {
    super();
  } // 'CommandFactory' constructor
  
  //---------- 'create' ----------
  create() {
    console.log("CommandFactory.create");
  } // IFactory.create
} // 'CommandFactory' class
MxI.$setClass(CommandFactory).$asImplementationOf(IFactory);
exports.CommandFactory = CommandFactory;