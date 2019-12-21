import { debugLog } from '../../lib/util/debuglog';
import { meta } from '../../meta';
import { commandMetas } from '../commandMetas';

const formatHelp = (name, helpText) => {
  return `____**${name}**: *${helpText}*
`
}

export const helpHandler = (args, error) => {
  debugLog('sub_command handler was called! <');
  sendChat('module_help', `
**command**: *&excl;${meta.command} help*
__*options*:`);
  for (const commandName of Object.keys(commandMetas)) {
    const command = commandMetas[commandName]
    sendChat('module_help', formatHelp(command.command, command.helpText));
  }
  if (error) {
    sendChat('module_help', `
    

    ERROR: ${error}`);
  }
};
