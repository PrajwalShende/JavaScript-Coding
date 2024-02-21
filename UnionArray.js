//WRITE A JS PROGRAM TO COMPUTE THE UNION OF TWO ARRAYS
//SAMPLE : console.log(union([1,2,3], [100,2,1,10])); [1,2,3,10,100]

function unionOfArray(arr1, arr2){
   return [...new Set(arr1.concat(arr2))]
}

console.log(unionOfArray([1,2,3], [100,2,1,10]));