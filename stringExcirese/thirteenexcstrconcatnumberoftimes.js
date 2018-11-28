var str ="ha";

function concate(string,number){
    var outputstr =""
    for(var i=0;i<number;i++){
        console.log( i, "befor append  " + outputstr);
        outputstr= outputstr + " "+string;
        console.log( i, "after append  " + outputstr);
            
        }
        
        
        return outputstr; 
    }

 

    

//console.log(concate(str,2));
 console.log(concate(str,4));
// console.log(concate(str,5));
// console.log(concate(str,6));