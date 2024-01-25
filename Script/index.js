const dataPosition= document.getElementById("data")
const data= new Date();
// const a=document.createElement("span");
// a.innerText=`${data} `
console.log(data.getFullYear())
dataPosition.innerHTML=data.getFullYear()+"immagini di <a class='text-white' href=`#`>Pixabay</a>"