function str_blankOrNot(input) {
    if (input.length === 0){ // The length property returns the length of a string (number of characters).
                            //The length of an empty string is 0.
        return true;
    }
    else {
        return false;
        }
      }
console.log(str_blankOrNot(''));
//console.log(str_blankOrNot('abc'));

