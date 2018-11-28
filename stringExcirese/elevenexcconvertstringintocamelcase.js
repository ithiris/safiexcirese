


function camelize(str){

outputStr=str.split(' ');

for(var i=0;i<outputStr.length;i++){
    
    outputStr[i] =outputStr[i].charAt(0).toUpperCase()+outputStr[i].slice(1)
 
    
}
 return outputStr.join(''); // the join () method joins all elements array into string.

}

console.log(camelize("javaScript Exercises")); 
console.log(camelize("javaScript exercises")); 
console.log(camelize("javaScriptExercises"));