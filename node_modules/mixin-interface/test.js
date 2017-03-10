//==============================================================
// test.js
// Purpose: Unit Test for 'mixin-interface'
// Project: 'mixin-interface' npm package
//          https://www.npmjs.com/package/mixin-interface
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI              = require('./src/mixin_interface.js').MxI;
const ILifeForm        = require('mixin-interface-api/src/test_classes/i_life_form.js').ILifeForm;
const IAnimal          = require('mixin-interface-api/src/test_classes/i_animal.js').IAnimal;
const IMammal          = require('mixin-interface-api/src/test_classes/i_mammal.js').IMammal;
const IFish            = require('./src/test_classes/i_fish.js').IFish;
const IBird            = require('./src/test_classes/i_bird.js').IBird;
const Animal           = require('mixin-interface-api/src/test_classes/animal.js').Animal;
const Cat              = require('mixin-interface-api/src/test_classes/cat.js').Cat;
const FlyingFish       = require('./src/test_classes/flying_fish.js').FlyingFish;
const StarPrefixLogger = require('./src/test_classes/star_prefix_logger.js').StarPrefixLogger;

//==================== start of test.js ====================
const SEPARATOR = "----------------------------------";
var   unit_test_step = 0;

MxI.$System.log();
MxI.$System.banner("Unit Test for 'mixin-interface' package");

//MxI.$System.getLogger().disable();

unit_test_step++;
var an_animal_0 = new Animal();
MxI.$System.log(unit_test_step + ".Instance of 'Animal' created: " + an_animal_0.name);
MxI.$System.log("'%s' is a 'Animal' ?           " + MxI.$isInstanceOf(Animal,      an_animal_0), an_animal_0.name);
MxI.$System.log("'%s' is a 'IAnimal' ?          " + MxI.$isInstanceOf(IAnimal,     an_animal_0), an_animal_0.name);
an_animal_0.run();
an_animal_0.live();

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
var a_cat = new Cat();
MxI.$System.log(unit_test_step + ". Instance of 'Cat' created: " + a_cat.name);
MxI.$System.log("'%s' is a 'Animal' ?      " + MxI.$isInstanceOf(Animal,      a_cat), a_cat);
MxI.$System.log("'%s' is a 'Cat' ?         " + MxI.$isInstanceOf(Cat,         a_cat), a_cat);
MxI.$System.log("'%s' is a 'IAnimal' ?     " + MxI.$isInstanceOf(IAnimal,     a_cat), a_cat);
MxI.$System.log("'%s' is a 'IMammal' ?     " + MxI.$isInstanceOf(IMammal,     a_cat), a_cat);
a_cat.run();
a_cat.suckle();
a_cat.live();

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
MxI.$System.log(unit_test_step + ". Check if a type is an Interface class or an Implementation class");
MxI.$System.log("'IBird'               is an interface ?         " + MxI.$isInterface(IBird));
MxI.$System.log("'IFish'               is an interface ?         " + MxI.$isInterface(IFish));

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
MxI.$System.log(unit_test_step + ". Check if an Implementation class implements a given Interface");
MxI.$System.log("'FlyingFish'          implements 'IBird' ?      " + MxI.$implements(FlyingFish, IBird));
MxI.$System.log("'FlyingFish'          implements 'IFish' ?      " + MxI.$implements(FlyingFish, IFish));

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
MxI.$System.log(unit_test_step + ". get Superclass of a type");
MxI.$System.log("Superclass of 'ILifeForm' is:\t\t\t" + MxI.$getSuperclass(ILifeForm).name);
MxI.$System.log("Superclass of 'Animal' is:\t\t\t" + MxI.$getSuperclass(Animal).name);
MxI.$System.log("Superclass of 'IAnimal' is:\t\t\t" + MxI.$getSuperclass(IAnimal).name);
MxI.$System.log("Superclass of 'Cat' is:\t\t\t\t" + MxI.$getSuperclass(Cat).name);

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
var a_cat = new Cat();
MxI.$System.log(unit_test_step + ". Instance of 'Cat' created: " + a_cat.name);
MxI.$System.log("'%s' is a 'ILifeForm' ?\t\t\t" + MxI.$isInstanceOf(ILifeForm,   a_cat), a_cat.name);
MxI.$System.log("'%s' is a 'IAnimal' ?\t\t\t"   + MxI.$isInstanceOf(IAnimal,     a_cat), a_cat.name);
MxI.$System.log("'%s' is a 'IMammal' ?\t\t\t"   + MxI.$isInstanceOf(IMammal,     a_cat), a_cat.name);
a_cat.run();
a_cat.suckle();
a_cat.live();

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
var a_flying_fish = new FlyingFish();
MxI.$System.log(unit_test_step + ". Instance of 'FlyingFish' created: " + a_flying_fish.name);
MxI.$System.log("'%s' is a 'Animal' ?\t\t\t" + MxI.$isInstanceOf(Animal,      a_flying_fish), a_flying_fish.name);
MxI.$System.log("'%s' is a 'FlyingFish' ?\t\t" + MxI.$isInstanceOf(FlyingFish,  a_flying_fish), a_flying_fish.name);
MxI.$System.log("'%s' is a 'IAnimal' ?\t\t" + MxI.$isInstanceOf(IAnimal,     a_flying_fish), a_flying_fish.name);
MxI.$System.log("'%s' is a 'IBird' ?\t\t\t" + MxI.$isInstanceOf(IBird,       a_flying_fish), a_flying_fish.name);
MxI.$System.log("'%s' is a 'IFish' ?\t\t\t" + MxI.$isInstanceOf(IFish,       a_flying_fish), a_flying_fish.name);
a_flying_fish.fly();
a_flying_fish.swim();
a_flying_fish.run();
a_flying_fish.live();

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
MxI.$System.log(unit_test_step + ". Check generated names for instances");

var another_cat = new Cat();
MxI.$System.log("Another instance of 'Cat' created:              '%s'", another_cat);

var another_animal = new Animal();
MxI.$System.log("Another instance of 'Animal' created:           '%s'", another_animal.name);

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
MxI.$System.log(unit_test_step + ". Change Logger");

MxI.$System.setLogger(StarPrefixLogger.getSingleton());
MxI.$System.log("Logger changed to 'StarPrefixLogger'");
MxI.$System.resetLogger();

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
MxI.$System.log(unit_test_step + ". 'Null Object' feature, check if input value is '%s' or 'undefined'", MxI.$Null);
MxI.$System.log("MxI.$isNull(%s):                         %s", undefined, MxI.$isNull(undefined));
MxI.$System.log("MxI.$isNull(%s):                          %s", MxI.$Null, MxI.$isNull(MxI.$Null));

//--------------------------------------------------------------------------
MxI.$System.log(SEPARATOR);
unit_test_step++;
MxI.$System.log(unit_test_step + ". Singleton feature");
MxI.$System.log("isSingleton(%s):                          %s", MxI.$Null, MxI.$isSingleton(MxI.$Null));
MxI.$System.log("'%s' is a 'MxI.$ISingleton' ?             " + MxI.$isInstanceOf(MxI.$ISingleton, MxI.$Null), MxI.$Null);


MxI.$System.banner("End of Unit Test", true);
