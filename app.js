
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