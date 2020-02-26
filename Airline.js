 function fn1(){
        
    var last_name = document.getElementById("last_name").value;  
    var first_name = document.getElementById("first_name").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
     var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var departure_date = document.getElementById("departure_date").value;         
    var return_date = document.getElementById("return_date").value;  
     
     last_name = last_name.trim();
     first_name = first_name.trim();
     email = email.trim();
     origin = origin.trim();
     destination = destination.trim();
       
     
    if (!last_name || !first_name || !gender || !email || !destination || !origin || !departure_date || !return_date)
      { 
        alert("Fill up empty fields!");  
      }else{
          
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == 0)
        {
            alert("You have entered an invalid email address!");
            document.getElementById("best_result").innerHTML = ""
            
            return;
        }
            
         if(departure_date >= return_date){
            alert("Please input valid dates!");
             
            document.getElementById("best_result").innerHTML = ""
            
            return;
        }
         
          document.getElementById("best_result").innerHTML = "Data entered succesfully."
        }
       
 }
            