//==============================================================
// i_originator.js
// 'IOriginator' interface class
// Design Pattern:     Memento ('Originator' participant)
// Other participants: 'Caretaker' (see ICaretaker in i_care_taker.js)
//                     'Memento' (see IMemento in i_memento.js)
// Purpose:            Without violating encapsulation, capture and externalize an 
//                     object's internal state so that the object can be restored 
//                     to this state later.
// Pattern Subgroup:   Behavioral
// Reference:          https://www.tutorialspoint.com/design_pattern/memento_pattern.htm
// Project:            'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IOriginator' interface class ====================
class IOriginator extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getState' service
  getState() {
    MxI.$raiseNotImplementedError(IOriginator, this);
  } // IOriginator.getState()
  
  // Fallback implementation of 'setState' service
  setState(...args) {
    MxI.$raiseNotImplementedError(IOriginator, this);
  } // IOriginator.setState()
  
  // Fallback implementation of 'getStateFromMemento' service
  // arg_memento: IMemento
  getStateFromMemento(arg_memento) {
    MxI.$raiseNotImplementedError(IOriginator, this);
  } // IOriginator.getStateFromMemento()
  
  // Fallback implementation of 'createMemento' service
  // Returns an object which implements 'IMemento' 
  saveStateToMemento() {
    MxI.$raiseNotImplementedError(IOriginator, this);
  } // IOriginator.saveStateToMemento()
} // 'IOriginator' interface class
MxI.$setAsInterface(IOriginator).$asChildOf(MxI.$IBaseInterface);
exports.IOriginator = IOriginator;