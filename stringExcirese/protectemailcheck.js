
function protect_email(input){
 var splited=input.split("@");
 var firstIndex = splited[0];
 
 var SecondIndex = splited[1];
 var startToEnd=firstIndex.slice(0,5);
 var pattern= "...@";
 var hideWords=startToEnd + pattern + SecondIndex;
 
 return hideWords;
}
console.log(protect_email("robin_singh@example.com"));   