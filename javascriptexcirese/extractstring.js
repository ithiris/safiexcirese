function extract_string (str,length){

 if ((str.constructor === String) && (length>0)) {
        return str.slice(0, length);
    }


};
console.log(extract_string("Robin Singh",4));


//the constructor property returns the function that created the string's prototype//
