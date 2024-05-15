function flattenArray(arr) {
  return arr.reduce(
    (flat, toflatten) =>
      flat.concat(
        Array.isArray(toflatten) ? flattenArray(toflatten) : toflatten
      ),
    []
  );
}
let nestedArr = [1, [2, [3, 4]], 5, [6]];
console.log(flattenArray(nestedArr));

//sum
function falttenArray(arr){
    return arr.reduce((sum,current)=>sum + (Array.isArray(current)?falttenArray(current):current),0)
}
let array =  [1, [2, [3, 4]], 5, [6]];
console.log(falttenArray(array));