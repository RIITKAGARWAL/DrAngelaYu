document.querySelector("button").addEventListener("click", shuffle);
function shuffle(){
   let x= Math.floor( Math.random()*10) %6 +1;
   let y= Math.floor( Math.random()*10) %6 +1;
   const elem1 =    document.getElementById("first").getAttribute("src");
   const elem2 =    document.getElementById("second").getAttribute("src");
   console.log(x , y);
   document.getElementById("first").setAttribute("src", mix(x));
   document.getElementById("second").setAttribute("src",mix(y));
    function mix(obj){
        let text= "./images/" + obj + ".jpeg"
        return text;
    }
}   