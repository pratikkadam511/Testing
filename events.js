// Mouse // key // window // form
//mouse: click , double click, hover,enter
//key: key up, key release,key down, key relese,key press
//form: submit
// window: onload ,resize


function saveValue(){
    var username=document.getElementById("uname").value;
    localStorage.getItem("StnName",username)
}

function showValue() {
    var username=document.getElementById("uname").value;
    localStorage.getItem("StnName",username)
    
}
window.addEventListener("resize",function(pr){
    SVGFESpotLightElement
console.log(pr.currentTarget.innerHeight);

})