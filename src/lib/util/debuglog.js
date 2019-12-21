import { meta } from '../../meta';
export const debugLog = (msg) => {
  if (meta.debug) {
    const message = `**  (v${meta.version}): ${msg}`;
    log(`${meta.command}_debug ${message}`);
    sendChat(`${meta.command}_debug`, message);
  }
}
