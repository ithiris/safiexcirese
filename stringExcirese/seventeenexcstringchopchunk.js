

function string_chop(str, size){
    
    var index = 0;
    var strLength = str.length;
    var tempArray = [];
    var arr=[];
    

    for (index = 0; index < strLength; index += size) {
         
        if ( !size ) {
        arr.push(str)
        return arr;
        }
        stringchop = str.slice(index, index+size);
        
        
        tempArray.push(stringchop);
        
    }

    
    return tempArray;
}

console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',4));