//WRITE A JS FUNCTION WHICH ACCEPTS AN ARGUMENT AND RETURNS THE TYPE
// THERE ARE SIX POSSIBLE VALUES THAT typeOf RETURNS: OBJECT, BOOLEAN, FUNCTION, NUMBER, STRING & UNDEFINED

function typeTeller(ele){
    return typeof ele;
}

console.log(typeTeller([]));
console.log(typeTeller(5));
console.log(typeTeller('Hi'));
console.log(typeTeller(true));
console.log(typeTeller(function(){}));