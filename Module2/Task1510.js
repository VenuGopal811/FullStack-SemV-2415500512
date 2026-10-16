//Q1 Celsius to Fahrenheit
function celsiusToFahrenheit(c){
// let c=0;
let f=(c*9/5)+32;
console.log(f);
}
//Q2 Profile Generator
function profileGenerator(){
let firstName="John";
let favNumber=7;
let isStudent=true;
console.log("My name is "+firstName+" and my favorite number is "+favNumber+". Am I a student? "+isStudent);
}
//Q3 Traffic Light Sim
function trafficLight(){
let lightColor="red";
if(lightColor==="red"){
    console.log("Stop");
}
else if(lightColor==="yellow"){
    console.log("Slow down");
}
else{
    console.log("Go");
}
}
//Q4 FizzBuzz
function fizzBuzz(){
let num=15;
if(num%3===0 && num%5===0){
    console.log("FizzBuzz");
}
else if(num%3===0){
    console.log("Fizz");
}
else if(num%5===0){
    console.log("Buzz");
}
else{
    console.log(num);
}
}

//Q5 Multiple of 5
function multiplesOfFive(){
    for(let i=1;i<=10;i++){
        console.log(i*5);
    }
}
//Q6 Factorial
function factorial(n){

let factorial=1;
while(n>0){
    factorial*=n;
    n--;
}

console.log(factorial);
}

celsiusToFahrenheit(0);
profileGenerator();
trafficLight();
fizzBuzz();
multiplesOfFive();
factorial(5);