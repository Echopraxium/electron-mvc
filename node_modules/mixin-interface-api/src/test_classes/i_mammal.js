//======================================================================
// i_mammal.js
// Purpose: 'IMammal' interface class, a subclass of 'IAnimal' interface
// Project: 'mixin-interface-api' npm package
//======================================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('../mixin_interface_api.js').MxI;
const IAnimal = require('./i_animal.js').IAnimal;

//==================== 'IMammal' interface class ====================
class IMammal extends MxI.$Interface(IAnimal) {
  // Fallback implementation of 'suckle()' service
  suckle() {
    MxI.$raiseNotImplementedError(IMammal, this);
  } // IMammal.suckle()
} // 'IMammal' class
MxI.$setAsInterface(IMammal).$asChildOf(IAnimal);
exports.IMammal = IMammal;
