//==============================================================
// i_product.js
// 'IProduct' interface class
// Design Patterns:     Abstract Factory ('Product' participant)
//                      Factory Method ('Product' participant)
//                      Builder ('Product' participant)
// Purpose:             Define an interface for creating an object, 
//                      but let subclasses decide which class to instantiate. 
//                      Lets a class defer instantiation to subclasses.
// Other participant:   * 'Abstract Factory' (see IAbstractFactory in i_abstract_factory.js) 
//                        in 'Abstract Factory' pattern
//                      * 'Creator' (see ICreator in i_creator.js) in 'Factory Method' pattern
//                      * 'Builder' (see IBuilder in i_builder.js) in 'Builder' pattern
// Pattern Subgroup:    Creational
// Status:              Ready
// Reference:           http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IProduct' interface class ====================
class IProduct extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getAttribute' service
  // attribute_id: String or Integer or Enumeration
  getAttribute(attribute_id) {
    MxI.$raiseNotImplementedError(IProduct, this);
  } // IProduct.getAttribute()
} // 'IProduct' interface class
MxI.$setAsInterface(IProduct).$asChildOf(MxI.$IBaseInterface);
exports.IProduct = IProduct;