
function stringToArray(str) {
  var withoutempty=""; 
  var storeBox=[];       
  for(var i=0; i<str.length;i++) {
       if(str[i] != " ") {
        withoutempty+=str[i]
        }
        else{
          storeBox.push(withoutempty)
        withoutempty="";
        } 
         
      }
     return storeBox; 
  }
  console.log(stringToArray("Robin Singh "));
