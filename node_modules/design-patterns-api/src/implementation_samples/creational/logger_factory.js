//==============================================================
// logger_factory.js
// Purpose: 'LoggerFactory' implementation class
//          implements 'IAbstractFactory' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI                   = require('mixin-interface/src/mixin_interface.js').MxI;
const IAbstractFactory      = require('../../api/creational/i_abstract_factory.js').IAbstractFactory;
const ArrowPrefixLogger     = require('./arrow_prefix_logger.js').ArrowPrefixLogger;
const TimestampPrefixLogger = require('./timestamp_prefix_logger.js').TimestampPrefixLogger;
const CountPrefixLogger     = require('./count_prefix_logger.js').CountPrefixLogger;

const LgF = {
  "arrow_prefix_logger":     0,
  "timestamp_prefix_logger": 1,
  "count_prefix_logger":     2
};
exports.LgF = LgF;

//==================== 'LoggerFactory' implementation class ====================
class LoggerFactory extends MxI.$Implementation(MxI.$Object).$with(IAbstractFactory) {
  constructor() {
    super();
  } // 'LoggerFactory' constructor

  createProduct(...args) {
    //console.log("--> LoggerFactory.createProduct " + product_id
	var arg_list  = Array.from(args);
	var logger_id;
	if (arg_list.length > 0)
		logger_id = arg_list[0];
	else
		return undefined;
	
	var logger = MxI.$DefaultLogger.getSingleton();
    if      (logger_id === LgF.arrow_prefix_logger)
		logger = ArrowPrefixLogger.getSingleton();
	else if (logger_id === LgF.timestamp_prefix_logger)
		logger = TimestampPrefixLogger.getSingleton();
	else if (logger_id === LgF.count_prefix_logger)
		logger = CountPrefixLogger.getSingleton();
	return logger;	
  } // LoggerFactory.createProduct()
} // 'LoggerFactory' class
MxI.$setClass(LoggerFactory).$asImplementationOf(IAbstractFactory);
exports.LoggerFactory = LoggerFactory;