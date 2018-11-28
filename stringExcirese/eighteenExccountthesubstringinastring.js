function count(str1, str2){

    var string = str1.toLowerCase()
    string = string.split(' ');
    
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if( string[i] === str2){
            count++;
            }
            //  else if(string[i] === str2){
            //     count++;
            //     }
                
    }
    return count;

}


console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));