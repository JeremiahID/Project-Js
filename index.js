// This is the fizzBuzz games

// var number = [];
// count = 1;

//  function fizzBuzz(){
//      while(count <= 100){
//          if(count % 3 === 0 && count % 5 === 0){
//              number.push("fizzBuzz")
//          } else if(count % 3 === 0){
//              number.push("fizz")
//          } else if (count % 5 === 0){
//             number.push("Buzz")
//          } else{
//              number.push(count)
//          }
//          count++;

//     }
//     console.log(number)
// }

// This is a program to calculate for leap year

// const leapYear = prompt("Enter the year");

// function calYear(){
//     if (leapYear % 4 === 0){
//         alert("This Year is a leap year")

//     } else if (leapYear % 4 === 0 && leapYear % 100 === 0) {
//         alert("this is not a leap year")

//     } else if (leapYear % 4 === 0 && leapYear % 100 === 0 && leapYear % 4000 === 0){
//         alert("This Year is a leap year")
//     } else {
//         alert("This is not a leap Year")
//     }

// }

// calYear()


// This is a program for the fibonacci logic


function fibonacciGenerator (n){
    var output = [];

    if (n === 1){

        output = [0];

    } else if( n === 2){

        output = [0,1]

    } else {
        output = [0,1]

        for(counter =2; counter < n; counter++){
            output.push(output[output.length - 2] + output[output.length - 1])
        }
    }

    return output

}


output = fibonacciGenerator(5)

console.log(output)
