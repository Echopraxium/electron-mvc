//==============================================================
// i_factory.js
// Purpose: 'IFactory' interface class
// Project: 'electron-mvc' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IFactory' interface class ====================
class IFactory extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'create' service
  create() {
    MxI.$raiseNotImplementedError(IFactory, this);
  } // IFactory.create
} // 'IFactory' class
MxI.$setAsInterface(IFactory).$asChildOf(MxI.$IBaseInterface);
exports.IFactory = IFactory;