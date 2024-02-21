//WRITE A JS FUNCTION TO GET THE LAST ELEMENT OF AN ARRAY
// PASSING A PARAMETER 'n' WILL RETURN THE FIRST 'n' ELEMENTS OF THE ARRAY

function lastEleArr(arr, n=1){
    if (n<arr.length) {
        for (var i = 0;i<n;i++){
            console.log(arr[arr.length-1-i]);
        }
    } else {
        console.log(`${n} elements are not there`);
    }
    
}

lastEleArr([1,2,3,4,5],2)