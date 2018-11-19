



function firstletter_movelast(array){
 var result=[];
 var res =""
for(var i=0;i<array.length;i++){
if(array[i]!==array[0]){

 result.push(array[i]);

 }

else{

 res=array[i];

}


}


 result.push(res)
 
 return result
}

console.log(firstletter_movelast(["a","b","c","d","c","e","f"]));
