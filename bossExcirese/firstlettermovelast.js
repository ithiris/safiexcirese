



function firstletter_movelast(array){
 var result=[];
 
var firstletter =array[i];
for(var i=1;i<array.length;i++){
	
result.push(array[i]);
}


  result.push(firstletter);

 

return result;
}

console.log(firstletter_movelast(["A","B","C"]));
