
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
        myForEach(array, (n,i,a) => callbackFunc (n, i, a) ? res.push(n) : 0);
        return res
    }
    const ar30 = [ 1,2,3,4,5,6,7,8,9,10] 
  const resFiltr = myFiltr(ar30, (n, i, a) => a.length %2 == 0 ? n%2 == 0 : n%2 == 1);
  console.log(resFiltr);


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