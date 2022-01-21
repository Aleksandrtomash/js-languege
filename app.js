

const arr = [10, 20, 30, 40, 50];
function myForEach(el, ind, arr){

 arr[ind] = el + '#';
 console.log(arr)
}
arr.forEach(myForEach);