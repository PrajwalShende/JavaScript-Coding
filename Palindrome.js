//WRITE A JS FUNCTION THAT CHECKS WHETHER A PASSED STRING IS PALINDROME OR NOT
// PALINDROME EG - 'POOP','LOL'

function stringPalChecker(str){
    var reversed = str.split("").reverse().join("")

    return reversed === str ? true : false
}

console.log(stringPalChecker("poop"));
console.log(stringPalChecker("pool"));