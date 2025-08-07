function saveValues() {

    event.preventDefault();
        let username=document.getElementById("uname").value;
            // localStorage.setItem("users_name",username);

        let password=document.getElementById("pass").value;
            // localStorage.setItem("password",password);
        
        let cources=document.getElementById("cources").value;
            // localStorage.setItem("cources",cources);
        
            let arry=[username,password,cources];
            localStorage.setItem("arrys",arry);

            console.log(arry);
            

            

}

