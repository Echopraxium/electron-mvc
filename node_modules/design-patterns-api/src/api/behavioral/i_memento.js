//==============================================================
// i_memento.js
// 'IMemento' interface class
// Design Pattern:     Memento ('Memento' participant)
// Other participants: 'Caretaker' (see ICaretaker in i_care_taker.js)
//                     'Originator' (see IOriginator in i_originator.js)
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

//==================== 'IMemento' interface class ====================
class IMemento extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getState' service
  getState() {
    MxI.$raiseNotImplementedError(IMemento, this);
  } // IMemento.getState()
  
  // Fallback implementation of 'setState' service
  setState(...args) {
    MxI.$raiseNotImplementedError(IMemento, this);
  } // IMemento.setState()
} // 'IMemento' interface class
MxI.$setAsInterface(IMemento).$asChildOf(MxI.$IBaseInterface);
exports.IMemento = IMemento;