function humanize(number) {
    
    
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        
        default: return number + "th";
    }
    
    
}
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));