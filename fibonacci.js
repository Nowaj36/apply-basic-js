// n = (n - 1) + (n - 2)
// 12 = (12 - 1) + (12 - 2)

// let fibo = [0, 1];
// for(let i = 2; i <= 12; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i-2];
// }
// console.log(fibo);

// function fibonacci(num) {
//     let fibo = [0, 1]
//     for(let n = 2; n <= num; n++) {
//         fibo[n] = fibo[n - 1] + fibo[n - 2];
//     }
//     return fibo;
// }
// console.log(fibonacci(12));

function fibonacci(n) {
    let fibo= [0 , 1];
    for(let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fibonacci(20));