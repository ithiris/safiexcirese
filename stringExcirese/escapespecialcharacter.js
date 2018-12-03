
function escape_html(str){
    var outputstr=""
    var amperson="&amp;"
    var greaterthen="&gt"
    

    for(var i=0;i<str.length;i++){

        if(str[i]=="&"){
          outputstr= outputstr +amperson
         
        }

       

        else{
            outputstr=outputstr+str[i]
        }
    }
    

   return outputstr;
    
}










console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));