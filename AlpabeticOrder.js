//WRITE A JS FUNCTION THAT RETURNS A PASSED STRING WITH LETTERS IN ALPHABETIC ORDER

function stringAlphabeticOrder(str){
    return str.split("").sort();
}

console.log(stringAlphabeticOrder("apple"));