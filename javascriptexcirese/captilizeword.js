 function capitalize_Words(str){
									
var splitStr = str.split(' ');
	console.log(splitStr);
for (var i = 0; i < splitStr.length; i++) {
   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);   
	console.log(splitStr[i]);  
   }
return splitStr.join(' '); 
}
console.log(capitalize_Words('js string exercises'));



