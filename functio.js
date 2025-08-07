// simple:
// let a=1;
// let b=2;

function Addition(){
   let a="A";
    let b=2;
     return a+b;
}
document.write(Addition());

console.log("ADDITION IS ",Addition());

// PARAMETERTIES FUNCTION

function additions(a,b){
    return a*b;
}
console.log(additions(2,3));


//before arrow function

let var2=function (x,y){
    return x*y;
}
console.log("without arrow func",var2(5,8));

// Arrow function

let p=(c,d)=>{  
return (c*d/2);
}
console.log("arrow funtion",p(5,5));
let a= null;
console.log(typeof(a));
