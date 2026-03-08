// Example # 1 getAttribute

// let img =  document.getElementById("myImg");

// console.log(img.getAttribute("src"));
// console.log(img.getAttribute("alt"));

// Example # 2 getAttribute

// let myget = myImg.getAttribute("src");
// console.log(myget);

// Example # 1 SetAttribute


function changeimg(){
    let img =  document.getElementById("myImg");
    img.setAttribute("src" , "new-image.jfif");
    img.setAttribute("alt" , "sea-side");

}
let myremove = document.getElementById("myImg");
console.log(myremove.removeAttribute("alt"));