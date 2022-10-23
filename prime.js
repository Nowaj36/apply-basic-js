function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return 'Not a prime number';
        }
    }
    return "This is a prime Number";
}
let result = isPrime(367);
console.log(result);

 


 