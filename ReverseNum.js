//WRITE A FUNCTION TO REVERSE A NUMBER

/* Easy Way 
function reverseNum(num) {
    return Number(num.toString().split("").reverse().join(""))
} */

function reverseNum(num) {
    var rev = 0;
    while(num>0){
        var rem = num%10;           //gives the last digit to store in rem eg - 123 % 10 = 3
        rev  = rev*10 + rem;
        num = Math.floor(num/10);  //Math.floor(1234/10) = 123, Math.floor(123/10) = 12,...and finally Math.floor(1/10) = 0
    }
    return rev;
}
console.log(reverseNum(46791)); 