//==============================================================
// i_collection.js
// 'ICollection' interface class
// Design Pattern:     Iterator ('Collection' participant)
// Other participant: 'Iterator' (see IIterator in i_iterator.js)
// Pattern Subgroup:   Behavioral
// Reference:          https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm
// Project:            'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'ICollection' interface class ====================
class ICollection extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getIterator' service
  // Returns an object which implements 'IIterator'  
  getIterator() {
    MxI.$raiseNotImplementedError(ICollection, this);
  } // ICollection.getIterator()
} // 'ICollection' interface class
MxI.$setAsInterface(ICollection).$asChildOf(MxI.$IBaseInterface);
exports.ICollection = ICollection;