
function calculate(input){
var total =0;
  
for(var i=0;i<input.length;i++){
var array =input[i];
    total+=array;
}

  var avg = total / input.length;
  
  return avg;

}


 console.log(calculate([1,3,5]));