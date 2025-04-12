let b=document.querySelector(".blue");
let p=document.querySelector(".purple");
let g=document.querySelector(".green");
let r=document.querySelector(".ran");
let main=document.querySelector("body");
b.addEventListener("click",function(){
    main.style.backgroundColor="dodgerblue";
})
p.addEventListener("click",function(){
    main.style.backgroundColor="purple";
})
g.addEventListener("click",function(){
    main.style.backgroundColor="rgb(0, 255, 0)";
})
r.addEventListener("click",function(){
    main.style.backgroundColor= randomcolour();
})
function randomcolour(){
    let p= Math.floor(Math.random()*256);
    let q= Math.floor(Math.random()*256);
    let r= Math.floor(Math.random()*256);
    return  `rgb(${p},${q},${r})`
}