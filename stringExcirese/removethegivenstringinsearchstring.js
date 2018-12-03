function remove_first_occurrence(str,str2){
    var str=str.split(" ")
     resstr ="";
     for(var i=0;i<str.length;i++){
         if(str[i]!==str2){
            resstr=resstr+ " "+str[i]

           

         }
     }

     return resstr;
    }



console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//output should be:The quick brown fox jumps over lazy dog