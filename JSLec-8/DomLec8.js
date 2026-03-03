 let query = document.querySelector(".list").style.color = "red";
 console.log(query);

 let abc = document.querySelectorAll(".list");
 for(let i=  1; i<abc.length; i++){

      abc[i].style.color = "blue";
      //  console.log(abc)
 }

let para=  document.getElementsByTagName("P")[0].style.fontSize = "32px";
// para[0].style.fontSize = "32px"
 

// const nodeList = document.querySelectorAll(".list");
// for (let i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.color = "red";
// }

/////////////////////////////////////////////////////////////
 // querySelector Example

    // let mylist = document.querySelector(".list");
    // // console.log(mylist);
    // mylist.style.backgroundColor = "yellow";

    // querySelectorAll Example
    
    let mylist = document.querySelectorAll(".list");
    // // console.log(mylist);
    // mylist[2].style.color = "red";


    // getElementsByTagName Example
    
    let mypara = document.getElementsByTagName("p");
    console.log(mypara);
    mypara[0].style.color = "red";