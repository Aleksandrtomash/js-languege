const point ={
        x: 3,
        y: 4
};
function displaypointInSpase(z, t) {
        //"this" - reference to any object having properties "x" and "y"
        console.log(`x: ${this.x}, y: ${this.y} , z:  ${z}, t: ${t} `);
}
point.method = displaypointInSpase;
point.method(10, 20);
// displaypointInSpase.call(point, 10, 20);
// displaypointInSpase.myBind(point, 10, 20)();
// displaypointInSpase.apply(point, [ 10, 20] );

Function.prototype.myBind = function(thisObj, ...args){
        // "This - reference to any functional object
        // thisObject - reference to any object
        
        return (...params) => {
                thisObj.method123456 = this;
                const res = thisObj.method123456(...args.concat(params));
                delete thisObj.method123456;
                return res;
        }
}
/*************************************   1   ********************* */

// arguments are passed at function call
const funDisplay = displaypointInSpase.myBind(point);
funDisplay(10,20); 

/**************************************  2  ********************** */

// all arguments are bound bythe method "myBind"
const funDisplayArguments = displaypointInSpase.myBind(point, 10 , 20 );
funDisplayArguments();

/***************************************  3  ********************* */

// mixed - part of arguments are bount by the method "myBind" and other part of argument are passed at function call
const funDisplayMixed = displaypointInSpase.myBind(point, 10);
funDisplayMixed(20);

function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
}




function concatenation(prefix) {
        prefix = 'App - '
        const concatMessage = 'Test status: Done'
        let res = prefix.concat(concatMessage)
        console.log(res);
        
}
console.log(`Task #1`)
console.log(`Random number: ${getRandomNumber(1,200)}`);
console.log(`Random number: ${getRandomNumber(200,1)}`);

console.log(`Task #2`)
concatenation()