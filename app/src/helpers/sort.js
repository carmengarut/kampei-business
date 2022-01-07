export const orderAlphabetically = (objectA, objectB) => {
  if (objectA.name < objectB.name) { return -1 }
  if (objectA.name > objectB.name) { return 1 }
  return 0
}
