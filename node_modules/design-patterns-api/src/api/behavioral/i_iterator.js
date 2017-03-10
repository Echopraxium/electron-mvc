//==============================================================
// i_iterator.js
// 'IIterator' interface class
// Design Pattern:    Iterator ('Iterator' participant)
// Other participant: 'Collection' (see ICollection in i_collection.js)
// Pattern Subgroup:  Behavioral
// Reference:         https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IIterator' interface class ====================
class IIterator extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'first' service
  // returns 'first item in Collection'
  first() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.first()
  
  // Fallback implementation of 'next' service
  // returns 'next item in Collection'
  next() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.next()
  
  // Fallback implementation of 'hasNext' service
  // returns boolean
  hasNext() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.hasNext()
} // 'IIterator' interface class
MxI.$setAsInterface(IIterator).$asChildOf(MxI.$IBaseInterface);
exports.IIterator = IIterator;