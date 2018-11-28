var str="Robin Singh";

function abbrev_words(input) {
    var result =""
    var splitToArray =""
  splitToArray=input.split(" ")
  
  result = splitToArray[0] + " " +splitToArray[1][0] +"."
 
  return result;
}
 console.log(abbrev_words(str));
