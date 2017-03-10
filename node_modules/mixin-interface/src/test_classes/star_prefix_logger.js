//==============================================================
// star_prefix_logger.js
// Purpose: '$StarPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('../mixin_interface.js').MxI;

//============ 'StarPrefixLogger' implementation class ============
class StarPrefixLogger extends MxI.$Implementation(MxI.$DefaultLogger).$with(MxI.$ILogger, MxI.$ISingleton) {
  constructor(...args) {
	  super();
      this._$prefix = "* ";
  } // 'StarPrefixLogger' constructor
} // 'StarPrefixLogger' class
MxI.$setClass(StarPrefixLogger).$asImplementationOf(MxI.$ILogger, MxI.$ISingleton);
MxI.$setAsSingleton(StarPrefixLogger);
exports.StarPrefixLogger = StarPrefixLogger;