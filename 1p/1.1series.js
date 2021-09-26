function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

fibonacci(20);

function poweroftwo(n) {
    if (n % 2 == 0) {
        console.log("Is power of two");
    } else {
        console.log("is'nt power of two");
    }
}

poweroftwo(2);