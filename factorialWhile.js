// let i = 1;
// let factorial = 1;
// while(i <= 5){
//     factorial = factorial * i;
//     console.log(factorial);
//     i++;
// }

// function factorial(n){
//     let i = 1;
//     let fact = 1;
//     while(i <= n){
//         fact = fact * i;
//         i++;
//     }
//     return fact
// }
// console.log(factorial(4));


// recomanded this way
function factorial(n){
    if(n == 0){
        return 1;
    }
    let i = n - 1;
    while(i >= 1){
        n = n * i;
        i--
    }
    return n;
}
console.log(factorial(6));