const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', sreet: 'Sokolov'}}; //const person1 ссылка на объект, сравниваются только адреса
const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', sreet: 'Sokolov'}};

const person3 = person1;
console.log(`person1 == person2 is ${person1 == person2}`);
console.log(`"123" == 123 is ${'123' == 123}`);

// === проверяет не только содержимое,ю но и типы, сравнивает адреса

console.log(`"123" === 123 is ${'123' === 123}`);
console.log(`person1 == person3 is ${person1 == person3}`);

console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) // из объекта получаем строку
    === JSON.stringify(person2)}`);  

    console.log(JSON.stringify(person1));
    console.log(person1.toString());

    console.log(`name ofperson1 is ${person1.name}`); // добираемся к элемнту объкта
    console.log(`person1 lives in city ${person1.address.city}`); // 2 to4ki

    Object.keys(person1).forEach(k => console.log(k));// получаеи массив ключей и можем работать с методами массивов, работа с ключами
    Object.values(person1).forEach(v => console.log(v)); // работа со значениями
    Object.entries(person1).forEach(e => console.log(e)); //array of arrays - [key, value]

    function createAddress(city, street){

      //  {city: city, street: street} <==> {city, street} oto davar
        return {city: city, street: street}
    }
    function createPerson(id, name, address){
return {id, name, address};
    }
    const persons = [
        createPerson(123, "Vasya", createAddress ("Rehovot", "parshani")),
        createPerson(124, "Olya", createAddress ("Rehovot", "Plaut")),
        createPerson(125, "Tolya", createAddress ("Tel - aviv ", "Disengof"))
    ]

    ///// 1 /// исп методы масивов, что бы найти всех кто живет в реховоте
    ///// 2 ///  перон кто не живет в реховоте , перенести на первое место

