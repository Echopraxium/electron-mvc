//==============================================================
// mixin_interface_api.js
// Purpose:  implementation of interface classes in es6
//           https://www.npmjs.com/package/mixin-interface-api
// Project: 'mixin-interface-api' npm package
//==============================================================
//'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const mixin       = require('mixin');
const caller_id   = require('caller-id');

const MXI_NULL                                  = 'MxI.NULL';

const SERVICE_NOT_IMPLEMENTED_ERROR_ID          = 'SERVICE_NOT_IMPLEMENTED';
const SUPER_INTERFACE_NOT_DEFINED_ERROR_ID      = 'SUPER_INTERFACE_NOT_DEFINED';
const SUPER_IMPLEMENTATION_NOT_DEFINED_ERROR_ID = 'SUPER_IMPLEMENTATION_NOT_DEFINED';
const SINGLETON_ALREADY_INSTANCIATED_ERROR_ID   = 'SINGLETON_ALREADY_INSTANCIATED';
const SINGLETON_PRIVATE_CONSTRUCTOR_ERROR_ID    = 'SINGLETON_PRIVATE_CONSTRUCTOR';


//------------------- throwErrorMessage() -------------------
const throwErrorMessage = function(arg_error_msg, error_code) {
	var error_msg = "** mixin-interface-api **\n" + 
	                "   Error code:  " + error_code + "\n" +
	                "   Description: " + arg_error_msg + "\n";
    throw new Error(error_msg);
} // throwErrorMessage()


//------------------- $raiseNotImplementedError() -------------------
const $raiseNotImplementedError = function(arg_interface, instance) {
        if (arg_interface === undefined ||  instance === undefined) {
              return;
        }

        var caller_data = caller_id.getData();
        var error_msg   = "'" + arg_interface.name + "." + caller_data.functionName + "'" +
                          " not found on '" + instance.name + "'";

        throwErrorMessage(error_msg, SERVICE_NOT_IMPLEMENTED_ERROR_ID);
} // $raiseNotImplementedError()


//=============================================================================
//=========================  '$MixinInterface' class  =========================
//=============================================================================
class $MixinInterface {
  constructor(arg_type) {
	  if (arg_type === undefined) {	
		var error_msg   = "   Parent Implementation class is '" + arg_type;
        throwErrorMessage(error_msg, SUPER_IMPLEMENTATION_NOT_DEFINED_ERROR_ID);
	  }

      this._$super_implementation = arg_type;
  } // '$MixinInterface' constructor

  $with(...arg_interfaces) {
      var implemented_interfaces = Array.from(arg_interfaces);
      if (implemented_interfaces.length === 0)
        return this._$super_implementation;
		  
      var mixed = this._$super_implementation;

      if (this._$super_implementation._$implemented_interfaces === undefined)
          this._$super_implementation._$implemented_interfaces = {};

      for (var i=0; i<implemented_interfaces.length; i++) {
         var implemented_interface = implemented_interfaces[i];
         //console.log("-- " + itf.name + " implemented on " + super_type.name);
        mixed = mixin(mixed, implemented_interface);
        this._$super_implementation._$implemented_interfaces[implemented_interface] = true;
      } // for (var i=0; i<implemented_interfaces.length; i++)

      return mixed;
  } // $with()
} // '$MixinInterface' class


//================================================================================
//=========================  '$MixinSetInterface' class  =========================
//================================================================================
class $MixinSetInterface {
    constructor(arg_type) {
        this._$arg_type = arg_type;
    } // '$MixinSetInterface' constructor

    $asChildOf(arg_super_type) {
        var arg_type = this._$arg_type;
        if (arg_type === undefined || arg_super_type === undefined) {
            return;
        }
        arg_type._$is_interface    = true;
        arg_type._$super_interface = arg_super_type;
    } // $asChildOf()
} // '$MixinSetInterface' class


//==============================================================================
//=======================  '$MixinImplementation' class  =======================
//==============================================================================
class $MixinImplementation {
    constructor(arg_type) {
        this._$arg_type = arg_type;
    } // '$MixinImplementation' constructor

    $asImplementationOf(...arg_interfaces) {
        var arg_type = this._$arg_type;
        if (arg_type === undefined)
            return;

        var interfaces                    = Array.from(arg_interfaces);
        arg_type._$implemented_interfaces = interfaces;
        arg_type._$is_interface           = false;
    } // $asImplementationOf()
} // '$MixinImplementation' class


//===========================================================================
//===================  '$IBaseInterface' interface class  ===================
//===========================================================================
class $IBaseInterface {
} // '$IBaseInterface' interface class
$IBaseInterface._$is_interface = true;
exports.$IBaseInterface = $IBaseInterface;


//========================================================================
//==================  '$Object' implementation class  ====================
//========================================================================
class $Object {	 
  constructor(...args) {
    this._$name        = this.generateInstanceName();
    this._$args        = args;
	this._$initialized = false;
	this._$args_init   = [];
  } // '$Object' constructor
  
  toString() {
    return this._$name;
  } // toString() override 

  init(...args_init) {
	  if (this._$initialized===true) 
		return;
	  
	  this._$initialized = true;
      if (args_init !== undefined && args_init !== null)
		  this._$args_init = Array.from(args_init);
  } // init()
  
  isInitialized() {
	  return this._$initialized;
  } // isInitialized()

  generateInstanceName() {
    var class_name = this.constructor.name;
    //console.log("class_name: " + class_name);
    var count = 0;

    if ($Object._$instanceCount === undefined)
      $Object._$instanceCount = {};

    if ($Object._$instanceCount[class_name] === undefined)
      $Object._$instanceCount[class_name] = 0;
    else
      count = $Object._$instanceCount[class_name];

    $Object._$instanceCount[class_name] = count;

    var preformatted_class_name = class_name.replace('.', '_').replace('$', 'mxi');
	var snake_case_class_name   = preformatted_class_name.replace
	                              (/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    var name = snake_case_class_name + '_' + count;

    $Object._$instanceCount[class_name]++;
    return name;
  } // generateInstanceName()

  get name() {
    if (this._$name === undefined)
      this._$name = this.generateInstanceName();
    return this._$name;
  } // get name()
} // '$Object' implementation class
$Object._$instanceCount = {};
$Object._$singletons    = {};
$Object._$is_interface  = false;
exports.$Object = $Object;


//------------------- $Interface() -------------------
const $Interface = function(arg_super_type) {
    return mixin($Object, arg_super_type);
} // $Interface()


//------------------- $setAsInterface() -------------------
const $setAsInterface = function(arg_type) {
    if (arg_type === undefined)
          return;
    arg_type._$is_interface    = true;
    arg_type._$super_interface = $IBaseInterface;
    return new $MixinSetInterface(arg_type);
} // $setAsInterface()

//------------------- $Implementation() -------------------
const $Implementation = function(arg_super_implementation) {
    return new $MixinInterface(arg_super_implementation);
} // $Implementation()


//------------------- $setClass() -------------------
const $setClass = function(arg_type) {
    if (arg_type === undefined)
        return;
    return new $MixinImplementation(arg_type);
} // $setClass()


//------------------- getClass() -------------------
const getClass = function (instance) {
    if (instance === null || instance === undefined)
      return undefined;

    var type = Object.getPrototypeOf(instance);
    return type.constructor;
} // getClass()


//------------------- $implements() -------------------
const $implements = function(arg_type, arg_interface) {
    if (arg_type === undefined || arg_type === null)
		return false;
	
    var implemented_interface;
    if (arg_type._$implemented_interfaces !== undefined) {
        // Check if interface class is in _$implemented_interfaces
        for (var i=0; i < arg_type._$implemented_interfaces.length; i++) {
			implemented_interface = arg_type._$implemented_interfaces[i];
			//console.log(">> implemented_interface: " + implemented_interface.name);
            if (implemented_interface === arg_interface) {
                return true;
		    }
            else {
                var parent_interface = implemented_interface._$super_interface;
                while (parent_interface !== undefined) {
                    if (parent_interface === arg_interface)
                        return true;
                    parent_interface = parent_interface._$super_interface;
                    //console.log(">> parent_interface  " + parent_interface.name);
                } // while (parent_interface != undefined)
            } // if (implemented_interface === arg_type)
        } // for (var i=0; i<instance_type._$implemented_interfaces.length; i++)		
	} // if (arg_type._$implemented_interfaces !== undefined)
		
    return false;
} // $implements

				  
 //------------------- $isInstanceOf() -------------------
 const $isInstanceOf = function(arg_type, instance) {
	  if (arg_type === undefined || arg_type === null)
		return false;
		  
      var instance_type = getClass(instance);

      if ( instance instanceof arg_type) {
          // Check if instance 'isinstanceof' an implementation class
          return true;
      }
      else {
          // Check if instance 'isinstanceof' an interface class
          var implemented_interface;
          if (   instance_type !== undefined 
		      && instance_type._$implemented_interfaces !== undefined) {
              // Check if interface class is in _$implemented_interfaces
              for (var i=0; i < instance_type._$implemented_interfaces.length; i++) {
				  implemented_interface = instance_type._$implemented_interfaces[i];
                  if (implemented_interface === arg_type) {
                      return true;
				  }
                  else {
                      var parent_interface = implemented_interface._$super_interface;
                      while (parent_interface !== undefined) {
                          if (parent_interface === arg_type)
                              return true;
                          parent_interface = parent_interface._$super_interface;
                          //console.log(">> parent_interface  " + parent_interface.name);
                      } // while (parent_interface != undefined)
                  } // if (implemented_interface === arg_type)
              } // for (var i=0; i<instance_type._$implemented_interfaces.length; i++)
          } // if (instance_type._$implemented_interfaces !== undefined)
      } // if (instance instanceof arg_type)

      return false;
} // $isInstanceOf()


//======================================================================
//==================  '$INullObject' interface class  ==================
//======================================================================
class $INullObject extends $Interface($IBaseInterface) {  
} // '$INullObject' interface class
$setAsInterface($INullObject).$asChildOf($IBaseInterface);


//======================================================================
//===================  '$ISingleton' interface class  ==================
//======================================================================
class $ISingleton extends $Interface($IBaseInterface) {  
    // Fallback implementation of 'isSingleton' service
    isSingleton() {
	    MxI.$raiseNotImplementedError($ISingleton, this);
    } // '$ISingleton'.isSingleton()
} // '$ISingleton' interface class
$setAsInterface($ISingleton).$asChildOf($IBaseInterface);


//------------------- $setAsSingleton() -------------------
const $setAsSingleton = function(arg_type, ...args) {
	//console.log(" >> $setAsSingleton 0 arg_type:" + arg_type.name);
	var klass = arg_type;
    if (klass === undefined || klass === null) {
	  //console.log(" >> $setAsSingleton 1 klass:", klass.name);
	  return;
    }
	
    if ($implements(klass, $ISingleton)) {    
	  //console.log(" >> $setAsSingleton 2 '%s' ", klass.name);
	  klass._$singleton                   = undefined;
	  $Object._$singletons[klass.name]    = "";
	}
} // $setAsSingleton()


//==========================================================================
//===================  '$Singleton' implementation class  ==================
//==========================================================================
class $Singleton extends $Implementation($Object).$with($ISingleton) { 
    constructor(...args) {
		super();
		
		var klass = this.constructor;
		//console.log(" >> Trying to call new ..." + klass.name);
		//console.log(" >> object count " + $Object._$instanceCount[klass.name]);
		if ($Object._$singletons[klass.name] !== klass.name) {    
	        var error_msg = "'" + klass.name + "' is a Singleton class, then its constructor is private";
            throwErrorMessage(error_msg, SINGLETON_PRIVATE_CONSTRUCTOR_ERROR_ID);
	    }
						  
		if ($Object._$instanceCount[klass.name] > 1) {
			var error_msg   = "'" + klass.name + "' already instanciated";
            throwErrorMessage(error_msg, SINGLETON_ALREADY_INSTANCIATED_ERROR_ID);
		}
    } // '$Singleton' constructor
	
	toString() {
        return this._$name;
    } // toString() override 
	
    isSingleton() {
	    return ($Object._$instanceCount[klass.name] <= 1);
    } // $ISingleton.isSingleton()
	
    static getSingleton(...args) {
	    var klass = this;
	    //console.log(klass.name + ".getSingleton " + klass._$singleton);
		//console.log("Class: " + this.name);
	    if (klass._$singleton === undefined) {
			$Object._$singletons[klass.name]    = klass.name;
		    klass._$singleton                   = new klass(...args);
			$Object._$singletons[klass.name]    = "";
	    }
	    return klass._$singleton;
    } // $Singleton.getSingleton()
} // '$Singleton' implementation class
$setClass($Singleton).$asImplementationOf($ISingleton);
$setAsSingleton($Singleton);


//===============================================================================
//=====================  '$NullObject' implementation class  ====================
//===============================================================================
class $NullObject extends $Implementation($Singleton).$with($ISingleton, $INullObject) { 
    constructor(...args) {
	    super();
        this._$name = MXI_NULL;
		//console.log(">>> $Nothing constructor: " + this.name);
    } // '$NullObject' constructor
} // '$NullObject' implementation class
$setClass($NullObject).$asImplementationOf($INullObject, $ISingleton);
$setAsSingleton($NullObject);

const theNullObject = $NullObject.getSingleton();


//------------------- $getSuperclass() -------------------
const $getSuperclass = function (arg_type) {
    if (arg_type === null || arg_type === undefined) {
		return theNullObject;
	}

    if (arg_type._$is_interface === undefined) {
	    return theNullObject;
    }

    if (arg_type._$is_interface === true) {
        if (arg_type._$super_interface !== undefined) {
            return arg_type._$super_interface;
        }
    }
	else {
		var super_class = Object.getPrototypeOf(arg_type);
        return super_class;
	}
    return theNullObject;
} // $getSuperclass()


//---------- $isInterface ----------
const $isInterface = function(arg_type) {
        if ( arg_type                === undefined ||
            arg_type._$is_interface === undefined) {
            return false;
        }

        if (arg_type._$is_interface === true)
            return true;

        return false;
} // $isInterface()


//------------------- $isSingleton() -------------------
const $isSingleton = function(obj) {
	    var rc = false;
        if (obj !== undefined && obj !== null)
            rc = $isInstanceOf($ISingleton, obj);
        return rc;
} // $isSingleton()


//------------------- $isNull () -------------------
const $isNull = function(obj) {
	    var rc = false;
		if (obj === undefined || obj === null)
			rc = true;
        //else if (obj === $NullObject.getSingleton())
		//	rc = true;
		else if ($isInstanceOf($INullObject, obj) && $isInstanceOf($ISingleton, obj))
			rc = true;
        return rc;
} // $isNull


//=================================================================================
//================================ 'MxI' Namespace ================================
//=================================================================================
const MxI = {
	'$Object':                   $Object,                      // Implementation class
    '$IBaseInterface':           $IBaseInterface,              // Interface class
		
	'$ISingleton':               $ISingleton,                  // Interface class
	'$Singleton':                $Singleton,                   // Implementation class
		
    '$INullObject':              $INullObject,                 // Interface class
	'$NullObject':               $NullObject,                  // Implementation class
	'$Null':                     theNullObject,                // 'Null Object' Singleton
	
	'$Interface':                $Interface,
	'$setAsInterface':           $setAsInterface,
	'$isInterface':              $isInterface,
	'$raiseNotImplementedError': $raiseNotImplementedError,
	
	'$Implementation':           $Implementation,
	'$setClass':                 $setClass,
	'$implements':               $implements,
	'$getSuperclass':            $getSuperclass,
	
	'$isInstanceOf':             $isInstanceOf,
	'$isNull':                   $isNull,
	
	'$isSingleton':              $isSingleton,
	'$setAsSingleton':           $setAsSingleton
}; // MxI namespace
exports.MxI = MxI;

//var sing_2 = new $Nothing();