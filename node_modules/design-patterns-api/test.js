//==============================================================
// test.js
// Purpose: Unit Test for 'design-patterns-api'
//          https://www.npmjs.com/package/design-patterns-api
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
//const MxI                   = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const MxI                   = require('mixin-interface/src/mixin_interface.js').MxI; 
const IAbstractFactory      = require('./src/api/creational/i_abstract_factory.js').IAbstractFactory;
const ICreator              = require('./src/api/creational/i_creator.js').ICreator;
const IProduct              = require('./src/api/creational/i_product.js').IProduct;
const IBuilder              = require('./src/api/creational/i_builder.js').IBuilder;

const IObserver             = require('./src/api/behavioral/i_observer.js').IObserver;
const ISubject              = require('./src/api/behavioral/i_subject.js').ISubject;
const IIterator             = require('./src/api/behavioral/i_iterator.js').IIterator;
const ICollection           = require('./src/api/behavioral/i_collection.js').ICollection;
const IState                = require('./src/api/behavioral/i_state.js').IState;
const IStateContext         = require('./src/api/behavioral/i_state_context.js').IStateContext;
const IHandler              = require('./src/api/behavioral/i_handler.js').IHandler;
const IRequest              = require('./src/api/behavioral/i_request.js').IRequest;
const IVisitor              = require('./src/api/behavioral/i_visitor.js').IVisitor;
const IElement              = require('./src/api/behavioral/i_element.js').IElement;
const IMemento              = require('./src/api/behavioral/i_memento.js').IMemento;
const IOriginator           = require('./src/api/behavioral/i_originator.js').IOriginator;
const ICareTaker            = require('./src/api/behavioral/i_care_taker.js').ICareTaker;
const IStrategy             = require('./src/api/behavioral/i_strategy.js').IStrategy;
const IStrategyContext      = require('./src/api/behavioral/i_strategy_context.js').IStrategyContext;

const IImplementor          = require('./src/api/structural/i_implementor.js').IImplementor;
const IAdapter              = require('./src/api/structural/i_adapter.js').IAdapter;
const IAdaptee              = require('./src/api/structural/i_adaptee.js').IAdaptee;
const IFacade               = require('./src/api/structural/i_facade.js').IFacade;

const LoggerFactory         = require('./src/implementation_samples/creational/logger_factory.js').LoggerFactory;
const LgF                   = require('./src/implementation_samples/creational/logger_factory.js').LgF;


//==================== start of test.js ====================
var unit_test_step    = 0;
var unit_test_substep = 0;

MxI.$System.log();
MxI.$System.log("=================================================================");
MxI.$System.log("========== Unit Test for 'design-patterns-api' package ==========");
MxI.$System.log("=================================================================");

//==================== Creational Patterns ====================
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Creational Patterns");
// Abstract Factory: Creates an instance of several families of classes
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Abstract Factory");
MxI.$System.log("'IAbstractFactory'          is an interface ? " + MxI.$isInterface(IAbstractFactory));

MxI.$System.log("Demonstrate 'Abstract Factory' Design pattern by changing DefaultLogger: ");
MxI.$System.log();

const logger_factory =  new LoggerFactory();

const arrow_logger = logger_factory.createProduct(LgF.arrow_prefix_logger);
MxI.$System.setLogger(arrow_logger);
MxI.$System.log("Logger is now '" + arrow_logger.name + "'");
MxI.$System.resetLogger();
MxI.$System.log();

const timestamp_logger = logger_factory.createProduct(LgF.timestamp_prefix_logger);
MxI.$System.setLogger(timestamp_logger);
MxI.$System.log("Logger is now '" + timestamp_logger.name + "'");
MxI.$System.resetLogger();
MxI.$System.log();

const count_logger = logger_factory.createProduct(LgF.count_prefix_logger);
MxI.$System.setLogger(count_logger);
MxI.$System.log("Logger is now '" + count_logger.name + "'");
MxI.$System.resetLogger();
MxI.$System.log();

MxI.$System.resetLogger();


// Factory Method: Define an interface for creating an object, but let subclasses decide 
//                 which class to instantiate. Lets a class defer instantiation to subclasses.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Factory Method");
MxI.$System.log("'ICreator'                  is an interface ? " + MxI.$isInterface(ICreator));
MxI.$System.log("'IProduct'                  is an interface ? " + MxI.$isInterface(IProduct));

// Builder: Separates object construction from its representation
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Builder");
MxI.$System.log("'IBuilder'                  is an interface ? " + MxI.$isInterface(IBuilder));
unit_test_substep = 0;

//==================== Behavioral Patterns ====================
MxI.$System.log("----------------------------------------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Behavioral Patterns");

// Observer
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Observer");
MxI.$System.log("'IObserver'                 is an interface ? " + MxI.$isInterface(IObserver));
MxI.$System.log("'ISubject'                  is an interface ? " + MxI.$isInterface(ISubject));

// Iterator
// Provide a way to access the elements of an aggregate object sequentially without exposing 
// its underlying representation
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Iterator");
MxI.$System.log("'IIterator'                 is an interface ? " + MxI.$isInterface(IIterator));
MxI.$System.log("'ICollection'               is an interface ? " + MxI.$isInterface(ICollection));

// State
// Allow an object to alter its behavior when its internal state changes. 
// The object will appear to change its class. 
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". State");
MxI.$System.log("'IState'                    is an interface ? " + MxI.$isInterface(IState));
MxI.$System.log("'IStateContext'             is an interface ? " + MxI.$isInterface(IStateContext));

// Chain Of Responsability
// Avoid coupling the sender of a request to its receiver by giving more than one object a 
// chance to handle the request. Chain the receiving objects and pass the request along the 
// chain until an object handles it.
// @Source:  Elements of Reusable Object-Oriented Software 
// @Authors: Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Chain Of Responsability");
MxI.$System.log("'IHandler'                  is an interface ? " + MxI.$isInterface(IHandler));
MxI.$System.log("'IRequest'                  is an interface ? " + MxI.$isInterface(IRequest));

// Visitor
// In Visitor pattern, we use a visitor class which changes the executing algorithm of an 
// element class. By this way, execution algorithm of element can vary as and when visitor
// varies. This pattern comes under behavior pattern category. As per the pattern, element
// object has to accept the visitor object so that visitor object handles the operation
// on the element object.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Visitor");
MxI.$System.log("'IVisitor'                  is an interface ? " + MxI.$isInterface(IVisitor));
MxI.$System.log("'IElement'                  is an interface ? " + MxI.$isInterface(IElement));

// Memento
// Without violating encapsulation, capture and externalize an object's internal state so 
// that the object can be restored to this state later.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Memento");
MxI.$System.log("'IMemento'                  is an interface ? " + MxI.$isInterface(IMemento));
MxI.$System.log("'IOriginator'               is an interface ? " + MxI.$isInterface(IOriginator));
MxI.$System.log("'ICareTaker'                is an interface ? " + MxI.$isInterface(ICareTaker));

// Strategy
// Define a family of algorithms, encapsulate each one, and make them interchangeable. 
// Lets the algorithm vary independently from clients that use it
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Strategy");
MxI.$System.log("'IStrategy'                 is an interface ? " + MxI.$isInterface(IStrategy));
MxI.$System.log("'IStrategyContext'          is an interface ? " + MxI.$isInterface(IStrategyContext));

unit_test_substep = 0;

//==================== Structural Patterns ====================
MxI.$System.log("----------------------------------------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Structural Patterns");
// Bridge
// Decouple an abstraction from its implementation so that the two can vary independently.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Bridge");
MxI.$System.log("'IImplementor'              is an interface ? " + MxI.$isInterface(IImplementor));

// Adapter
// Convert the interface of a class into another interface clients expect. Lets classes work 
// together that couldn't otherwise because of incompatible interfaces.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Adapter");
MxI.$System.log("'IAdapter'                  is an interface ? " + MxI.$isInterface(IAdapter));
MxI.$System.log("'IAdaptee'                  is an interface ? " + MxI.$isInterface(IAdaptee));

// Facade
// Provides a unified interface to a set of interfaces in a subsytem. Façade defines a 
// higher-level interface that makes the subsystem easier to use.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Facade");
MxI.$System.log("'IFacade'                   is an interface ? " + MxI.$isInterface(IFacade));

unit_test_substep = 0;

MxI.$System.log("==================== End of Unit Test ====================");
MxI.$System.log;