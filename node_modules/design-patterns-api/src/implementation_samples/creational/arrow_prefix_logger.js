//==============================================================
// arrow_prefix_logger.js
// Purpose: 'ArrowPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//============ 'ArrowPrefixLogger' implementation class ============
class ArrowPrefixLogger extends MxI.$Implementation(MxI.$DefaultLogger).$with(MxI.$ILogger) {
  constructor(...args) {
	  super();
      this._$prefix = "==> ";
  } // 'ArrowPrefixLogger' constructor
} // 'ArrowPrefixLogger' class
ArrowPrefixLogger._$singleton = undefined;
MxI.$setClass(ArrowPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.ArrowPrefixLogger = ArrowPrefixLogger;