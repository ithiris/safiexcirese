console.log("printed");
const excutableObj = require('child_process')
 cp=process.argv[2];
 mv=process.argv[3];
commend = `~/safiexcirese/batch.sh ${cp} ${mv}`
const batchScriptFile =excutableObj.exec(commend);

batchScriptFile.stdout.on('data', function(data){
    console.log(data); 
    
});

batchScriptFile.stderr.on('data', function(data){
    console.log(data);
     
});
