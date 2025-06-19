const firstimage = document.querySelector("img");
//sets and event listener when the user clicks the image it changes
firstimage.addEventListener("click", () => {
    const mySrc = firstimage.getAttribute("src");
    if(mySrc === "images/1.png"){
        firstimage.setAttribute("src", "images/2.png");
    } else{
        firstimage.setAttribute("src", "images/1.png")
    }
});

//making the images slide both sides
const track =document.getElementById("image tracker"); // selecting the image track conatainer by its ID

let isDragging =  false; //currently draggin
let startX; //starting point
let scrollLeft; //position of the container before

track.addEventListener("mousedown", (e) =>{
    isDragging = true;
    track.classList.add("dragging");
    startX = e.pageX - track.offsetLeft;
    scrollleft = track.scrollleft;
});

track.addEventListener("mouseleave", () =>{
    isDragging= false;
    track.classList.remove("dragging");
});

track.addEventListener("mouseup", (e) =>{
    isDragging= false;
    track.classList.remove("dragging");
});

track.addEventListener("mousemove", (e) => {
    if(!isDragging) return;
    e.preventDefault()
    const x = e.pageX - track.offsetLeft;
    const walk = (x -startX) *2;
    track.scrollLeft = scrollLeft - walk;
});

track.addEventListener("touchstart", (e) =>{
    startX = e.touches[0].pageX -track.offsetLeft;
    scrollLeft = track.scrollLeft
});

track.addEventListener("touchmove", (e) =>{
    const x  = e.touches[0].pageX - track.offsetLeft;
    const walk = (x-startX) *2
    track.scrollLeft = scrollLeft-walk;
});


//make  a slide show for the images
// const fs = require('fs');
// const path = require('path');

// const folderpath  = "./Images";
// let imag = [];

// fs.readdir(folderpath, (err, files) => {
//     if(err){
//         console.error("Error reading the Folder", err);
//     }
//     else{
//         imag = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
//         console.log("Images:", images);

//         if (imag.length > 0){
//             showSlides();
//         } else{
//             console.warn("No images found in the folder")
//         }
//     }
// });

// let idx = 0

// function showSlides(){
//     document.getElementById("slideshow").src = imag[idx];

//     idx = (idx+1) % imag.length;
//     setTimeout(showSlides, 500);
// }



//creats a class called done and highlists the items in the
//list when clicked
// const listItems = document.querySelectorAll("li");

// function finished(e){
//     if(!e.target.className){
//         e.target.className = "done";
//     } else{
//         e.target.className = "";
//     }
// }

// listItems.forEach((item) => {
//     item.addEventListener("click", finished);
// });

//references to the new button and the heading
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName(){
//     const myName = prompt("please enter your name.");
//     //This checks if the input is a value
//     //if it is not it runs the function from the start
//     if(!myName){
//         setUserName
//     } else{
//         localStorage.setItem("name", myName);
//         myHeading.textContent = `SERA LENS | REAL ESTATE MEDIA SERVICES, ${myName}`;
//     }
// }

// if (!localStorage.getItem("name")){
//     setUserName();
// } else {
//     const storedName = localStorage.getItem("name")
//     myHeading.textContent = `welcome back, ${storedName}`;
// }

// myButton.addEventListener("click", () => {
//     setUserName();
// })

//for the menue button functionality
// const menuButtion = document.querySelector("menubtn");
// const navMenu = document.querySelector("#nav-menue a");

// function menuButton(){

// }

// if(menuButtion && navMenu){
//     menuButtion.addEventListener("click", function() {
//         navMenu.menu-icon.toggle("show");
//     });
// }