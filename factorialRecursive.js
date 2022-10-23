// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 5!*6
// 6! = (6-1)!*6
// n! = (n-1)!*n

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(4));
console.log(factorial(0));