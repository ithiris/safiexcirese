
function repeat_string(char,count){

    resultstr =""

    for(var i=0;i<count;i++){
            
        resultstr =resultstr+char
            
            }

         if(!count){
            console.log("error in count")
         }   
    

    return resultstr
}





console.log(repeat_string('a', 4)); 
console.log(repeat_string('a'));