//==============================================================
// i_observer.js
// 'IObserver' interface class
// Design Pattern:    Observer ('Observer' participant)
// Other participant: 'Subject' (see ISubject in i_subject.js)
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

//==================== 'IObserver' interface class ====================
class IObserver extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'notify' service
  notify(...args) {
    MxI.$raiseNotImplementedError(IObserver, this);
  } // IObserver.notify()
} // 'IObserver' interface class
MxI.$setAsInterface(IObserver).$asChildOf(MxI.$IBaseInterface);
exports.IObserver = IObserver;