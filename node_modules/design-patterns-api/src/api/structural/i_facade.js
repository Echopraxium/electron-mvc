//==============================================================
// i_facade.js
// 'IFacade' interface class
// Design Pattern:    Facade ('Facade' participant)
// Purpose:           Provides a unified interface to a set of interfaces in a subsytem.
//                    Façade defines a higher-level interface that makes the subsystem 
//                    easier to use.
// Pattern Subgroup:  Structural
// Status:            Ready
// Reference:         https://www.tutorialspoint.com/design_pattern/facade_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IFacade' interface class ====================
class IFacade extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'doAction' service
  // action_id:     a key (String, Integer or Enumeration)
  // Design intent: 'action_id', is a key with which the client can 
  //                select a specific operation.
  //                eg: for an audio player the 'action_ids' could be:
  //                    ['play', 'stop', 'pause', 'fast forward', 'rewind']
  // See also:      https://en.wikipedia.org/wiki/Media_controls
  doAction(action_id, ...args) {
    MxI.$raiseNotImplementedError(IFacade, this);
  } // IFacade.doAction()
  
  // Fallback implementation of 'getActionIds' service
  // Advice: return an object which implements 'ICollection' 
  //         ('Iterator' Design Pattern)
  getActionIds() {
    MxI.$raiseNotImplementedError(IFacade, this);
  } // IFacade.getActionIds()
} // 'IFacade' interface class
MxI.$setAsInterface(IFacade).$asChildOf(MxI.$IBaseInterface);
exports.IFacade = IFacade;