'use strict';

import { meta } from '../meta'
import { debugLog } from './util/debuglog';

import { commands as subCommmands } from './commands';

const inputHandler = function(msg) {
  
  if (msg.type !== 'api' || typeof msg.content !== 'string') {
    return;
  }

  debugLog(`handle input > ${msg.content}`);

  const args = msg.content.split(',').filter(arg => typeof arg === 'string');

  if (args[0] === `!${meta.command}`) {
    debugLog('command was called! <');
    if (args[1] && subCommmands.hasOwnProperty(args[1])) {
      debugLog(`subcommand was called! < ${args[1]}`);
      args.shift();
      args.shift();
      subCommmands[args[1]].handler(args);
    } else {
      debugLog('invalid args');
      subCommmands.help.handler(args, `Arguments invalid: ${args.join(' ')}`);
    }
  }
};

const registerEventHandlers = function() {
  debugLog('register event handler <');
  on('chat:message', inputHandler);
};

const checkInstall = function() {
  // check state and set defaults here if needed
  debugLog(`state keys: ${Object.keys(state).join()}`)
};

on('ready',function(){
  debugLog('on ready <');
	checkInstall();
	registerEventHandlers();
});