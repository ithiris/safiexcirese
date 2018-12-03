
function formatted_string(str,str2,pad){

    var outputstr=""

    if(pad=="l"){

        outputstr=str.substr(0,1)
        
        outputstr= outputstr+str2
    }
    
    else{
        outputstr=str.slice(-5) ///slice negative value count from last index from given string
        
       outputstr=  str2+outputstr
    }

    return outputstr

}









console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));