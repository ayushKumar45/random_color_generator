const getcolor=()=>{
const rand_num=Math.floor(Math.random()*16777215);
const random_code="#"+rand_num.toString(16);
document.body.style.background=random_code;
document.getElementById("color_code").innerText=random_code;
}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
getcolor();