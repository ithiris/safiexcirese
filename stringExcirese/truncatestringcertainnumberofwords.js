function truncate(str,n){
    var res=""
    
   var splited=str.split(" ");

       res =splited.slice(0,n)
        
        res=res.join(' ')
       
        return res;
}










console.log(truncate('The quick brown fox jumps over the lazy dog', 4));