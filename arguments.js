function num(num1, num2){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum =  sum + element;
    }
    return sum;
}
console.log(num(50, 20, 35, 55, 20));