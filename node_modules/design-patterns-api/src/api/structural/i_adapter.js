//==============================================================
// i_adapter.js
// 'IAdapter' interface class
// Design Pattern:    Adapter ('Adapter' participant)
// Other participant: 'Adaptee' (see IAdaptee in i_adaptee.js)
// Purpose:           Convert the interface of a class into another interface clients expect. 
//                    Lets classes work together that couldn't otherwise because of incompatible
//                    interfaces.
// Pattern Subgroup:  Structural
// Status:            Ready
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/AdapterToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IAdapter' interface class ====================
class IAdapter extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'request' service
  // request_id: String or Integer or Enumeration
  request(request_id, ...args) {
    MxI.$raiseNotImplementedError(IAdapter, this);
  } // IAdapter.request()
} // 'IAdapter' interface class
MxI.$setAsInterface(IAdapter).$asChildOf(MxI.$IBaseInterface);
exports.IAdapter = IAdapter;