// function isLeapYear(year){
//     if(year % 4 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const thisYear = isLeapYear(2000);
// console.log(thisYear);

 function thisLeapYear(year){
    if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 ==0)){
        return true;
    }
    else{
        return false;
    }
 }
 console.log(thisLeapYear(2000));
 console.log(thisLeapYear(1700));
