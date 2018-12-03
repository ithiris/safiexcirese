
function sentenceCase(str){

        str =str.toLowerCase();
        str =str.split(" ")
        console.log(str)
    var resultstr =""

    for(var i=0;i<str.length;i++){
           
        str[i]=str.charAt(0).toUpperCase() +str.slice(1)

  
}

    return str.join(' ')
}









console.log(sentenceCase('PHP exercises. python exercises.')); 

//"Php Exercises. Python Exercises."