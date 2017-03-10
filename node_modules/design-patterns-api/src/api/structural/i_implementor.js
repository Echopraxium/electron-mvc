//==============================================================
// i_implementor.js
// 'IImplementor' interface class
// Design Pattern:    Bridge ('Implementor' participant)
// Purpose:           Decouple an abstraction from its implementation so that 
//                    the two can vary independently.
// Pattern Subgroup:  Structural
// Status:            Ready
// Reference:         http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IImplementor' interface class ====================
class IImplementor extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'operation' service
  // Should return an object which implements IProduct
  // operation_id: String or Integer or Enumeration
  operation(operation_id, ...args) {
    MxI.$raiseNotImplementedError(IImplementor, this);
  } // IImplementor.operation()
} // 'IImplementor' class
MxI.$setAsInterface(IImplementor).$asChildOf(MxI.$IBaseInterface);
exports.IImplementor = IImplementor;