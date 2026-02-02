const user = document.getElementsByClassName("user");
console.log(user);

user[0].style.color = "blue";
user[0].style.backgroundColor = "yellow";
user[0].style.padding = "10px";
user[0].style.textAlign = "center";
user[0].style.fontSize = "20px";

const para = document.getElementsByClassName("para");
console.log(para);
console.log(para.length);

for (let i = 0; i < para.length; i++) {
    para[i].style.color = "green";
    para[i].style.fontSize = "35px";
    para[i].style.fontWeight = "bold";
}