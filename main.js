const left = document.getElementById("left");
const sifir= document.getElementById("sifir");
const right = document.getElementById("right");

let i =0;
left.addEventListener("click",function(){
if(i==0){
    alert("i menfi ola bilmez");
}
else{
    i--;
    sifir.innerText=i;

}
});
right.addEventListener("click",function(){
    i++;
    sifir.innerText=i;
});
console.log();