//local storage     10mb   less     state_managment eg: if i want to fe employee detail from diffent pges by empid
//session           5mb    more
//cookies           4kb    less

// localStorage.setItem('empid',1234);
// localStorage.getItem('',);

// var empid=localStorage.getItem('empid');
// document.write("empid is: "+empid);

let id=prompt("enter emp id")
let name=prompt("enter name")

localStorage.setItem(id,name);





