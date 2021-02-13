console.log('hello');
// alert('yo');


// how to comment


var b = 'smoothie';
console.log(b)

var someNumber = 45;
console.log(someNumber);



//var age = prompt('What is your age?');

//document.getElementById('someText').innerHTML = age;

var num1 = 5.7;
console.log(5 * 10);
function fun() {
   console.log('this is a function');
}

fun();
function greeting(){
    const name = prompt('what is your name?');
    const result = 'Hello ' + name;
    console.log(result)
}
//greeting();

var num2 = 0;

while (num2 < 100) {
    num2 += 15;
    console.log(num2);
}

let fruit = 'banana';
let moreFruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(1, 3));
console.log(fruit.replace('ban', 'fun'));

let fruits = ['banana','apple', 'orange', 'pineapple'];

//alert(fruits[0])
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// objects
let user = {
    name: "John",
    age: 30,
    "likes birds": true,
}
let key = prompt("Что вы хотите узнать о пользователе?", "name");
alert(user[key]);
// вызов свойств объекта
//alert (user.name);
//alert (user.age)
const puser = {
    name: "John",
    surname: "Smith",
    
}
puser.name = "Pete";
//delete puser.name; не будет ничего
//alert (puser.name); Pete выпадет
//alert(user ["likes dogs"]); 
//задача 1
let Elvira = {
    sex: "женский",
    age: 26,
    maritalStatus: "замужем"
};
console.log(Elvira);
Elvira.age = 86
//задача 2
let Эльвира = {
    sex: "female",
    age: 26,
    maritalStatus: "married",
    parents: {
        dad: "Ривкат",
        mom: "Надежда"
    }
}
console.log(Эльвира.parents)