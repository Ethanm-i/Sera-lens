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
const scrollContainer = document.getElementById("scrollContainer");

let isDragging = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = "grabbing";
});

scrollContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener("mouseup", () => {
    isDragging = false;
    scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Touch support
scrollContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// const scrollContainer =document.getElementById("scrollContainer"); // selecting the image track conatainer by its ID

// let isDragging =  false; //currently draggin
// let startX; //starting point
// let scrollLeft; //position of the container before

// scrollContainer.addEventListener("mousedown", (e) =>{
//     isDragging = true;
//     scrollContainer.classList.add("dragging");
//     startX = e.pageX - scrollContainer.offsetLeft;
//     scrollleft = scrollContainer.scrollleft;
// });

// scrollContainer.addEventListener("mouseleave", () =>{
//     isDragging= false;
//     scrollContainer.classList.remove("dragging");
// });

// scrollContainer.addEventListener("mouseup", (e) =>{
//     isDragging= false;
//     scrollContainer.classList.remove("dragging");
// });

// scrollContainer.addEventListener("mousemove", (e) => {
//     if(!isDragging) return;
//     e.preventDefault()
//     const x = e.pageX - scrollContainer.offsetLeft;
//     const walk = (x -startX) *2;
//     scrollContainer.scrollLeft = scrollLeft - walk;
// });

// scrollContainer.addEventListener("touchstart", (e) =>{
//     startX = e.touches[0].pageX -scrollContainer.offsetLeft;
//     scrollLeft = scrollContainer.scrollLeft
// });

// scrollContainer.addEventListener("touchmove", (e) =>{
//     const x  = e.touches[0].pageX - scrollContainer.offsetLeft;
//     const walk = (x-startX) *2
//     scrollContainer.scrollLeft = scrollLeft-walk;
// });


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