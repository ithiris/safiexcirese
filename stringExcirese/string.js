
var str ="mohamedithirisshabi"

function capitlize(str,char){
    var res = " "; 
    for(var i=0;i<str.length;i++){
        
        if(str[i]==char){
           res+= str[i].toUpperCase();
            }
            else{

                res+=str[i];
            }

    }
            
    
      return res;  
     
}

 console.log(capitlize(str, "h"));