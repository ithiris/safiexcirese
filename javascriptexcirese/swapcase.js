function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match,char) {
            return char ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log(swapcase('AaBbc'));
