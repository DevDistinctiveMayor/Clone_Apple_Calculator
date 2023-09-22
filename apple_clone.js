
        let operator = "";
      let  num1 = "";
      let num2= "" 
      
      
         
        
     
        function displaynum(x){
            let intval = document.getElementById("txt").value; 
            document.getElementById("txt").value = intval + x;

        }
        function operate(){
            // num1 = document.getElementById("txt").value;
            num1 = document.getElementById("txt").value;
            
            let ans
            if(operator =="+"){
               ans = parseFloat(num1) + parseFloat(num2);
            }else if(operator =="-"){
               ans = parseFloat(num2) - parseFloat(num1);
            } 
            else if(operator =="*"){
               ans = parseFloat(num1) * parseFloat(num2);
            }
            else if(operator =="/"){
               ans = parseFloat(num2) / p7rseFloat(num1);
            }
            else if(operator == "%" ){
                ans = parseInt(num2) % parseInt(num1);
                 console.log('error')
            }  
            
            document.getElementById("txt").value = ans;
    
        }

        function getOperator(y){
            operator = y;
            // num1 = document.getElementById("txt").value;
            num2 = document.getElementById("txt").value;


            document.getElementById("txt").value= "";
        }
        function del(){
            let del = document.getElementById("txt");
            del.value = del.value.substring(0, del.value.length -1)
        }
        
