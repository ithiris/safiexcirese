function stringToArray(str) {
    var withoutempty=""; 
    var arrayBox=[];       
    for(var i=0; i<str.length;i++) {
         if(str[i] != " ") {
            withoutempty=withoutempty+str[i]
            
          }
          else{
            arrayBox.push(withoutempty)
            withoutempty="";
          } 
        }
        return arrayBox;
    }
     console.log(stringToArray("Robin Singh "));