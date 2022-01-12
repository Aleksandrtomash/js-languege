console.log("Hello World");
//Output for var: 3 3 3
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// }
// for (var i = 0; i < 3; i++) {
       
//             console.log(i);
        
//     }
//     console.log(i);
const fun = function(a, b) {
        return a + b;
}
let a = 5;
// console.log(a ** 2);
 console.log(fun(10, 20));
//console.log(a(10, 20)); error
//console.log(fun ** 2); NaN
console.log("12" + 12, '"12" + 12') ; //JS defines that operator + exists for strings, that's why number 12 will be converted to string
console.log("12" - 12); //JS defines that operator - doesn't exist for strings, that's why string "12" will be converted to number
console.log("ab" - 12); //....JS will try covert "ab" to number; as a result of this there will be value NaN. 
//sometimes there is a need to explicit conversion from string to a number
//"+" unary is the simplest way for the explicit conversion of a string to a number
console.log(`+"12" + 12 = ${+"12" + 12}`)
// Hw #definition
//1. using only two letters "a", "s" print out word ananas case insensitive AnaNAS, 
//2. write function calculate that can perform any arithmetic operation on two numbers (*, /, +, -);
//3. write any example for running the following expression fun(5)(10, 3)
console.log(`a`+ fun**2 +`as`);

// let = a;
// let b;
// let action;
let res = function calculator(a, b , action)
{
if (action == 1)  return a + b;
else if (action == 2)  return a - b;
else if (action == 3) return a * b;
else if (action == 4)
{
	if (b != 0) return a / b;
	else
		console.log("ERROR: divide by zero");
}
else
	console.log("ERROR: Wrong action");
    
    }
    console.log(res(10,0,4));
  

function sum(num){
   return function(c,d){
   return num + c + d;
    }
   }

console.log(sum(5)(10,3));