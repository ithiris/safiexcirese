
function alphabetize_string(str){

var resultstr ='';
        splitedarray =str.split("");
        resultstr=splitedarray.sort()

       resultstr= resultstr.join('')

    return resultstr;
}



console.log(alphabetize_string('United States'));