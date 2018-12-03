
function search_word(str1,str2){

      var str1=str1.split(" ");

    
         count =0;
        
        for(var i=0;i<str1.length;i++){
            if(str1[i]==str2){

             count++
            }

            
            
            

              
       
        }

        return count;
}





 console.log(search_word('The quick brown fox', 'fox'));
//console.log(search_word('aa, bb, cc, dd, aa', 'aa'));