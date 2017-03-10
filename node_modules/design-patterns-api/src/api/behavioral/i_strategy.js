//==============================================================
// i_strategy.js
// 'IStrategy' interface class
// Design Pattern:    Strategy ('Strategy' participant)
// Other participant: 'Context' (see IStrategyContext in i_strategy_context.js)
// Purpose:           Define a family of algorithms, encapsulate each one, 
//                    and make them interchangeable. Lets the algorithm vary
//                    independently from clients that use it.
// Pattern Subgroup:  Behavioral
// Reference:         https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IStrategy' interface class ====================
class IStrategy extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'execute' service
  execute(...args) {
    MxI.$raiseNotImplementedError(IStrategy, this);
  } // IStrategy.execute()
} // 'IStrategy' interface class
MxI.$setAsInterface(IStrategy).$asChildOf(MxI.$IBaseInterface);
exports.IStrategy = IStrategy;