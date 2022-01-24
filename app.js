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

/***********************cw 14***************** */

const ar20 = [13, 17, 20, 23, 2, 40];
const arEvanOdd = ar20.filter((n, i, a) => a.lengthn % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
console.log(arEvanOdd);

////////////////////hw14//////////
//write myFiltr(array,callback) based on my forEach
//callback - function whith 3 possible parameters: element, index, array

//write myFiltr(array,callback, initialResult) based on my forEach
     
/**************************************************** */
////////////////////REDUCE///////////////////////// МОГУТ БЫТЬ 3 ПАРАМЕТРА КАК И FOReACH , MAP, FILTR

const result = ar20.reduce((res,el) => res + el, 0);
console.log(result);
const max = ar20.reduce((max, el) => el > max ? el : max, ar20[0]);
console.log(max);

// reduce with no 2 argument
const result1 = ar20.reduce((res,el) => res + el);
console.log(result1);
