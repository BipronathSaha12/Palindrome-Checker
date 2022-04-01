//fetch element
let textBox = document.querySelector("form #textBox");
let checkBtn = document.querySelector(".btn");
let clearBtn = document.querySelector(".clearBtn");
let showText = document.querySelector(".showText");
let filterText;

clearBtn.addEventListener('click', function(){
    textBox.value= "";
    showText.innerHTML = "";
})

checkBtn.addEventListener("click", function(){
    let reverseText = filterText.split("").reverse("").join("");
    if(filterText!== reverseText){
        return showText.innerHTML = "Not Palindrome"
        // console.log("Not palindrome")
    }else{
        return showText.innerHTML = " Palindrome"
        // console.log("Palindrome")
    }
})

textBox.addEventListener("keyup", function(){

    //remove white spaces 
    filterText = textBox.value.replace(/[^A-Za-z0-9]/ig, "")
    // console.log(filterText)
    if(filterText){
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
})