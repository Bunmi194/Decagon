//Implement a function fizzBuzz(input) that takes a number and retuns: "fizz": if the number is divisible by 3 "buzz": if the number is divisible by 5 "fizzbuzz": if the number is both divisible by 3 and 5 number: if it is not divisible by 3 or 5

function fizzBuzz(input){
    var output = "";
    if (input % 3 == 0 && (input % 5 == 0)) {
        output = "fizzBuzz";
    }else if(input % 5 == 0){
        output = "buzz";
    }else if(input % 3 == 0 ){
        output = "fizz";
    }else if(isNaN(input) == false){
        output = input;
    }else{
        output = "Please enter a number";
    }
    return output;  
}
module.exports = fizzBuzz
