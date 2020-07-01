function cacheFuncion(){
    var cacheArr = [];
    return function(n){
     var index = n.toString();
     if(cacheArr[index] == undefined){
        if(n < 2)
        cacheArr[index] = n;
        else
        cacheArr[index] = fibonacci(n-1) + fibonacci(n-2);
     }
     return cacheArr[index];
    };
};

function fibonacci(num){
    if(num < 2)
     return num;
    else
     return fibonacci(num-1) + fibonacci(num-2);
};

CacheResult = cacheFuncion();
var input = prompt("Please enter the number to find the nth Fibonacci Number...");
result  = CacheResult(input);
console.log(result);
