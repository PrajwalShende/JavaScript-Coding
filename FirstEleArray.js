//WRITE A JS FUNCTION TO GET THE FIRST ELEMENT OF AN ARRAY. 
// PASSING A PARAMETER 'n' WILL RETURN THE FIRST 'n' ELEMENTS OF THE ARRAY

function firstEleArr(arr, n=1){
    if (n<arr.length) {
        for (var i = 0;i<n;i++){
            console.log(arr[i]);
        }
    } else {
        console.log(`${n} elements are not there`);
    }
    
}

firstEleArr([1,2,3,4,5],2)