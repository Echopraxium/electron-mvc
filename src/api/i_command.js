//==============================================================
// i_command.js
// Purpose: 'ICommand' interface class
// Project: 'electron-mvc' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'ICommand' interface class ====================
class ICommand extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'execute' service
  execute() {
    MxI.$raiseNotImplementedError(ICommand, this);
  } // ICommand.execute
  
  // Fallback implementation of 'unExecute' service
  unExecute() {
    MxI.$raiseNotImplementedError(ICommand, this);
  } // ICommand.unExecute
} // 'ICommand' class
MxI.$setAsInterface(ICommand).$asChildOf(MxI.$IBaseInterface);
exports.ICommand = ICommand;