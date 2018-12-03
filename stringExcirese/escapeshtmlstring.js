

// "use strict";

// {
//     let  i =10;

//     (function(){
      
//         console.log('lexical ', i);


//     })()
// }

// ///console.log(i)
// return;
function escape_HTML(str){
    var resultstr=""
    var lessthen="&lt"
    var greaterthen="&gt"
    var quot = "&quot";
    for(var i=0;i<str.length;i++){
var value=str.charAt(i)

        if(value=="<"){
            resultstr = resultstr+lessthen
            
            continue
        }
        if(value==">"){
            resultstr =resultstr+greaterthen
            continue
        }
        if(value=='"'){
            resultstr=resultstr+quot
            continue
        }

        else{
            resultstr=resultstr+value
        }


    }
   return resultstr;
}








console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
//Output : 
//"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"