



function strmatch( str, char){
var count =0;
for(var i=0;i<str.length;i++){

 if (str[i] == char) {
           count ++;
       }
  

}

 return count;
}


 console.log(strmatch( "this is my first statement world", "t"));
