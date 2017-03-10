//==============================================================
// i_request.js
// 'IRequest' interface class
// Design Pattern:    Chain Of Responsability ('Request' participant)
// Other participant: 'Handler' (see IHandler in i_handler.js)
// Purpose:           Avoid coupling the sender of a request to its receiver by 
//                    giving more than one object a chance to handle the request. 
//                    Chain the receiving objects and pass the request along the 
//                    chain until an object handles it.
//                    @Source:  Elements of Reusable Object-Oriented Software 
//                    @Authors: Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
// Pattern Subgroup:  Behavioral
// Reference:         http://www.oodesign.com/chain-of-responsibility-pattern.html
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IRequest' interface class ====================
class IRequest extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getValue' service
  getValue(...args) {
    MxI.$raiseNotImplementedError(IRequest, this);
  } // IRequest.getValue()
  
  // Fallback implementation of 'getDescription' service
  getDescription(...args) {
    MxI.$raiseNotImplementedError(IRequest, this);
  } // IRequest.getDescription()
} // 'IRequest' interface class
MxI.$setAsInterface(IRequest).$asChildOf(MxI.$IBaseInterface);
exports.IRequest = IRequest;