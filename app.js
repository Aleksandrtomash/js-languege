// const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', sreet: 'Sokolov'}}; //const person1 ссылка на объект, сравниваются только адреса
// const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', sreet: 'Sokolov'}};

// const person3 = person1;
// console.log(`person1 == person2 is ${person1 == person2}`);
// console.log(`"123" == 123 is ${'123' == 123}`);

// // === проверяет не только содержимое,ю но и типы, сравнивает адреса

// console.log(`"123" === 123 is ${'123' === 123}`);
// console.log(`person1 == person3 is ${person1 == person3}`);

// console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) // из объекта получаем строку
//     === JSON.stringify(person2)}`);  

//     console.log(JSON.stringify(person1));
//     console.log(person1.toString());

//     console.log(`name ofperson1 is ${person1.name}`); // добираемся к элемнту объкта
//     console.log(`person1 lives in city ${person1.address.city}`); // 2 to4ki

//     Object.keys(person1).forEach(k => console.log(k));// получаеи массив ключей и можем работать с методами массивов, работа с ключами
//     Object.values(person1).forEach(v => console.log(v)); // работа со значениями
//     Object.entries(person1).forEach(e => console.log(e)); //array of arrays - [key, value]

//     function createAddress(city, street){

//       //  {city: city, street: street} <==> {city, street} oto davar
//         return {city: city, street: street}
//     }
//     function createPerson(id, name, address){
// //return {id, name, address};
    
//     const persons = [
//         createPerson(123, "Vasya", createAddress ("Rehovot", "parshani")),
//         createPerson(124, "Olya", createAddress ("Rehovot", "Plaut")),
//         createPerson(125, "Tolya", createAddress ("Tel - aviv ", "Disengof")),
//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
//     ]
//     }
// //     let personRehovot = persons.filter(obj => obj.city == "Rehovot");  //.sort((a,b) => (b.city - a.city));
// // console.log(personRehovot);

//     ///// 1 /// исп методы масивов, что бы найти всех кто живет в реховоте
//     ///// 2 ///  перон кто не живет в реховоте , перенести на первое место
//     function getPersonsCity(persons1, city){
// return persons1.filter(p => p.address.city === city);
//     }
//     console.log(getPersonsCity(persons1,'Rehovot'));

// function PersonsNoCity(persons1, city){
//     const personRes = getPersonsCity(persons1, city);
//     personRes.unshift(...persons1.filter(p => p.address.city != city));
//     return personRes;
// }
//  console.log(PersonsNoCity(persons1,'Rehovot'));

//     const persons1 = [
//         createPerson(123, "Vasya", createAddress ("Rehovot", "parshani")),
//         createPerson(124, "Olya", createAddress ("Rehovot", "Plaut")),
//         createPerson(125, "Tolya", createAddress ("Tel - aviv ", "Disengof")),
//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
//     ]
// /**input  ["1mn", "d", "d", "lmn", "a", "lmn", "a", "bc"] */

// /// output lmn -> 3
//  //         a - > a
//  //         d -> 2
//  //         bc -> 1

 function displayOccurrences(array){
     // creating Object with key -  unique element of arrray (string is a element of array)
     //    value - occurrences count
     /// obj = {a:123, d: "abc"}; const a = "d" ; obj.a === 123, and obj[a] === "abc"
     //  obj.c = 10 -> {a: 123, d: "abc", c:10}
const res = {};
for(let i = 0; i < array.length; i++){
    if(res[array[i]] === undefined){
       res[array[i]] = 1;
    }else{
        res[array[i]] = res[array[i]] + 1;
    }
}
//console.log(res)
Object.entries(res).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) : res;
     }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}
 const  ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
 
 displayOccurrences(ar);

 /***************************************HW15 task1*********** */

 // refuctoring 92 - 99  -> function
 // to use method reduce

 /*****************************task 2*************** */

 // write useful function countBy(array, callbackFun) that returns object with keys as grouping
 // and values as the occurence counts
 
 //  where array - any array,  callbackFun - func returning grouping criteria
// example1:

// const arr = [6.4, 7.3, 6.5, 6.9];
// const statistics = countBy(arr, (element) => Math.floor(element))
//result: statistics -> {"6" : 3, "7" : 1}
 
// example2:

// const arr = ['abcd', 'lmnr' , 'ab' , 'dddd'];
// const statistics = countBy(arr, element => element.length)
//result: statistics -> {"4" : 3, "2" : 1}

// example2:

// const arr = [{age: 25, id: 123, name: 'vasya'},{age: 25, id: 123, name: 'vasya'},{age: 50, id: 123, name: 'vasya'},{age: 70, id: 123, name: 'vasya'}];
// const statistics = countBy(arr, element => element.age)
//result: statistics -> {"25" : 2, "50" : 1, "70" : 1}