var obj1 ={
    name:"mohamed",
    age:30,
    gender:"male"
}
var obj2 ={
    name:"Umar",
    age:30,
    gender:"male"
}
var obj3 ={
    name:"safi",
    age:34,
    gender:"male"
}
var obj4 ={
    name:"rizwan",
    age:34,
    gender:"male"
}
var obj5 ={
    name:"yasmin",
    age:54,
    gender:"female"
}
var obj6 ={
    name:"fathima",
    age:24,
    gender:"female"
}
var obj7 ={
    name:"ayisha",
    age:24,
    gender:"female"
}

var Assistents =[obj1,obj2,obj3,obj4,obj5,obj6,obj7]

function checkBygender(array,group){
    
    var obj ={}
     
for(var i=0;i<array.length;i++){
  var value=array[i]
 var groupName = value[group]
  //console.log([groupName])
  if (obj[groupName]) {
    obj[groupName].push(value)
  }
       
  else{
    obj[groupName]=[value]
  }
  
}

  return obj;
 
  }


  console.log(checkBygender(Assistents,"gender"));

