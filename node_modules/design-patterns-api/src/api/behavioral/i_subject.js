//==============================================================
// i_subject.js
// 'ISubject' interface class
// Design Pattern:    Observer ('Subject' participant)
// Other participant: 'Observer' (see IObserver in i_observer.js)
// Purpose:           The Observer Pattern defines a one-to-many dependency
//                    between objects so that when one object changes state, 
//                    all of its dependents are notified and updated automatically.
// Pattern Subgroup:  Behavioral
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'ISubject' interface class ====================
class ISubject extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'registerObserver' service
  // arg_observer: IObserver
  registerObserver(arg_observer) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.registerObserver()
  
  // Fallback implementation of 'unregisterObserver' service
  // arg_observer: IObserver
  unregisterObserver(arg_observer) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.unregisterObserver()
  
  // Fallback implementation of 'notifyObservers' service
  notifyObservers(...args) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.notifyObservers()
} // 'ISubject' interface class
MxI.$setAsInterface(ISubject).$asChildOf(MxI.$IBaseInterface);
exports.ISubject = ISubject;