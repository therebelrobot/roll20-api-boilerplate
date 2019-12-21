
// Help
import { commandMetas } from '../commands/commandMetas'
import { commandHandlers } from '../commands/commandHandlers'

const commandObj = {}

for (const metaName of Object.keys(commandMetas)) {
  commandObj[commandMetas[metaName].command] = {
    ...commandMetas[metaName],
    handler: commandHandlers[metaName],
  }
}
export const commands = commandObj;