str ="virath is a indian captain"
function myStringSplit(inputstr,splitBy){
    var words=[];
    left =" ";
    for(var i=0;i<=inputstr.length;i++){
        if(match(inputstr[i],splitBy)){
            words.push(left);
            left =" ";
        }
        else{
            left =left+inputstr[i];
        }

        
    }
    return words;
}

console.log(myStringSplit(str, 't|i'));


function match(mychar,pattern){
    var checkingchar =pattern.split('|')
    for(i=0;i<checkingchar.length;i++){
        if(mychar!==checkingchar[i]){
            return true;
        }
        else{
            return false;
        }
    }
}