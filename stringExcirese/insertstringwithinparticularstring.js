//Write a JavaScript function to insert a string within 
//a string at a particular position (default is 1).

function insert(string,insertstring,pos){

 if(typeof pos=="undefined"){
  pos =0;
 }
 if(typeof insertstring=="undefined"){
     insertstring =""
 }
 

return string.slice(0, pos) + insertstring + string.slice(pos);
 
}







console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));