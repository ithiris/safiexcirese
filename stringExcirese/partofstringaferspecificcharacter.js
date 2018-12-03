
function subStrAfterChars(str,char,pos){
var resultStr="";
    
    if(pos=='a'){
    resultStr= str.substr(0,str.indexOf(char));
    }     

    if(pos=='b'){
    resultStr=str.substr(str.indexOf(char)+1);
             
    }     
         

        
    return resultStr;

    }
    



console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a')); 
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));