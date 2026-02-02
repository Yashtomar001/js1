// const heading = document.getElementById("myHeading");
// console.log(heading);

// heading.style.color = "purple";
// heading.style.backgroundColor = "yellow";
// heading.textContent = "Hello Students";

// document.addEventListener("DOMContentLoaded", () => {
//   const heading = document.getElementById("myHeading");

//   heading.style.color = "purple";
//   heading.style.backgroundColor = "yellow";
//   heading.textContent = "Hello Students";
// });

const subHeading = document.getElementsByClassName("sub-heading");

console.log(subHeading);

for (let i = 0; i < subHeading.length; i++) {
    subHeading[i].style.color = "cyan";
}