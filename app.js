///////////////////ForEach////////////////////

const ar = [-10, 50, -12, 80, 40];
ar.push(70);
// str - "-10#50#-12#80#40#70#"

// let str = '';
// ar.forEach(function(n){                                     ******1*******
//     str += n + '#';
// })
//str = str.substring(0, str.length - 1);

// str - "-10#50#-12#80#40#70"
// const lastSharpeIndex = str.lastIndexOf('#')
// const str1 = str.substring(0, lastSharpeIndex);
// const str2 = str.substring(lastSharpeIndex + 1);
// str = str1 + str2;

/*******************solution based on forEach from second number *********2**********/ 
// const ar1 = ar.slice(1);
// let str = '' + ar[0];
// ar1.forEach(n => str += '#' + n);
// console.log(str);

/***************printing out number of element , element , length********** */
// 1 of 5 = -10
ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));
/****************HW****Task 1******** */
// write function myForEach(array,calback - function)
// array - being iterated array
// calback-function   -  function that is will be called for each element of array
// calback-function should take 3 arguments : current element, current index,  being iterated array
//example  ar1.forEach(n => str += '#' + n);

// myForEach(array, n => str += '#' + n);

/******************************"MAP"******************** */
// USE CASE OF APPLYING METHOD MAP : YOU WHANT TO CREATE NEW ARRAY WITH ELEMENTS THAT ARE RECIVED AS RESULT OF SOM
// EXAMPLE : 
const ar2 = ar.map(n => n * 2);
console.log(ar2)

//const ar3 = ar.map(n => `<li>${n}</li>`);
const ar3 = ar.map((n ,i, a ) => `<li>${i + 1} of ${a.length} - ${n}</li>`);
console.log(ar3)


// task 2
// myMap (kak forEach), 



 let arr = ['20', 22, ' year whan korona dai'];
 arr.forEach((function(e, i , ar) => console.log( `${e} + ${i} + ${arr}`));
 
    
    
