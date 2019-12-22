'use strict';

import { meta } from '../meta'
import { debugLog } from './util/debuglog';

import { commands as subCommmands } from './commands';

const inputHandler = function(msg) {
  
  if (msg.type !== 'api' || typeof msg.content !== 'string') {
    return;
  }

  debugLog(`handle input > ${msg.content}`);

  const args = msg.content.split(' ').filter(arg => typeof arg === 'string').map(str => str.trim());

  if (args[0] === `!${meta.command}`) {
    debugLog('command was called! <');
    args.shift();
    const subCommand = args[0]
    args.shift();
    if (subCommand && subCommmands.hasOwnProperty(subCommand) && subCommmands[subCommand].hasOwnProperty('handler')) {
      debugLog(`subcommand was called! < ${subCommand}`);
      subCommmands[subCommand].handler(args);
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