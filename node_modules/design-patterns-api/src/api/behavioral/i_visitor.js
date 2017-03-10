//==============================================================
// i_visitor.js
// 'IVisitor' interface class
// Design Pattern:    Visitor ('Element' participant)
// Other participant: 'Element' (see IElement in i_element.js)
// Purpose:           In Visitor pattern, we use a visitor class which changes the executing 
//                    algorithm of an element class. By this way, execution algorithm of 
//                    element can vary as and when visitor varies. This pattern comes under 
//                    behavior pattern category. As per the pattern, element object has to 
//                    accept the visitor object so that visitor object handles the operation
//                    on the element object.
// Pattern Subgroup:  Behavioral
// Reference:         https://www.tutorialspoint.com/design_pattern/visitor_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IVisitor' interface class ====================
class IVisitor extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'visit' service
  // arg_element: IElement
  visit(arg_element, ...args) {
    MxI.$raiseNotImplementedError(IVisitor, this);
  } // IVisitor.visit()
} // 'IVisitor' interface class
MxI.$setAsInterface(IVisitor).$asChildOf(MxI.$IBaseInterface);
exports.IVisitor = IVisitor;