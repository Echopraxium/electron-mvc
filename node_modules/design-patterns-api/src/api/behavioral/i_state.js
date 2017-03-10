//==============================================================
// i_state.js
// 'IState' interface class
// Design Pattern:    State ('State' participant)
// Other participant: 'Context' (see IContext in i_context.js)
// Purpose:           The State Pattern allows an object to alter its 
//                    behavior when its internal state changes.
//                    The object will appear to change its class.
// Pattern Subgroup:  Behavioral
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IState' interface class ====================
class IState extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'doAction' service
  // action_id: String or Integer or Enumeration, arg_context: IContext
  doAction(action_id, arg_context, ...args) {
    MxI.$raiseNotImplementedError(IState, this);
  } // IState.doAction()
} // 'IState' interface class
MxI.$setAsInterface(IState).$asChildOf(MxI.$IBaseInterface);
exports.IState = IState;