//==============================================================
// count_prefix_logger.js
// Purpose: 'CountPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//============ 'CountPrefixLogger' implementation class ============
class CountPrefixLogger extends MxI.$Implementation(MxI.$DefaultLogger).$with(MxI.$ILogger) {
  constructor(...args) {
	  super();
      this._$prefix = "[" + CountPrefixLogger._$count++ + "] ";
  } // 'CountPrefixLogger' constructor
} // 'CountPrefixLogger' class
CountPrefixLogger._$singleton = undefined;
CountPrefixLogger._$count = 0;
MxI.$setClass(CountPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.CountPrefixLogger = CountPrefixLogger;