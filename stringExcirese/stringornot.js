function StringOrNot(input) {
    
    if ( typeof input != "string") {      // condition check whether it is  string or not
       
        return true;
 }
  else {
        return false;
    }
    
}
console.log(StringOrNot("w3resource"));                 
 console.log(StringOrNot([1,2,4,0]));  