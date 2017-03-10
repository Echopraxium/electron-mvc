//==============================================================
// i_care_taker.js
// 'ICareTaker' interface class
// Design Pattern:     Memento ('CareTaker' participant)
// Other participants: 'Originator' (see IOriginator in i_originator.js)
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

//==================== 'ICareTaker' interface class ====================
class ICareTaker extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'addMemento' service
  // arg_memento: IMemento
  addMemento(arg_memento) {
    MxI.$raiseNotImplementedError(ICareTaker, this);
  } // ICareTaker.addMemento()
  
  // Fallback implementation of 'getMemento' service
  getMemento(...args) {
    MxI.$raiseNotImplementedError(ICareTaker, this);
  } // ICareTaker.getMemento()
} // 'ICareTaker' interface class
MxI.$setAsInterface(ICareTaker).$asChildOf(MxI.$IBaseInterface);
exports.ICareTaker = ICareTaker;