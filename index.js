// This is the fizzBuzz games

var number = [];
count = 1;

function fizzBuzz(){

    if(count % 3 === 0 && count % 5 === 0){
        number.push("fizzBuzz")
    } else if(count % 3 === 0){
        number.push("fizz")
    } else if (count % 3 === 0){
        number.push("Buzz")
    } else{
        number.push(count)
    }
}