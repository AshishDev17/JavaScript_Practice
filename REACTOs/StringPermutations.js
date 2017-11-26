function stringPermutations(str) {
    var results = [ ];
    var letters = str.split('');
    results.push([letters.shift()]) //add first letter (as an array) to results
    while (letters.length) {
        var curLetter = letters.shift();
        var tmpResults = [ ];
        results.forEach(function(curResult) {
            for (var i = 0; i<= curResult.length; i++) {
                var tmp = curResult.slice(); //make copy so we can modify it
                 //insert the letter at the current position
                tmp.splice(i,0,curLetter)
                tmpResults.push(tmp);
            }
        });
        results = tmpResults; //overwrite the previous results
    }
    results = results.map(function(letterArr) {
        return letterArr.join(''); //make string from letter array
    });
    return results.filter(function(el,index) {
        return results.indexOf(el) === index; //filter out non-unique words
    }).sort();
}

stringPermutations('apple');
// stringPermutations('apple').length; //should be 60 (5 * 4 * 3 * 2 * 1 / 2 - you divide because of the repeated p)
