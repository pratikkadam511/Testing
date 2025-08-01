// a=10;
// b=10;
// c='10';

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(typeof(a+c));
// console.log(a-c);
// console.log(a*c);
// console.log(a/c);
// console.log(a+c+b);

// console.log(a==c);
// console.log(a===c);

// EXAMPELS

d=20;
e=30;
f='50';

console.log('Addition',d+e);
console.log("Substraction",d-e);
console.log("Multiplication",d*e);
console.log("Division",d/e);
console.log("Modulus",d%e);
console.log("Exponentiation",d**e);
console.log("Increment",d++);
console.log("Decrement",d--);

console.log(typeof(d+f));
console.log(d-f);
console.log(d*f);
console.log(d/f);
console.log(d+f+e);
console.log(d==f);
console.log(d===f);

// Assignment Oprator Examples

console.log(" = oP::   d=20",d=20);
console.log("+= OP::   d+=20: d=d+20 ",d+=20);
console.log("-= OP::   d-=20: d=d-20",d-=20);
console.log("*= OP::   d*=20: d=d*20",d*=20);
console.log("/= OP::   d/=20: d=d/20",d/=20);

// Logical OP// AND&& OR||
// AND
console.log("BOTH CONDITION TRUE : THEN TRUE",true&&true);
console.log("FALSE && TRUE       : THEN FLESE",false&&true);
console.log("TRUE  && FALSE      : THEN FALSE",true&&false);
console.log("FALSE && FALSR      : THEN FALSE",false&&false);

//OR
console.log("ANY CONDITION IS TRUE : THEN TRUE",true||true);
console.log("FALSE || TRUE         : THEN TRUE",false||true);
console.log("TRUE  || FALSE        : THEN TRUE",true||false);
console.log("FALSE || FALSR        : THEN FALSE",false||false);
console.log("FALSE || FALSR        : THEN FALSE",false||false);

// statementrs
// if else

    // var age=prompt("Enter your age");
    // if(age>=18){
    //     console.log("You are eligible to vote");
    // }else{
    //     console.log("You are not eligible to vote");
    // }

    let marks = prompt("Enter your marks");
   
        if (marks >= 90) {
        console.log("You got A+ grade");
    }else if (marks >= 80) {
        console.log("You got A grade");
    }else if (marks >= 70) {
        console.log("You got B grade");
    }
    else if (marks >= 60) {
        console.log("You got C grade");
    }else {
        console.log("You got D grade");
    }
    
// switch case

var day = prompt("Enter a number between 1 to 7");
switch (day) {
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case '3':
        console.log("Wednesday");
        break;
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case '6':
        console.log("Saturday");
        break;
    case '7':
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}