//WRITE A JS FUNCTION THAT ACCEPTS A STRING AS A PARAMETER AND CONVERTS THE FIRST LETTER OF EACH WORD OF THE STRING IN UPPER CASE

function capitalizestr(str){
     let words = str.split(" ").map((word)=>{
        return word.charAt(0).toUpperCase() + word.substring(1)
    })

    return words.join(" ")
}

console.log(capitalizestr("hello how are you?"));