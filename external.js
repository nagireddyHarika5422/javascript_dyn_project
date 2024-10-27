document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("fname").addEventListener("keypress",fun1);
        function fun1(event){
            var ch=event.which;
            if(! ((ch>=65 && ch<=90) || (ch>=97 && ch<=122) || (ch==32) || (ch==8) || (ch==0)))
        {
            event.preventDefault();
        }
        }
        document.getElementById("lname").addEventListener("keypress",fun1);
        
        document.getElementById("mobile_num").addEventListener("keypress",fun2);
        function fun2(event){
            var ch=event.which;
            
            if(! (ch>=48 && ch<=57))
        {
            event.preventDefault();
        }
        
        }
        
        document.getElementById("experience").addEventListener("keypress",fun2);
        document.getElementById("duration").addEventListener("keypress",fun2);
        
        document.getElementById("qualif").addEventListener("keypress",fun3);
        function fun3(event){
            var ch=event.which;
            if(! ((ch>=65 && ch<=90) || (ch>=97 && ch<=122) || (ch==32) || (ch==8) || (ch==0) || (ch==46)))
        {
            event.preventDefault();
        }
        }
        
        
        document.getElementById("year").addEventListener("keypress",fun2);
       
      
});

function validate(){
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("cpass").value;
    var message = document.getElementById("message");
  
    
    if (password == confirmPassword) {
      if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters long.";
      } else {
        message.textContent = "Passwords match!";
        message.style.color = "green";
       
      }
    } else {
      message.textContent = "Passwords do not match!";
      message.style.color="red";
    }
  }

  