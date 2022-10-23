function fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    // n = (n- 1) + (n - 2)
    else{
        // calculate array n-th element
        let fibo = fibonacci(n - 1);
        let nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo
    }
}
console.log(fibonacci(12));