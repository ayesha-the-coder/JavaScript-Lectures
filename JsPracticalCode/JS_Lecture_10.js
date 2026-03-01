// Example 1
function showalert(){
    alert("Logion Successfully...")
}
// Example 2
document.getElementById("btn2").onclick  = abc

function abc(){
    alert("Submit Your Form..")
}

// Example 3 
// document.getElementById("para").onclick  = abc

// function abc(){
//     document.getElementById("para").style.color = "red";
// }

// addEventListener Example 1

document.getElementById("para").addEventListener("click" ,myparacolor);

function myparacolor(){
    document.getElementById("para").style.color = "blue";
    document.getElementById("para").style.fontSize = "32px";
}

document.querySelector("h1").addEventListener("click" , function(){
    document.querySelector("h1").style.color = "white";
    document.querySelector("h1").style.backgroundColor = "blue  ";
    
})

// addEventListener keypress Example

document.addEventListener("keypress", function(ayesha){
    console.log("User keyborad Press button: => " + ayesha.key)
})


// addEventListener Mouseover and mouseout Example


let element = document.getElementById("event");
element.addEventListener("mouseover", MouseOverEvent)
element.addEventListener("mouseout", MouseInEvent)

function MouseOverEvent(){
    document.getElementById("demo").innerHTML += "Mouse In <br> "
}


function MouseInEvent(){
    document.getElementById("demo").innerHTML += "Mouse out <br>"
}

// removeEventListener Example

document.getElementById("para").removeEventListener("click" , myparacolor )


