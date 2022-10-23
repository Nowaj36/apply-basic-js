// 10! = 1*2*3*4*5*6*7*8*9*10
// 5! = 1*2*3*4*5
// n! = (n-1)!*n
 
// let factorial = 1;
// for(let i = 1; i <= 10; i++){
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

// function factorial(n){
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(factorial(15));

function factorial(n) {
    if(n == 0){
        return 1
    }
    for(let i = n - 1; i >= 1; i--){
        n = n * i;
    }
    return n;
}
console.log(factorial(5))
