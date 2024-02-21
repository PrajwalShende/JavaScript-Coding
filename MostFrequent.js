// WRITE A JS PROGRAM TO FIND THE MOST FREQUENT ITEM OF AN ARRAY

function freq(arr){
    var freq ={};
        arr.forEach((ele)=>{
            if(freq.hasOwnProperty(ele)) freq[ele]++;
            else freq[ele] =1;
        })
        var ans = Object.keys(freq).reduce((acc,num)=>{
            return freq[acc] > freq[num] ? acc : num;
        })

        console.log(ans);
    
}

freq([1,2,3,12,2,3,12,1,2,3,21,21])