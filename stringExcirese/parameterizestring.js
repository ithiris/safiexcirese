function string_parameterize(str1) {
    string=str1.trim().toLowerCase();
	return string.replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));


//String.trim() removes whitespace from both sides of a string//
 //toLowerCase() it is convert into lowercase.//
//replace all matches, use a regular expression with a /g flag (global match):
