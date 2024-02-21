//WRITE A JS FUNCTION TO CLONE A ARRAY 

function clonearr(arr){
    let newArr =[];
    return [...arr]; //Spread operator
}

let newArr = clonearr([1,2,3,4]);

console.log(newArr);