//==============================================================
// timestamp_prefix_logger.js
// Purpose: 'TimestampPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//============ 'TimestampPrefixLogger' implementation class ============
class TimestampPrefixLogger extends MxI.$Implementation(MxI.$DefaultLogger).$with(MxI.$ILogger) {
  constructor(...args) {
	  super();
      this._$prefix = "[" + this.getTimeStamp() + "] ";
  } // 'TimestampPrefixLogger' constructor
  
  getTimeStamp() {
    var timestamp_str = "";
    var time_now      = new Date();
	var hours         = time_now.getHours();
	var minutes       = time_now.getMinutes();
	var seconds       = time_now.getSeconds();
	
	if (hours   < 10) hours   = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    timestamp_str += hours + ":" + minutes + ":" + seconds + " ";
    if (hours > 11) timestamp_str += "PM";
    else            timestamp_str += "AM";
    
    return timestamp_str;
  } // getTimeStamp()
} // 'TimestampPrefixLogger' class
TimestampPrefixLogger._$singleton = undefined;
MxI.$setClass(TimestampPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.TimestampPrefixLogger = TimestampPrefixLogger;