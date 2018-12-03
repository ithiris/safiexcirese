function ascii_to_hexa(str){
    var hexadecimal = '';
    for (var i = 0; i < str.length; i++) {
        hexadecimal += '' + str.charCodeAt(i).toString(16); 
    }
    return hexadecimal;
    };
    console.log(ascii_to_hexa('12'));
    console.log(ascii_to_hexa('100'));
    
    //2 - The number will show as a binary value
    //8 The number will show as an octal value
    //16 - The number will show as an hexadecimal value.