//==============================================================
// i_element.js
// 'IElement' interface class
// Design Pattern:    Visitor ('Element' participant)
// Other participant: 'Visitor' (see IVisitor in i_visitor.js)
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

//==================== 'IElement' interface class ====================
class IElement extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'accept' service
  // arg_visitor: IVisitor
  accept(arg_visitor, ...args) {
    MxI.$raiseNotImplementedError(IElement, this);
  } // IElement.accept()
} // 'IElement' interface class
MxI.$setAsInterface(IElement).$asChildOf(MxI.$IBaseInterface);
exports.IElement = IElement;