//==============================================================
// flying_fish.js
// Purpose: 'FlyingFish' implementation class which implements 4 interfaces:
//          - 'IBird' (child of 'IAnimal')
//          - 'IFish' (child of 'IAnimal')
//          as well as  (via its parent class 'Animal'):
//          - 'ILifeForm'
//          - 'IAnimal' (child of 'ILifeForm')
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI             = require('../mixin_interface.js').MxI;
const Animal          = require('mixin-interface-api/src/test_classes/animal.js').Animal;
const IAnimal         = require('mixin-interface-api/src/test_classes/i_animal.js').IAnimal;
const IBird           = require('./i_bird.js').IBird;
const IFish           = require('./i_fish.js').IFish;

//==================== 'FlyingFish' implementation class ====================
class FlyingFish extends MxI.$Implementation(Animal).$with(IBird, IFish) {
  constructor() {
    super();
  } // 'FlyingFish' constructor

  fly() {
    MxI.$System.log('--> FlyingFish.fly');
  } // IBird.fly()

  swim() {
    MxI.$System.log('--> FlyingFish.swim');
  } // IFish.swim()

  __run() {
    MxI.$System.log('--> FlyingFish.run');
  } // IAnimal.run()

  __live() {
    MxI.$System.log('--> FlyingFish.live');
  } // ILifeForm.live()
} // 'FlyingFish' class
MxI.$setClass(FlyingFish).$asImplementationOf(IBird, IFish);
exports.FlyingFish = FlyingFish;
