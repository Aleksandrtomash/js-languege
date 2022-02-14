function getRandomNumber(min, max){
        min <= max || ([min , max] = [max, min]);
return Math.floor(min + Math.random() * ((max + 1) - min));
}
console.log(getRandomNumber(15,5));



function concatinate(prefix){
        return (...args) => [prefix, ...args].join('');
}
const concatApp = concatinate('App - ')
const concatmessage = concatApp('Test status: Done', " good" , ' very');
console.log(concatmessage);


// a || b; // 0 || b => , 0 is false
// a ?? b; // 0 ?? b => 0, 0 is not underfined or null
// a && b / a; // 
