/******************ARRAYS************** */

const ar = [2, 100, 9, 80];
// ar.sort(function(a, b){   //// если не передать ничего . жс выводит как строки
//         return a - b; 
// });     
ar.sort((a, b) => a - b);              //     то же самое, просто лругой синтаксис
//ar.sort((a, b) => {return a- b});

console.log(`ar is ${ar.toString()}`);
/**************HomeWork #12 */
const arHw = [13, 28, 4 , 15, 25, -10, 40, 17, 27];
// expected [-10,4,28,40  ,  27,25,17,15,13]
// comporator returns < 0 if fierst less than second, > 0 if first greater than second, == 0 if first equals second

// adding elements/s at and an array

ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25)
console.log(ar);
                        
/*******НАЧАЛО******** */

const ar1 = [-8, 30, -57];
//ar.push(ar1); there will be added array but not separated numbers
// if you want to add separated numbers you should apply a spread operator
ar.push(...ar1);
console.log(ar);

/***********КОНЕЦ********** */

// for adding elements at beginning of  an array => "unshift"
// everysing has been said "push" will  work "unshift"
const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);

/**********СЕРЕДИНА******** */

// METHOD "SPLICE" for inserting or replacing any elements in any plase

// first argument - index for inserting or replasing.
// second arg - number of the deleted elements (if 0 than splice will be applied)
// third - designares 

ar.splice(2, 0, 1, 2);
console.log(ar);

// REMOOVING/DELETING

let el = ar.pop();
console.log(ar);

el = ar.shift();  // remoovs first element and return it
console.log(ar);

el = ar.slice(3,5); // remoove 5 elements beginning from the  one at index 3 
console.log(ar);

// includes, indexOf

// two dimensional arrays

const matrix1 = [[1, 2, 3,], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
const matrix2 = [[100, 20], [50, -5], [34, 28]];

function displayMatrix(matrix){
    let row = " ";
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i.length]; j++){
            row = row + matrix[i][j] + "  ";
            
        }
        console.log(row);
    }
}
//displayMatrix( matrix1);
displayMatrix( matrix1);