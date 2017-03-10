//========================================================================
// animal.js
// Purpose: 'Animal' implementation class, implements 'IAnimal' interface
// Project: 'mixin-interface-api' npm package
//========================================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI        = require('../mixin_interface_api.js').MxI;
const IAnimal    = require('./i_animal.js').IAnimal;
const ILifeForm  = require('./i_life_form.js').ILifeForm;

//==================== 'Animal' implementation class ====================
class Animal extends MxI.$Implementation(MxI.$Object).$with(IAnimal) {
  constructor() {
    super();
  } // 'Animal' constructor

  run() {
    console.log("--> Animal.run");
  } // IAnimal.run()

  live() {
    console.log("--> Animal.live");
  } // ILifeForm.live()
} // 'Animal' class
MxI.$setClass(Animal).$asImplementationOf(IAnimal, ILifeForm);
exports.Animal = Animal;