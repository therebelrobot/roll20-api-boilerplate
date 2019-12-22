export const chunkArray = (myArray, chunk_size) => {
  const arrayLength = myArray.length;
  const tempArray = [];
  let myChunk;
  
  for (let index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index+chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
  }

  return tempArray;
}