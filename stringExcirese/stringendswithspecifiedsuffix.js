function string_endsWith(str1, str2){
    var res = true;
    if(str2 === ''){
        return false;
    } 
    if(str1.endsWith(str2)) {
    return res;
    }
    };
    console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
    console.log(string_endsWith('JS PHP PYTHON',''));
    
    