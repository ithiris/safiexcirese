console.log(i);

var emptyObj ={};
var copyObj ={
    name:"ithiris",
    age: 34,
    hobbiees:["cricket","football"]
}
function objassign(move,copy){

   for(key in copyObj){
        emptyObj[key]=copyObj[key]
    }

 return emptyObj;

}


console.log(objassign(emptyObj,copyObj))
console.log(emptyObj)
emptyObj.age =40;

console.log(emptyObj)