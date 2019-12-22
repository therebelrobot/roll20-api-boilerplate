import { chunkArray } from './chunkArray'

export const convertArgs = (argsArray) => {
  const chunkedArgs = chunkArray(argsArray, 2)
  const argObj = {}
  for (const chunk of chunkedArgs) {
    argObj[chunk[0]] = chunk[1]
  }
  return argObj
}