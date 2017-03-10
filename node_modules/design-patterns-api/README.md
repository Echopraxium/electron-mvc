# design-patterns-api

Implementation of [_Design Patterns_](http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf) as Interface classes.
>These are early releases (until 1.0.0 version). More to come shortly as I will use this package for my own projects anyway [|8^)>  

Only a subset of the Design Patterns are released ATM

>There are many online documents about _Design Patterns_. An important part of this project was to mine them and propose for each pattern the 'least worst' design (from my perspective). My proposals should just be considered as an ongoing work (for which your feedback is welcome) and certainly not a reference. Thus I advise you to check and evaluate by yourself these  documents (I have gathered them in _References_ paragraph) to check it they fits your learning curve and design issues.
  
Changelog for Release 0.0.15 :
* BugFixes and better code reuse in _Custom Loggers_ due to refactoring of `mixin-interface`

## Available Patterns

>Naming conventions: for any given interface class, its name is written with _PascalCase_ convention (e.g. `IAbstractFactory`) and its source code uses _snake_case_ convention (e.g. `i_abstract_factory.js`)

>Why `...args` ? Thanks to the _rest parameter_ feature of javascript es6 (`...args`), most interface services accept optional and variable number of arguments.

>Why all these `xxx_id` arguments ? This is a design choice motivated by 2 design intents. The first design intent is when the service call is delegated or propagated (e.g. 'request_id' argument is propagated in _Adapter_ when IAdapter.request() calls IAdaptee.specificRequest()). The second design intent is to avoid _unnecessary class proliferation_ by using this xxx_id argument as a way to make the call more specific (e.g. 'request_id' argument when calling IHandler.handleRequest() of _Chain Of Responsability_)

### Creational
* _Abstract Factory_ (changed): IAbstractFactory, IProduct
* _Factory Method_: ICreator, IProduct
* _Builder_: IBuilder, IProduct

### Behavioral
* _Observer_: IObserver and ISubject
* _Iterator_ (changed): IIterator, ICollection
* _State_ (changed): IState, IStateContext
* _Chain of Responsability_: IHandler, IContext
* _Visitor_: IVisitor, IElement
* _Memento_: IMemento, IOriginator, ICareTaker
* _Strategy_ (new): IStrategy, IStrategyContext

### Structural
* _Bridge_: IImplementor
* _Adapter_: IAdapter, IAdaptee
* _Facade_: IFacade

## How to implement a Design Pattern
A given _Design Pattern_ is composed of one or more _participants_, this is very much like _Role(s)_ in a play. Within `design-patterns-api` project, each participant is implemented as an _interface classs_. Thus, in order to _implement a Design Pattern_ you must implement the _interface class(es)_. Please refer to [How to code an Implementation class](https://github.com/Echopraxium/mixin-interface/blob/master/README.md#how-to-code-an-implementation-class) in the documentation of `mixin-interface` package.

### Code Sample: _LoggerFactory_
_LoggerFactory_ shows how to delegate the instanciation of a _Logger_ (a more flexible way to log traces than `console.log`) by implementing the _Abstract Factory_ design pattern.

 >See source code in: `./src/implementation_samples/creational`. It is demonstrated in `./test.js` Unit Test. There are 4 files in this code sample (`logger_factory.js`, `arrow_prefix_logger.js`, `timestamp_prefix_logger.js` and  `count_prefix_logger.js`), and the client code which uses them is in `./test.js` (Unit Test).


#### Installation and Usage:
```bash
npm install design-patterns-api -S
```

## How to run the Unit Test
#### Step 1: Install Prerequisite Tools
Install [_NodeJS_](https://nodejs.org/en/) and [_Git_](https://git-scm.com/)

#### Step 2: Clone the 'design-patterns-api' repository locally
Open a command shell then enter the following commands:
```bash
git clone git://github.com/Echopraxium/design-patterns-api
cd design-patterns-api
npm update
```

#### Step 3: Run the Unit Test
Now enter the following command:
```bash
node test.js
```

You should get the following output:
```bash
=================================================================
========== Unit Test for 'design-patterns-api' package ==========
=================================================================
1. Creational Patterns
----------
1.1. Abstract Factory
'IAbstractFactory'          is an interface ? true
Demonstrate 'Abstract Factory' Design pattern by changing DefaultLogger:

==> Logger is now 'arrow_prefix_logger_0'

[14:50:06 PM] Logger is now 'timestamp_prefix_logger_0'

[0] Logger is now 'count_prefix_logger_0'

----------
1.2. Factory Method
'ICreator'                  is an interface ? true
'IProduct'                  is an interface ? true
----------
1.3. Builder
'IBuilder'                  is an interface ? true
----------------------------------------
2. Behavioral Patterns
----------
2.1. Observer
'IObserver'                 is an interface ? true
'ISubject'                  is an interface ? true
----------
2.2. Iterator
'IIterator'                 is an interface ? true
'ICollection'               is an interface ? true
----------
2.3. State
'IState'                    is an interface ? true
'IStateContext'             is an interface ? true
----------
2.4. Chain Of Responsability
'IHandler'                  is an interface ? true
'IRequest'                  is an interface ? true
----------
2.5. Visitor
'IVisitor'                  is an interface ? true
'IElement'                  is an interface ? true
----------
2.6. Memento
'IMemento'                  is an interface ? true
'IOriginator'               is an interface ? true
'ICareTaker'                is an interface ? true
----------
2.7. Strategy
'IStrategy'                 is an interface ? true
'IStrategyContext'          is an interface ? true
----------------------------------------
3. Structural Patterns
----------
3.1. Bridge
'IImplementor'              is an interface ? true
----------
3.2. Adapter
'IAdapter'                  is an interface ? true
'IAdaptee'                  is an interface ? true
==================== End of Unit Test ====================
```

## References
* _Design Patterns in Java Tutorial_
  https://www.tutorialspoint.com/design_pattern/
* _SourceMaking / Design Patterns_  
  https://sourcemaking.com/design_patterns
* _Enginyeria del Software I - Curs 2006-2007_  
  http://ima.udg.edu/~sellares/EINF-ES1/
* _OODesign (Object Oriented Design)_  
  http://www.oodesign.com/
* _MacDonald Land / Design Patterns Quick Reference_  
  http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
* _Wikipedia / Software design pattern_    
  https://en.wikipedia.org/wiki/Software_design_pattern
* _Design Patterns_  
  O. Boissier, G. Picard SMA/G2I/ENS Mines Saint-Etienne
  http://www.emse.fr/~picard/cours/2A/DesignPatterns.pdf
* _Elements of Reusable Object-Oriented Software_    
  Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
