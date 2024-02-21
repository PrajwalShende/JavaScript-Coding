//GIVEN A STRING REVERSE EACH WORD IN THE SENTENCE
var str = "Umineko is the greatest piece of fiction"

var savedStr = str.split(" ").map((word)=>{               //map saves it in a different array
    return word.split("").reverse().join() //spilt's the string in indiviual characters, reverses them and then joins them
})

console.log(savedStr.join(" "));  //joins the array