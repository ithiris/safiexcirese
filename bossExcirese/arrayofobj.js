
var emp1 ={
    name:"ithiris",
    age:34,
    salary:15000,
    dept:"cse"
}
var emp2 ={
    name:"umar",
    age:20,
    salary:15000,
    dept:"eee"
}
var emp3 ={
    name:"gobi",
    age:24,
    salary:15000,
    dept:"cse"
}
var emp4 ={
    name:"mani",
    age:28,
    salary:15000,
    dept:"cse"
}
var emp5 ={
    name:"ibrahim",
    age:32,
    salary:15000,
    dept:"cse"
}
var emp6 ={
    name:"ameen",
    age:35,
    salary:15000,
    dept:"cse"
}
var emp7 ={
    name:"ram",
    age:18,
    salary:15000,
    dept:"cse"
}
var emp8 ={
    name:"jamal",
    age:20,
    salary:15000,
    dept:"cse"
}
var emp9 ={
    name:"sam",
    age:19,
    salary:15000,
    dept:"cse"
}
var emp10 ={
    name:"selva",
    age:18,
    salary:15000,
    dept:"cse"
}

employees =[
    emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8,emp9,emp10
];

function employeeListByAge(employeesObj,x,y){
    var above =[];
   var below =[];
    var result ={};
    for(var i=0;i<employeesObj.length;i++){
        if(employeesObj[i][x]>y){
            above.push(employeesObj[i])
            }
            else{
            below.push(employeesObj[i])
        }
    }
    result["increment"]=above;
    result["decrement"]=below;
    return result;
    }
  
console.log(employeeListByAge(employees,"age",30));
