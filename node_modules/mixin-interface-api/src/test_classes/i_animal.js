//==============================================================
// i_animal.js
// Purpose: 'IAnimal' interface class
// Project: 'mixin-interface-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('../mixin_interface_api.js').MxI;
const ILifeForm = require('./i_life_form.js').ILifeForm;

//==================== 'IAnimal' interface class ====================
class IAnimal extends MxI.$Interface(ILifeForm)  {
  // Fallback implementation of 'run()' service
  run() {
    MxI.$raiseNotImplementedError(IAnimal, this);
  } // IAnimal.run()
} // 'IAnimal' class
MxI.$setAsInterface(IAnimal).$asChildOf(ILifeForm);
exports.IAnimal = IAnimal;
