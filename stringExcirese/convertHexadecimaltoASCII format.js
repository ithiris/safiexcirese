
function hex_to_ascii(str){
    var ascii = '';
    for (var i = 0; i < str.length; i++) {
        ascii= '' +str.toString(i);
        ascii=ascii.charCodeAt(i)
       }

    return ascii;
    };

console.log(hex_to_ascii('3132')); 
console.log(hex_to_ascii('313030'));