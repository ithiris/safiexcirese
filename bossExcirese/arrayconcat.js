var array =[1,2,3,4,5]
var arraytwo =[8,9,10,11];

function arrayconcat(inputarray,inputarraytwo){
outputarray=[];
for(var i=0;i<inputarray.length;i++){
        outputarray.push(inputarray[i])
        }


for(var j=0;j<inputarraytwo.length;j++){
    
        outputarray.push(inputarraytwo[j]);
    }

return outputarray;
}

 console.log(arrayconcat(array,arraytwo));