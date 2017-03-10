//======================================================================
// cat.js
// Purpose: 'Cat' implementation class, implements 'IMammal' interface
// Project: 'mixin-interface-api' npm package
//======================================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('../mixin_interface_api.js').MxI;
const Animal  = require('./animal.js').Animal;
const IMammal = require('./i_mammal.js').IMammal;

//==================== 'Cat' implementation class ====================
class Cat extends MxI.$Implementation(Animal).$with(IMammal) {
  constructor() {
    super();
  } // 'Cat' constructor

  suckle() {
    console.log('--> Cat.suckle');
  } // IMammal.suckle()

  __run() {
    console.log('--> Cat.run');
  } // IAnimal.run()

  __live() {
    console.log('--> Cat.live');
  } // ILifeForm.live()
} // 'Cat' class
MxI.$setClass(Cat).$asImplementationOf(IMammal);
exports.Cat = Cat;
