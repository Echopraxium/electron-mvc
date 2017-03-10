//==============================================================
// i_prototype.js
// 'IPrototype' interface class
// Status:  To Be Done
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IPrototype' interface class ====================
class IPrototype extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'create' service
  create() {
    MxI.$raiseNotImplementedError(IPrototype, this);
  } // IPrototype.create()
} // 'IPrototype' interface class
MxI.$setAsInterface(IPrototype).$asChildOf(MxI.$IBaseInterface);
exports.IPrototype = IPrototype;