var Books =[
    {
        name:"absalutebegineer.js",
        author:"asraf",
        readingStatus:true
    },
    {
        name:"angular.js",
        author:"ithiris",
        readingStatus:true
    },
    {
        name:"react.js",
        author:"jamal",
        readingStatus:false

    }
]


 function checkByReadingStatus(array){

    for(var i=0;i<array.length;i++){
        props =array[i]
        if(array[i]['readingStatus']==true){
            console.log( "i have completed"+ " " +props["name"] + " "+ "by" +" " +props["author"]);
            
        }
        else{
            
            console.log("notcompleted" +  " "+props["name"] + " "+ "by" +" " +props["author"]);
        }
    }


 }


 checkByReadingStatus(Books)