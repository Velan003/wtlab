function fun(){
       var usname=document.f1.unam.value;
       var usdob=document.f1.udob.value;
       var usphone=document.f1.unum.value;
       var usage=document.f1.uage.value;
       var aadhar=document.f1.quantity.value;
       var email=document.f1.email.value;
       var errors=[]
              if(usname=="")
                     errors[errors.length]= "Name must be filled out";
              if(usphone.length>10||usphone.length<10)
                     errors[errors.length]= "Phone number must be of length 10";
              if(usage=="")
                     errors[errors.length]= "Age must be filled out";
              if(aadhar=="")
                     errors[errors.length]= "Aadhar Number must be filled out";       
              if(email=="")
                     errors[errors.length]= "Email must be filled out";
              if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
                     errors[errors.length]="Enter the valid Email";
                     
                                  
              if(errors.length>0){
              reportErrors(errors); }
              else{
                     alert("Registration successfull!!!");
              }
       
              function reportErrors(errors){
                     var msg = "Please Enter Valid Data!\n";
                     for (var i = 0; i<errors.length; i++) {
                       var numError = i + 1;
                       msg += "\n" + numError + ". " + errors[i];
                       }
                       alert(msg);
                   }
               function success() 
               {
                     if(document.getElementById("unam").value==="") {
                            document.getElementById('uage').disabled = true;
                        } else {
                            document.getElementById('uage').disabled = false;
                        }
                    }
               }   
              