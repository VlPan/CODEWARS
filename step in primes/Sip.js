function isPrime(n) {
    var r = Math.sqrt(n) | 0;
    for (var i = 2; i <= r && n % i; i++);
    return i > r;
}

function step(g, m, n) {
    for (var i = m; i <= n - g; i++) {
        if (isPrime(i) && isPrime(i + g)) {
            return [i, i + g];
        };
    }

    return null;
}