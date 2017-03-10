//==============================================================
// i_model.js
// Purpose: 'IModel' interface class
// Project: 'electron-mvc' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IModel' interface class ====================
class IModel extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getData' service
  getData(...args) {
    MxI.$raiseNotImplementedError(IModel, this);
  } // IModel.getData
  
  // Fallback implementation of 'setData' service
  setData(...args) {
    MxI.$raiseNotImplementedError(IModel, this);
  } // IModel.setData
} // 'IModel' class
MxI.$setAsInterface(IModel).$asChildOf(MxI.$IBaseInterface);
exports.IModel = IModel;