//IN AN ARRAY OF NUMBERS & STRINGS, ONLY ADD THOSE MEMBERS WHICH ARE NOT STRINGS

var arr = ["abc", 10, "def", 44, "ghi", 12, 3, "fgkv"];
var sum = 0;

arr.forEach((ele)=>{
    if(typeof ele == 'number'){
        sum = sum + ele;
    }
})

console.log(sum);