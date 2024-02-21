//HOW TO CHECK IF AN OBJECT IS AN ARRAY OR NOT?

function checkArray(ele){
    return Array.isArray(ele)      //returns true if it is an array else false
}

console.log( checkArray([]));
console.log( checkArray({}));