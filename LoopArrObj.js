//LOOP AN ARRAY OF OBJECTS AND REMOVE ALL OBJECTS WHICH DON'T HAVE GENDER'S VALUE MALE

var arr = [
    {name: "Battler", gender:"Male"},
    {name: "Beatrice", gender:"Female"},
    {name: "Ange", gender:"Female"},
    {name: "Will", gender:"Male"},
    {name: "Keichi", gender:"Male"},
]

// First Way 
/* var newarr = arr.filter((ele)=>{
    return ele.gender ==  "Male";
}) */ 

// Second way
// First take count of total Female
var count = 0; 
arr.forEach((ele)=>{
   if (ele.gender !== "Male") count++;
})

/* To remove one non-male
for(var j = 0; j<arr.length; j++) {
    if(arr[j].gender !== "Male"){
        arr.splice(j,1);    splice(fromWhere,howMany);
    }
} */

// Repeat for all
for (var i =1; i<=count; i++){
    for(var j = 0; j<arr.length; j++) {
        if(arr[j].gender !== "Male"){
            arr.splice(j,1);   
        }
    }
}

console.log(arr);
