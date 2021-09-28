//PRIMERO

function sieve(n) {
    var array = [];
    var tmpArray = [];
    var upperLimit = Math.sqrt(n);

    for (var i = 2; i < n; i++) {
        array.push(i);
    }

    for (var i = array[0]; i < upperLimit; i = array[0]) {
        removeMultiples: for (var j = i, k = i; j < n; j += i) {
            var index = array.indexOf(j);
            if (index == -1)
                continue removeMultiples;
            else
                array.splice(index, 1);
        }
        tmpArray.push(k);
    }
    array.unshift(tmpArray);
    return array;
}

sieve(100);

//SEGUNDO

function random(n) {
    return Math.floor(Math.random() * (n - 1)) + 1;
}

random(100);