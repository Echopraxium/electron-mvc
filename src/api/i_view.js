//==============================================================
// i_view.js
// Purpose: 'IView' interface class
// Project: 'electron-mvc' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('mixin-interface/src/mixin_interface.js').MxI;
const IObserver = require('design-patterns-api/src/api/behavioral/i_observer.js').IObserver;

//==================== 'IView' interface class ====================
class IView extends MxI.$Interface(IObserver) {
  // Fallback implementation of 'update' service
  update(...args) {
    MxI.$raiseNotImplementedError(IView, this);
  } // IView.update
} // 'IView' class
MxI.$setAsInterface(IView).$asChildOf(IObserver);
exports.IView = IView;