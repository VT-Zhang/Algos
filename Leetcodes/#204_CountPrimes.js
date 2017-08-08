// Description:
// Count the number of prime numbers less than a non-negative number, n.

var countPrimes = function(n) {
    var counter = 0;
    for(var i = 2; i<n; i++){
        if(n%i != 0){
            counter++;
        }
    }
    console.log(counter);
    return counter;
};

countPrimes(10);

