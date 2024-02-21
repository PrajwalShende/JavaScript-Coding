//WRITE A JS FUNCTION TO GET THE NUMBER OF OCCURENCES OF EACH LETTER IN SPECIIFIED STRING

function occ(str){
    let occurences = {};            //obj used to keep count
    str.split("").forEach((ele)=>{
       if (occurences.hasOwnProperty(ele)=== false) { 
       occurences[ele] = 1;   //if not occurence then insert the value i.e 1
       } else {
        occurences[ele]++;     //if there if occurence then increment the count of the value
       }
     })

     return occurences;
}

console.log(occ("Battler"));