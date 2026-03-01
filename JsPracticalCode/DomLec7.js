// Example # 1 getElementById with varibles  
let changetitle = document.getElementById("title");
console.log(changetitle);

// document.getElementById("title").innerText = "DOM Is stand for Document Object Model";
document.getElementById("title").innerHTML = "<i>DOM Is stand for Document Object Model<i>";

document.getElementById("title").style.color = "white";

document.getElementById("title").style.backgroundColor = "blue";

// let color = "yellow";
// document.body.style.background = color;
//-----------------------------------------------------------------------------------------------
// Example # 2 getElementById with varibles Example  

let text2 = document.getElementById("text");
text2.style.fontSize = "32px";
text2.style.color = "blue";

//-----------------------------------------------------------------------------------------------
// Example # 3 getElementById function and onclick Example  

function myfun(){
    document.getElementById("click").innerText = "Don't Worry JavaScript is Fun..";
}

function mylogin(){
    alert("Login Successfully..")
}

//-----------------------------------------------------------------------------------------------
// Example # 1 document.getElementsByClassName function and onclick Example  

let boxes = document.getElementsByClassName("box");
// console.log(boxes);

boxes[1].style.backgroundColor = "yellow";
boxes[3].style.color = "blue";
boxes[2].style.color = "orange";

