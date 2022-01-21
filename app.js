
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort(function(a,b){
    if(a % 2 !=0 && b % 2 != 0) return b - a;
    if(a % 2 ==0 && b % 2 == 0) return a - b;
    if(a % 2 !=0 && b % 2 == 0) return 1;
    if(a % 2 ==0 && b % 2 != 0) return -1;
})
console.log(arHw);

////////////////////////////////////// Task 2
function matrixTransp(matrix) {
    const newMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        newMatrix.push([]);
            for (let j = 0; j < matrix.length; j++) {
                newMatrix[i].push(matrix[j][i]);
            }
    }
    return newMatrix;
}
displayMatrix(matrixTransp([[1,2], [3,4], [5,6]]));


function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
            let row = '';
            for (let j = 0; j < matrix[i].length; j++) {
                    row = row + matrix[i][j] + '   '
            }
            console.log(row);
    }  
}