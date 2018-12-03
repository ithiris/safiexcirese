var customer ={
    name:"ithiris",
    age:30,
    salary:15000,
    dept:"cse"
}
prop =["name","age"];
newcustomer={};

 function copyprop(target,src,array){
            
    for(var i=0;i<array.length;i++){
         value=array[i]
           target[value]=src[value]
        
    }
    

return target;
 }

console.log(copyprop({},customer,prop));

