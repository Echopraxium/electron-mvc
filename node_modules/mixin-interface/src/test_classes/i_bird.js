//==============================================================
// i_bird.js
// Purpose: 'IBird' interface class
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('../mixin_interface.js').MxI;
const IAnimal = require('mixin-interface-api/src/test_classes/i_animal.js').IAnimal;

//==================== 'IBird' interface class ====================
class IBird extends MxI.$Interface(IAnimal) {
  // Fallback implementation of 'fly' service
  fly() {
    MxI.$raiseNotImplementedError(IBird, this);
  } // IBird.fly()
} // 'IBird' class
MxI.$setAsInterface(IBird).$asChildOf(IAnimal);
exports.IBird = IBird;
