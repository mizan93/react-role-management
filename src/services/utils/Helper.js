export function checkObjectInArray(obj, array, uniqueParam) {
  for (let index = 0; index < array.length; index++) {
    if (array[index][uniqueParam] === obj[uniqueParam]) {
      return true;
    }
  }
  return false;
}
