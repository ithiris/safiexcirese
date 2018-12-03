function uncamelize(str,replace) {

    splitarray =str.split(/(?=[A-Z])/);
      var output;
     output =splitarray[0];
      if(!replace){
        replace=" "
      }
    for(var i=1;i<splitarray.length;i++){
                var letter=splitarray[i]
           Lowercasewords = letter.toLowerCase();
           output= output + replace +Lowercasewords   

    }
   

    return output;
   }
  
    
    
  
  console.log(uncamelize('helloWorld'));
 console.log(uncamelize('helloWorld','-'));
  console.log(uncamelize('helloWorld','_'));