
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


    function myFiltr(array, callbackFunc){
        const res = [];

    }
    const arFiltr = [-2, 5, 8, 3, 9, -12, 20, 0];

    const newArFiltr = arFiltr.filter(function(item, i, arr){ 

    });

/////////////myReduce////////////////

    function myReduce(array,callbackReduce, initial){
        if(initial == undefined){
            initial = array[0];
            array = array.slice(1);
        }
        let res = initial;
        function forEahCallback(n,i,a){
            res = callbackReduce(res,n,i,a);
        }
        myForEach(array,(n, i, a) => res = callbackReduce(res,n,i,a));
        return res;
    }
    let res = myReduce(ar1,(res,cur) => res + cur, 0);
    console.log(res);