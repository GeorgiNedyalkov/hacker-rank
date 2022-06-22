function matchingStrings(strings, queries) {

    let counterQueries = [];
    let result = [];

    for (let query of queries) {
        let current = {
            name: query,
            count: 0
        }
        counterQueries.push(current);
    }


    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < queries.length; j++) {
            
            if (strings[i] == queries[j]) {
                counterQueries[j].count++;
            }
        }
    }

    for (let query of counterQueries) {
        result.push(query.count);
    }

    return result;
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));