//==============================================================
// mixin_interface.js
// Purpose:  implementation of interface classes in es6
//           https://www.npmjs.com/package/mixin-interface
// Project: 'mixin-interface' npm package
//==============================================================
//'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
	
//================================================================================
//=========================  '$ILogger' interface class  =========================
//================================================================================
class $ILogger extends MxI.$Interface(MxI.$IBaseInterface) {  
  // Fallback implementation of 'log' service
  log(arg_msg, ...arg_values) {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.log()
  
  // Fallback implementation of 'enable' service
  enable() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.enable(-)
  
  // Fallback implementation of 'disable' service
  disable() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.disable()
  
  // Fallback implementation of 'setPrefix' service
  setPrefix() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.setPrefix()
  
  // Fallback implementation of 'getPrefix' service
  getPrefix() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.getPrefix()
} // '$ILogger' interface class
MxI.$setAsInterface($ILogger).$asChildOf(MxI.$IBaseInterface);


//================================================================================
//==============================  '$DefaultLogger'  ==============================
//================================================================================
class $DefaultLogger extends MxI.$Implementation(MxI.$Singleton).$with($ILogger, MxI.$ISingleton) {
    constructor(...args) {
	    super();
	    //console.log(" >>> $DefaultLogger First time (and Only normally) in getSingleton");
        this._$prefix = "";
    } // '$DefaultLogger' constructor
  
    log(arg_msg, ...arg_values) {
	    var klass = this.constructor;
		
	    if (klass._$enabled === false) 
			return;
		
	    var msg = "";
	    if (arg_msg === undefined || arg_msg === null) 
		  msg = "";		  
	    else
		  msg = arg_msg;
	
	    if (arg_values !== undefined && arg_values !== null) {
	      if (arg_values.length > 0) {
			console.log(this._$prefix + msg, ...arg_values);
		    return;
	      }
        }
	    console.log(this._$prefix + msg);
    } // $ILogger.log()
  
    enable() {
		var klass = this.constructor;
	    klass._$enabled = true;
    } // $ILogger.enable()
	
	disable() {
		var klass = this.constructor;
	    klass._$enabled = false;
    } // $ILogger.disable()
  
    setPrefix(arg_prefix) {
	    var klass = this.constructor;
	    klass._$prefix = arg_prefix;
    } // $ILogger.setPrefix()
  
    getPrefix() {
	    var klass = this.constructor;
	    return klass._$prefix;
    } // $ILogger.getPrefix()
} // '$DefaultLogger' class
$DefaultLogger._$prefix    = "";
$DefaultLogger._$enabled   = true;
MxI.$setClass($DefaultLogger).$asImplementationOf($ILogger, MxI.$ISingleton);
MxI.$setAsSingleton($DefaultLogger);


//================================================================================
//=================================  '$System'  ==================================
//================================================================================
class $System {
    static setLogger(arg_logger) {
	    if (arg_logger === undefined) {
		    return;
	    }
		else if (! MxI.$isInstanceOf(MxI.$ILogger, arg_logger)) {
			$System.getLogger().log("*** Error *** in '$System'.setLogger(): '%s' is an invalid Logger object", arg_logger.name);
		    return;
	    }
		
	    $System._$logger = arg_logger;  
    } // $System.setLogger
  
    static getLogger() {
      if ($System._$logger === undefined) {
		  $System._$logger = $DefaultLogger.getSingleton();
	  }
	  return $System._$logger;  
    } // $System.getLogger()
  
    static resetLogger() {
      $System.setLogger($DefaultLogger.getSingleton()); 
    } // $System.resetLogger()
  
    static log(arg_msg, ...arg_values) {
	    $System.getLogger().log(arg_msg, ...arg_values);
    } // $System.log()
  
    static banner(arg_msg, arg_single_line_banner, arg_separator_char, arg_separator_length) {
      var single_line_banner = false;
	  if (arg_single_line_banner !== undefined)
	    single_line_banner = arg_single_line_banner;
	
	  var separator_length = 60;
	  if (arg_separator_length !== undefined)
	    separator_length = arg_separator_length;
	
	  var separator_char = '=';
	  if (arg_separator_char !== undefined)
	    separator_char = arg_separator_char;
	
      var separator_line           = separator_char.repeat(separator_length);
      var start_msg_separator_size = Math.round((separator_length / 2) - (arg_msg.length / 2) -1);
      var end_msg_separator_size   = Math.round((separator_length / 2) - (arg_msg.length / 2) -1);
  
      var msg_separator_size = start_msg_separator_size + arg_msg.length + 2 + end_msg_separator_size;
      if (msg_separator_size > separator_length)
	    end_msg_separator_size = end_msg_separator_size - 1;
      else if (msg_separator_size < separator_length)
        end_msg_separator_size = end_msg_separator_size + 1;

      msg_separator_size = start_msg_separator_size + arg_msg.length + 2 + end_msg_separator_size;
  
      var start_msg_separator      = separator_char.repeat(start_msg_separator_size);
      var end_msg_separator        = separator_char.repeat(end_msg_separator_size);
  
      if (! arg_single_line_banner)
        $System.getLogger().log(separator_line);		
	
      $System.getLogger().log(start_msg_separator + ' ' + arg_msg + ' ' + end_msg_separator);
	  
      if (! arg_single_line_banner)
        $System.getLogger().log(separator_line);		
  } // $System.banner()
} // '$System' class
$System._$logger;


//================================================================================
//========================= Extension of 'MxI' Namespace =========================
//================================================================================
MxI.$System        = $System;
MxI.$ILogger       = $ILogger;
MxI.$DefaultLogger = $DefaultLogger;
exports.MxI = MxI;
