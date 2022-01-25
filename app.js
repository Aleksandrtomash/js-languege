
//////// myforEach////////

const arr = [10, 20, 30, 40, 50];
let str = '';
 function myForEach (array, calBackFunc) {
 for(let i = 0; i < array.length; i++){
    calBackFunc(array[i], i, array);
}
 }
 myForEach(arr, ind  => str += '#' + ind);
    console.log(str);


////////myMap//////////////////////

const ar1 = [10, 20, 30, 40, 50];

 function myMap (array, calBackFunc1) {
 const arr1 = [];
     myForEach(array,(n, i, ar) => arr1.push(calBackFunc1(n, i, ar)));
       return arr1;
 }
 const ar2 = myMap(ar1, n  => n = n * 2);

    console.log(ar2);

    /////////myFiltr/////////

    const arFiltr = [-2, 5, 8, 3, 9, -12, 20, 0];

    const newArFiltr = arFiltr.filter(function(item, i, arr){

    });