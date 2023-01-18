// let arr = ["I", "go", "home"];
// delete arr[1];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);

// let arr = ['Я', "изучаю", "JavaScript"]

// arr.splice(1,1)
// console.log(arr);

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// arr.splice(0, 3, "Давай", "танцевать");
// console.log(arr);

// let removed = arr.splice(0,2)
// console.log(removed);
// console.log(arr);

// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(2, 0, "сложный", "язык");
// console.log(arr);

// let arr = [1, 2, 5]
// arr.splice(-1,0,3,4)
// console.log(arr);

// let arr = ["t", "e", "s", "t"];
// let arr2 = arr.slice()

// console.log(arr.slice(1,3));
// console.log(arr.slice(-2));
// console.log(arr2);

// let arr = [1, 2];
// let arr2 = arr.concat('hi', 'arr')
// console.log(arr.concat([3, 4]));
// console.log(arr.concat([3, 4], [5, 6]));
// console.log(arr.concat([3, 4], 5, 6));
// console.log(arr2);

// let arr = [1, 2];

// let arrayLike = { 0: "что-то" };

// console.log(arr.concat(arrayLike));

// ['Biblo', 'Gendalf', 'Bek'].forEach(console.log);

// ['Biblo', 'Gendalf', 'Bek'].forEach((item, index, array) => {
//     console.log(`${item} имеет позицию ${index} в массиве ${array}`);
// })

// let arr = [0, 1, false, null, undefined, NaN];

// console.log(arr.indexOf(0));
// console.log(arr.indexOf(1));
// console.log('false '+ arr.indexOf(false));
// console.log('null ' + arr.indexOf(null));
// console.log('undefined ' + arr.indexOf(undefined));
// console.log('Когда не может найти --> ' + arr.indexOf(2));
// console.log('NaN ненаход --> ' + arr.indexOf(NaN));

// console.log(arr.includes(0));
// console.log(arr.includes(2));
// console.log(arr.includes(NaN));
// console.log(arr.includes(undefined));

// let users = [
//   { id: 1, name: "Bek" },
//   { id: 2, name: "Stas" },
//   { id: 3, name: "Shod" },
// ];

// let user = users.find((item) => item.id === 1);
// let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers.length);

// let lengths = ["Bekzodbek", "Stanislav", "Siyovush"].map((item) => item.length);
// console.log(lengths);

// let arr = [1, 2, 15]

// // arr.sort();
// // console.log(arr);

// function comparade(a, b) {
//    if (a > b) return 1
//    if (a === b) return 0
//    if (a < b) return -1
// }

// arr.sort(comparade)
// console.log(arr);

// let arr = [1, -2, 15, 2, 0, 8].sort(function (a, b) {
//   console.log(a + " <> " + b);
//   return a - b;
// });
// console.log(arr);

// let arr = [1, 2, 15];
// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr);
// arr.sort((a, b) => a - b);
// console.log(arr);

// let countries = ['Tajikistan', 'Russia', 'Uzbekistan']

// console.log(countries.sort((a,b) => a.localeCompare(b) ));

// console.log(countries.reverse())

// let names = 'Bek,Stas,Shod'

// let arr = names.split(',')

// console.log(arr);

// for (const name of arr) {
//     console.log(`Takes letter: ${name}`);
// }

// let arr = 'Bek, Stas, Shod'.split(',',1);
// console.log(arr);

// let strToArr = 'test'.split('')
// console.log(strToArr);

// let arr = ["Bek", "Stas", "Shod"];

// let str = arr.join(",");

// console.log(str);

// let arr = [1, 2, 3, 4, 5]
// let arr2 = [];
// let result3 = arr2.reduce((sum, currect) => sum + currect, 0);
// let result = arr.reduce((sum, currect) => sum + currect, 0)
// let result2 = arr.reduce((sum, currect) => sum + currect)
// console.log(result);
// console.log(result2);
// console.log(result3);

// let arr = [1, 2];
// let arr2 = {};
// console.log(Array.isArray(arr));
// console.log(Array.isArray(arr2));

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };

// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// let soldiers = users.filter(army.canJoin, army)

// console.log(soldiers.length);
// console.log(soldiers[0].age);
// console.log(soldiers[1].age);

// function camelize(str) {
//     return str.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
// }

// console.log(camelize('hello-bek'));

// function filterRange(arr, a, b) {
//   return arr.filter((item) => (item >= a && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let result = filterRange(arr, 1, 4);
// console.log(result);

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr,1,4)
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// function copysorted(arr) {
//     return arr.slice().sort()
// }

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted =copysorted(arr)
// console.log(arr);
// console.log(sorted);

// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }
//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }
// let calc = new Calculator();
// console.log(calc.calculate("3 + 7"));

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result);

// let bek = { name: "bek", age: 22 };
// let stas = { name: "stas", age: 22 };
// let shod = { name: "shod", age: 21 };

// let users = [bek, stas, shod];
// let names = users.map((item) => console.log(item.name));

// let bek = { name: "bek", surname: "kod", id: 1 };
// let stas = { name: "stas", surname: "yakov", id: 2 };
// let shod = { name: "shod", surname: "khasan", id: 3 };

// let users = [bek, stas, shod];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name}${user.surname}`,
//   id: user.id,
// }));

// function sortByAge(arr) {
//     return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
//   }

// let bek = { name: "bek", age: 22 };
// let stas = { name: "stas", age: 23 };
// let shod = { name: "shod", age: 21 };

// let arr = [bek, stas, shod];

// sortByAge(arr);

// console.log(arr);

// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// console.log(shuffle(arr));

// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let bek = { name: "bek", age: 22 };
// let stas = { name: "stas", age: 23 };
// let shod = { name: "shod", age: 21 };

// let arr = [bek, stas, shod];

// console.log(getAverageAge(arr));

// function unique(arr) {
//   result = [];
//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }
//   return result;
// }

// let strings = ["bek", "bek", "stas", "stas", "shod", "shod"];

// console.log(unique(strings));

// let users = [
//   { id: "bek", name: "bekzodbek kodirov", age: 22 },
//   { id: "stas", name: "stanislav yakowlev", age: 23 },
//   { id: "shod", name: "siyowush khasanov", age: 21 },
// ];

// console.log(users);

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
// }

// let userById = groupById(users);

// console.log(userById);

// let arr = [19, 5, 42, 2, 77]; // => 7

// arr = arr.sort((a, b) => a - b);
// console.log(arr);
// arr = arr[0] + arr[1];

// console.log(arr);

// function oppositeNumber(num) {
//   arr = num.toString().split("");
//   if (arr[0] === "-") {
//     return num;
//   } else {
//     return (num = +("-" + num));
//   }
// }

// console.log(oppositeNumber(22));

// let arr = ["Коррекция", "Виток", "Воздух", "Газоанализатор", "Температура"];
// let num = 6;
// let result = arr.filter((item) => (item.length === num));

// function filterArray(arr, num) {
//     return result = arr.filter((item) => (item.length === num));
// }

// console.log(filterArray(arr, 5));

// 1 TASK
// ЦУП прислал рекомендации по предполётной подготовке, но они очень запутанные: следовать нумерованным шагам надо по особой схеме. Мало того, что нужно какие-то пропускать, так ещё и начинать надо не с первого пункта, и заканчивать не последним.
// Помогите Юрию Гагарину написать функцию, которая принимает три аргумента и возвращает массив целых чисел от min до max с шагом step.
// ПРИМЕР: generateRange(2, 10, 2) // [2,4,6,8,10]

// function generateRange(num1, num2, num3) {}

// function sumInput() {
//   let result = 0;

//   for (let i = 0; i <= result; i++) {
//     let num = +prompt("введите число", 0);
//     result += num;
//     if (num === null || num === 0) break;
//   }
//   return result;
// }

// console.log(sumInput());

// console.log('привет');
// console.log('мир'); // coments like this man))
/*
hello
there
coments */

// let message = 'hello'
// console.log(message);

// let message;
// message = "hello";
// console.log(message);

// let message = 'hello'
// console.log(message);

// let user = "Bek";
// let age = 22;
// let message = "hello";

// let admin, name;

// name = "John";
// admin = name;

// console.log(`hello ${'name'}`);

// let userName = prompt("What's your name?", "");
// console.log(userName);

// let value = true;
// console.log(value);

// value = String(value);
// console.log(value);

// console.log('6' * '2');

// let a = "100";
// console.log(typeof a);
// console.log(typeof +a);

// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false //1
// 6 / "3" // 2
// "2" * "3" //6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // -9  5
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaM
// " \t \n" - 2 // -2

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// console.log(a + b);

// let abc = -120301201;
// abc = -abc;

// console.log(abc);

// console.log(2 * 3 ** 2);

// let counter = 1;
// let b = 2 * counter++;
// c = b
// console.log(c);

// "ананас" > "яблоко"
// "2" > "12"
// undefined == null / true
// undefined === null / false
// null == "\n0\n" / false
// null === +"\n0\n" /false

// console.log(null >= 0);

// console.log(5 && 16);

// switch (user) {
//   case "Admin":
//     let password = prompt("Password?", "");
//     switch (password) {
//       case "Boss":
//         console.log("Welcome!");
//         break;
//       case "":
//         console.log("Exit!");
//         break;
//       case null:
//         console.log("Exit!");
//         break;
//       default:
//         console.log("Try again!");
//         break;
//     }
//     break;
//   case "":
//     console.log("Exit!");
//     break;
//   case null:
//     console.log("Exit!");
//     break;
//   default:
//     console.log("I don't know you!");
//     break;
// }

// console.log(null || 0 || undefined);

// let user;

// console.log(user ?? 'incognito');

// user = 'bek'

// console.log(user ?? 'incognito');

// let firstName = null;
// let lastName = '';
// let nickName = "Суперкодер";

// показывает первое определённое значение:
// console.log(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

// циклы)

// let i = 3;

// console.log(i);

// for (let i = 1; i <= 3; i++) {
//   console.log(i);

// }

// while (true) {
//   let user = prompt("Who are you?", "");
//   if (!user) break;
//   if (user === "Admin") {
//     while (true) {
//       let password = prompt("Password?", "");
//       if (!password) break;
//       if (password === "Boss") {
//         console.log("Welcome!");
//       } else if (password === null || password === "") {
//         console.log("Exit!");
//       } else {
//         console.log("Try again");
//       }
//     }
//   } else if (user === null || user === "") {
//     console.log("Exit!");
//   } else {
//     console.log("I don't know you!");
//   }
// }

// let sum = 0;

// while (true) {
//   let num = +prompt("write num for +", 0);
//   if (!num) {
//     break;
//   } else if (num === 0) {
//     break;
//   }
//   sum += num;
// }
// console.log(sum);

// let name = "bekzodbek";

// for (let i = 0; i < name.length; i++) {
//    if (i % 2 === 0) continue;
//   console.log(name[i]);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);              НЕЧЁТНЫЕ
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);              ЧЁТНЫЕ
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let cordinate = +prompt(`write cordinatein (${i},${j})`, 0);
//   }
// }

// console.log("finish!");

// varation1:
//  for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let cordinate = +prompt(`write cordinatein (${i},${j})`, 0);
//     if (!cordinate) break varation1;
//   }
// }

// console.log("finish!");

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

// let i = 0;

// while (i<3) {
//   console.log(`number ${i}!`);
//   i++
// }

// let num;

// do {
//   num = +prompt("write num more than 100", 0);
// } while (num <= 100 && num);

// console.log(`more than 100 - ${num}`);

// for (let i = 0; i < 2; i++) {
//   console.log(i);

// }

// написать цикл для простых цифр до n
// let n = 10;
// nextPrimeNum:
// for (let i = 2; i < n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) continue nextPrimeNum;
//   }
//   console.log(i);
// }

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }
// let browser = prompt("name of browser", "");

// if (browser === "Edge") {
//   console.log("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// }

// if (number === 0) {
//   alert("Вы ввели число 0");
// }

// if (number === 1) {
//   alert("Вы ввели число 1");
// }

// if (number === 2 || number === 3) {
//   alert("Вы ввели число 2, а может и 3");
// }

// const number = +prompt("Введите число между 0 и 3", "");

// switch (number) {
//   case 0:
//     console.log("Вы ввели число 0");
//     break;
//   case 1:
//     console.log("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     console.log("Вы ввели число 2, а может и 3");
//     break;
// }

// function checkAge(age) {
//   age > 18 ? true : confirm("Родители разрешили?");
// }

// console.log(checkAge(19));

// function min(a, b) {
//   return a > b ? b : a;
// }

// console.log(min(1000, 100));

// function pow(x, y) {
//   return x ** y;
// }

// console.log(pow(1,100));

// function showPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (!getPrime(i)) continue;
//     console.log(i);
//   }
// }

// function getPrime(k) {
//   for (let j = 2; j < k; j++) {
//     if (k % j === 0) return false;
//   }
//   return true;
// }

// console.log(showPrime(10));

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

// const checkAge = (age) => age > 18 || confirm("Родители разрешили?");

// const checkAge = (age) => (age > 18 ? true : confirm("Родители разрешили?"));

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// console.log(checkAge(17));

// function getName(name) {
//   return (name = prompt("What's your name?", ""));
// }

// function getName(name) {
//   return console.log(name);
// }

// let getUser = getName;

// getUser('Bek')
// getName('Stas')

// function aks(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// aks(
//   "U agree?",
//   function () { console.log("yes");},
//   function () { console.log("no");},
// );

// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {
//   welcome = function () {
//     console.log("Привет!");
//   };
// }
// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }

// console.log(welcome());

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Вы согласны?",
//   () => {alert("Вы согласились.");},
//   () => {alert("Вы отменили выполнение.");}
// );

// let question = (ask) =>
//   ask ? console.log(`вы согласились`) : console.log(`вы не согласились`);

// question(confirm("вы согласны?"));

// let login = prompt("Кто Вы?", "");

// switch (login) {
//   case "Сотрудник":
//     console.log("Привет");
//     break;

//   case "Директор":
//     console.log("Здравствуйте");
//     break;

//   default:
//     console.log("Нет логина");
//     break;
// }

// login === "Сотрудник"
//   ? console.log("Привет")
//   : login === "Директор"
//   ? console.log("Здравствуйте")
//   : login == ""
//   ? console.log("Нет логина")
//   : "";

// console.log(login);

// const reversedNameBySymbol = (name) => {
//   let i = name.length - 1;
//   while (i >= 0) {
//     console.log(name[i]);
//     i--;
//   }
// };

// console.log(reversedNameBySymbol("Arya"));

// const truncate = (word, slice123) => {
//   let result = word.slice(0, slice123) + "...";
//   return result;
// };

// console.log(truncate("hello guys", 3));

// function SubtractSum(n) {
//   let copyN = n;
//   let sumOfNums = Array.from(String(n), Number).reduce(
//     (total, value) => total + value
//   );

//   while (copyN > 100) {
//     if (copyN <= 100) {
//       break;
//     }
//     copyN = copyN - sumOfNums;
//   }

//   switch (copyN) {
//     case 10:
//       return "apple";
//       break;
//     case 96:
//       return "apple";
//       break;
//     default:
//       return "apple";
//   }
// }

// console.log(SubtractSum(10));

// console.log(Math.sign(-99));

// function highAndLow(stringNumbers) {
//   let n = stringNumbers.split(" ");

//   Array.prototype.max = function () {
//     return Math.max.apply(null, this);
//   };

//   Array.prototype.min = function () {
//     return Math.min.apply(null, this);
//   };
//   let result = [n.max(), n.min()];
//   return result.join(" ");
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }

// console.log("Hello");

// while (true) {
//   let name = prompt("Name?", "");
//   if (!name) break;
// }

// let a = prompt("what's you name?", "");
// alert(a);

// const printOdd = (arr) => {
//   for (let value of arr) {
//     if (value % 2 !== 0) {
//       let odd = value.push();
//     }
//   }
// };

// const someNums = [1, 2, 3, 4, 5, 6, 7, 8];

// https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
// function oddCount(num) {                        // Более лучший вариант и читабельный
//   let counter = 0;

//   for (let i = 1; i < num; i++) {
//     if (i % 2 !== 0) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// const oddCount = num => Math.floor(num / 2)



// console.log(oddCount(7));
// somearr = 15023;
// console.log(oddCount(somearr));

// https://www.codewars.com/kata/57202aefe8d6c514300001fd
// function saleHotdogs(n) {
//     let result = 0;

//   if (n < 5) {
//     result = n * 100;
//   } else if (n >= 5 && n < 10) {
//     result = n * 95;
//   } else {
//     result = n * 90;
//   }

//   return result;
// }

// console.log(saleHotdogs(4));

// https://www.codewars.com/kata/57aa218e72292d98d500240f
// function heron(a, b, c) {
//   let p = (a + b + c) / 2;
//   let result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

//   return result;
// }

// console.log(heron(6, 8, 10)); //6

// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// function shortcut(str) {
//   result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] !== "a" &&
//       str[i] !== "e" &&
//       str[i] !== "i" &&
//       str[i] !== "o" &&
//       str[i] !== "u"
//     ) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(shortcut("codewars"));

// function shortcut(string) {                                      ПРАВИЛЬНЫЙ ВАРИАНТ!!!
//   return string.replace(/[aeiou]/gi, "");                    //g - global and i - registr no matter
// }

// console.log(shortcut("codewars"));

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// let text = "Let's travel abroad shall we";
// function findShort(text) {
//   let arrText = text.split(" ");
//   let result = [];

//   for (let i = 0; i < arrText.length; i++) {
//     result.push(arrText[i].length);
//   }

//   return Math.min(...result);
// }

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// function getCount(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       count++;
//     } else if (str[i] === "e") {
//       count++;
//     } else if (str[i] === "i") {
//       count++;
//     } else if (str[i] === "o") {
//       count++;
//     } else if (str[i] === "u") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(getCount("eiou"));

// function getCount(str) {                                 ПРАВИЛЬНЫЙ ВАРИАНТ!!!
//   return str.match(/[aeiou]/gi).length;
// }

// console.log(getCount("abracadabra"));

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// function disemvowel(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] !== "o" &&
//       str[i] !== "O" &&
//       str[i] !== "i" &&
//       str[i] !== "I" &&
//       str[i] !== "e" &&
//       str[i] !== "E" &&
//       str[i] !== "a" &&
//       str[i] !== "A" &&
//       str[i] !== "u" &&
//       str[i] !== "U"
//     ) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// function disemvowel(str) {                               ПРАВИЛЬНЫЙ ВАРИАНТ!!!
//     return str.replace(/[aeiou]/gi, '');
//   }

// console.log(disemvowel("This website is for losers LOL!"));
// console.log(disemvowel("What are you, a communist?"));

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// function squareDigits(num) {
//   let arrNum = num.toString().split("");
//   let result = [];

//   for (const elem of arrNum) {
//     result.push(elem ** 2);
//   }
//   return +result.join("");
// }

// console.log(squareDigits(9119));

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// function descendingOrder(num) {
//   let result = +num
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");

//   return result;
// }

// console.log(descendingOrder(54321));

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// function getMiddle(str) {

//   if (str.length % 2 !== 0) {
//     return str[Math.floor(str.length / 2)];
//   } else if (str.length % 2 === 0) {
//     return str[Math.floor(str.length / 2) - 1] + str[Math.ceil(str.length / 2)];
//   }
// }

// function odd(str) {
//   if (str.length % 2 !== 0) {
//     return str[Math.floor(str.length / 2)];
//   }
// }

// function even(str) {
//   if (str.length % 2 === 0) {
//     return str[Math.floor(str.length / 2) - 1] + str[Math.ceil(str.length / 2)];
//   }
// }

// function getMiddle(str) {
//   return odd(str) || even(str);
// }

// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// function accum(s) {
//   let i = 0;
//   let result = "";

//   while (i < s.length) {
//     result = `${result}-${s[i].toUpperCase()}${s[i].toLowerCase().repeat(i)}`;
//     i++;
//   }

//   return result.slice(1, result.length);
// }

// function accum(s) {
//   const result = [];
//   const lowerStr = s.toLowerCase();

//   for (let i = 0; i < lowerStr.length; i++) {
//     let str = lowerStr[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       str += lowerStr[i];
//     }

//     result.push(str);
//   }

//   return result.join("-");
// }

// function accum(s) {
//   return [...s.toUpperCase()].reduce(
//     (acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index)
//   );
// }

// function accum(s) {
//     return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
//   }

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
// function isSquare(n) {
//   result = Math.sqrt(n);
//   if (Number.isInteger(result)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

// const isSquare = n => Number.isInteger(Math.sqrt(n));

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// function positiveSum(arr) {
//   let result = 0;

//   for (const elem of arr) {
//     if (elem > 0) {
//       result += elem;
//     }
//   }

//   return result;
// }

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// function filter_list(arr) {
//   return arr.filter((elem) => elem === "number");
// }

// const filter_list = (arr) => arr.filter((elem) => typeof elem === "number");

// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// function isIsogram(str) {
//   let arrStr = str.toLowerCase().split("").sort();

//   for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i] === arrStr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isIsogram(str) {
//   return !str.match(/([a-z]).*\1/i);
// }

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// function makeNegative(num) {
//   if (num === 0) {
//     return num;
//   } else if (num > 0) {                САМЫЙ ЛУЧШИЙ И НАДËЖНЫЙ ВАРИАНТ
//     return num * -1;
//   } else {
//     return num;
//   }
// }

// const makeNegative = (num) => (num > 0 ? num * -1 : num);    С КОСЯКОМ
// const makeNegative = (num) => Math.abs(num);                 С КОСЯКОМ

// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// function XO(str) {
//   str = str.toLowerCase().split("").sort();
//   let result;

//   let x = str.filter((elem) => elem === "x");
//   let o = str.filter((elem) => elem === "o");

//   if (x.length !== o.length) {
//     result = false;
//   } else if (!(str.includes("x") && str.includes("x"))) {
//     result = true;
//   } else {
//     result = true;
//   }
//   return result;
// }

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// String.prototype.toJadenCase = function () {                                 String.prototype!!! ШОК!)
//   let str = [];
//   str = this.split(" ");
//   let result = [];

//   for (let elem of str) {
//     result.push(elem[0].toUpperCase() + elem.slice(1, elem.length));
//   }
//   return result.join(" ");
// };

// function toJadenCase(str) {                                                  Классическая функция
//   str = str.split(" ");
//   let result = [];

//   for (let elem of str) {
//     result.push(elem[0].toUpperCase() + elem.slice(1, elem.length));
//   }
//   return result.join(" ");
// }

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// function solution(str) {
//   return str.split("").reverse().join("");
// }

// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
// function opposite(number) {
//   return number * -1
// }

// function opposite(number) {
//   return(-number);
// }

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
// function numberToString(num) {
//   return num + "";
// }

// function numberToString(num) {
//   return num.toString();
// }

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// function DNAStrand(dna) {
//   dna = dna.split("");

//   for (let i = 0; i < dna.length; i++) {

//     switch (dna[i]) {
//       case "A": dna[i] = "T";
//       break;

//       case "T": dna[i] = "A";
//       break;

//       case "G": dna[i] = "C";
//       break;

//       case "C": dna[i] = "G";
//       break;
//     }
//   }
//   return dna.join("");
// }

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// function removeChar(str){
//   return str.slice(1,str.length - 1)
//   };

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// function maskify(str) {
//   if (str.length > 4) {
//     return "#".repeat(str.length - 4) + str.slice(-4);
//   } else {
//     return str;
//   }
// }

// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
// function sumTwoSmallestNumbers(numbers) {
//   numbers = numbers.sort((a, b) => a - b);

//   return numbers[0] + numbers[1];
// }

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// function squareSum(num) {
//   if (num == "") {
//     return 0;
//   }

//   let result = [];

//   for (let i = 0; i < num.length; i++) {
//     result.push(num[i] ** 2);
//   }

//   result = result.reduce((a, b) => a + b);

//   return result;
// }

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// function summation(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// }

// const summation = n => n * (n + 1) / 2;

// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript          СЧИТАТЬ ТУТ))
// function getSum(a, b) {
//   let result = 0;
//   if (a > b) {
//     while (a > b) {
//       result += b;
//       b++;
//     }
//   }
//   while (a <= b) {
//     result += a;
//     a++;
//   }

//   return result;
// }

// function getSum(a, b) {
//   result = 0;

//   if (a < b) while (a <= b) result += a++;
//   else while (a >= b) result += a--;

//   return result;
// }

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
// function noSpace(x){
//   return x.split(' ').join('')
//   }

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     args = args.sort((a, b) => a - b);
//     return args[0];
//   }
// }

// function findSmallestInt(arr) {
//   arr = arr.sort((a, b) => a - b);
//   return arr[0];
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// function longest(s1, s2) {
//   let togetherS = s1 + s2;
//   let result = [];

//   togetherS = togetherS.split("").sort();

//   for (let i = 0; i < togetherS.length; i++) {
//     if (togetherS[i] !== togetherS[i + 1]) {
//       result.push(togetherS[i]);
//     }
//   }
//   return result.join("");
// }

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// function countSheeps(arr) {
//   let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === true) {
//     count++
//   }
//   return count
// }

// function countSheeps(arr) {
//   return arr.filter(Boolean).length;
// }

// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// function friend(friends) {
//   return arr.filter((elem) => elem.length === 4);
// }

// https://www.codewars.com/kata/52378b3ee72f21e1ea000045/train/javascript
// function min(a, b) {
//   if (isNaN(a)) {
//     a = NaN
//   } else if (isNaN(b)) {
//     b = NaN
//   } else if (a === null) {
//     a = 0;
//   } else if (b === null) {
//     b = 0;
//   }

//   let result = (a < b) ? a : b;

//   if (result === null) {
//     result = 0
//   }
//   return result
// }

// function min(a, b) {
//   return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
// }

// https://www.codewars.com/kata/5748838ce2fab90b86001b1a
// function squareArea(A) {

//   let S = A * 4;
//   let R = S / (Math.PI * 2);
//   let Ssquare = R * R;

//   return Ssquare
// }

// function squareArea(A){
//   var circum = 4 * A;
//   var radius = circum / (2 * Math.PI);
//   var area = Math.pow(radius, 2);
//   return Math.round(area*100)/100
// }

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// function findAverage(array) {
//   let sum = array.reduce((a, b) => a + b, 0)
//   return (sum / array.length) || 0
// }

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// const century = year => Math.ceil(year / 100)

// function century(year) {
//   return Math.round((year / 100)+0.49);
// }

// https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript
// function shorter_reverse_longer(s1, s2) {
//   let result;
//   let revS1 = s1.split('').reverse();
//   let revS2 = s2.split('').reverse();

//   if (s1.length >= s2.length) {
//     return `${s2}${revS1.join('')}${s2}`
//   } else {
//     return `${s1}${revS2.join('')}${s1}`
//   }
// }

// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
// function howManydays(month) {
//   let days;
//   switch (month) {
//     case 2: days = 28;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11: days = 30;
//       break;
//     default: days = 31;
//       break

//   }
//   return days;
// }

// https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
// function animal(obj) {
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
// }

// let obj = {
//   name: "dog",
//   legs: 4,
//   color: "white",
// }

// console.log(animal(obj));

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// function abbrevName(name) {
//   name = name.toUpperCase().split(' ');
//   return `${name[0][0]}.${name[1][0]}`
// }

// https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
// function getLength(arr) {
//   return arr.length;
// }
// function getFirst(arr) {
//   return arr[0];
// }
// function getLast(arr) {
//   return arr[arr.length - 1];
// }
// function pushElement(arr) {
//   var el = 1;
//   arr.push(el);
//   return arr;
// }
// function popElement(arr) {
//   arr.pop();
//   return arr;
// }

// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
// const check = (a, x) => a.includes(x)

// function check(a, x) {
//   if (a.includes(x)) {
//     return true
//   } else {
//     return false
//   }
// }

// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript/63652fcba933450016727411
// reverse = function (array) {
//   return array.reverse()
// }

// reverse = function (array) {
//   let result = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     result.push(array[i])
//   }
//   return result
// }

// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript
// const getSumOfDigits = (num) => String(num).split('').map(Number).reduce((a, b) => a + b, 0);

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// function findMultiples(integer, limit) {
//   let result = [];

//   for (let i = integer; i <= limit; i += integer) {
//     result.push(i);
//   }
//   return result;
// }

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
// const cockroachSpeed = (s) => Math.floor(s * 100000 / 3600)

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
// const rowSumOddNumbers = (n) => n ** 3; \

// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
// function findNextSquare(sq) {
//     if (Number.isInteger(Math.sqrt(sq))) {
//         sq = Math.sqrt(sq) + 1;
//         sq = sq ** 2;
//         return sq;
//     } else {
//         return -1;
//     }
// }

// https://www.codewars.com/kata/5601c5f6ba804403c7000004/train/javascript
// function barTriang(p1, p2, p3) {
//     let result = [];
//     let sum = []

//     sum.push((p1[0] + p2[0] + p3[0]) / 3);
//     sum.push((p1[1] + p2[1] + p3[1]) / 3);

//     result.push(+sum[0].toFixed(4))
//     result.push(+sum[1].toFixed(4))

//     return result
// }

// function barTriang(p1, p2, p3) {
//     let x = (p1[0] + p2[0] + p3[0]) / 3;
//     let y = (p1[1] + p2[1] + p3[1]) / 3;

//     return [+x.toFixed(4), +y.toFixed(4)];
// }

// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
// function padIt(str, n) {
//     let i = 1;
//     while (i <= n) {
//         if (i % 2 !== 0) {
//             str = `*${str}`;
//         } else {
//             str = `${str}*`;
//         }
//         i++;
//     }
//     return str;
// }

// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
// function trueOrFalse(val) {
//     if (val) return "true";
//     else return "false";
// }

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
// function pickIt(arr) {
//     let odd = []
//     let even = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i])
//         } else {
//             odd.push(arr[i])
//         }
//     }
//     return [odd, even];
// }

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
// function grabDoll(dolls) {
//     let bag = [];

//     for (let i = 0; i < dolls.length; i++) {
//         if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
//             bag.push(dolls[i]);
//         } else {
//             continue;
//         }

//         if (bag.length === 3) break;
//     }

//     return bag;
// }

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
// function giveMeFive(obj) {
//     let result = [];

//     for (let el in obj) {
//         if (el.length === 5) {
//             result.push(el);
//         }
//         if (obj[el].length === 5) {
//             result.push(obj[el]);
//         }
//     }
//     return result;
// }

// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
// function whatNumberIsIt(n) {
//     if (isNaN(n) === true) {
//         return "Input number is Number.NaN"
//     }

//     switch (n) {
//         case Number.MAX_VALUE:
//             return "Input number is Number.MAX_VALUE"
//         case Number.MIN_VALUE:
//             return "Input number is Number.MIN_VALUE"
//         case Number.NEGATIVE_INFINITY:
//             return "Input number is Number.NEGATIVE_INFINITY"
//         case Number.POSITIVE_INFINITY:
//             return "Input number is Number.POSITIVE_INFINITY"
//         default:
//             return `Input number is ${n}`
//     }
// }

// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
// function colorOf(r, g, b) {
//     r = r.toString(16);
//     g = g.toString(16);
//     b = b.toString(16);

//     if (r.length < 2) { r = "0" + r };
//     if (g.length < 2) { g = "0" + g };
//     if (b.length < 2) { b = "0" + b };

//     return "#" + r + g + b;
// }

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
// function splitAndMerge(str, sep) {
//     return str.split(' ').map(word => word.split('').join(sep)).join(' ')
// }

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
// function firstToLast(str, c) {
//     if (str.includes(c)) {
//         return str.lastIndexOf(c) - str.indexOf(c)
//     } else {
//         return -1
//     }

// }

// function firstToLast(str, c) {
//     return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
// }

// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
// function alienLanguage(str) {
//     str = str.toUpperCase().split(" ");
//     let result = str.map(word => word.slice(0, word.length - 1) + word[word.length - 1].toLowerCase()).join(' ')
//     return result
// }

// const alienLanguage = (str) =>
//   str
//     .toUpperCase()
//     .split(" ")
//     .map(
//       (word) =>
//         word.slice(0, word.length - 1) + word[word.length - 1].toLowerCase()
//     )
//     .join(" ");

// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
// function fiveLine(a) {
//   a = a.trim();
//   return `${a}\n${a}${a}\n${a}${a}${a}\n${a}${a}${a}${a}\n${a}${a}${a}${a}${a}`
// }

// function fiveLine(s){
//   s = s.trim();
//   return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
// }

// https://www.codewars.com/kata/5733d6c2d780e20173000baa/train/javascript
// function maxMin(a, b) {
//     let result = [];

//     for (let i = 0; i < a.length; i++) {
//         result.push(Math.abs(a[i] - b[i]));
//     }

//     return [Math.max(...result), Math.min(...result)];
// }

// function maxMin(arr1, arr2) {
//     let result = arr1.map((v, i) => Math.abs(v - arr2[i]));
//     return [Math.max(...result), Math.min(...result)]
// }

// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
// function cutIt(arr) {
//     let result = [];
//     let shortes = arr.reduce((a, b) => a.length <= b.length ? a : b).length

//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i].slice(0, shortes))
//     }

//     return result
// }

// function cutIt(arr) {
//     const minLength = Math.min(...arr.map(x => x.length));
//     return arr.map(x => x.slice(0, minLength));
// }

// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
// function bigToSmall(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result = result.concat(arr[i])
//     }

//     return result.sort((a, b) => b - a).join('>')
// }

// function bigToSmall(arr) {
//     return [].concat(...arr).sort((a, b) => b - a).join('>');
// }

// ---------------

// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
// function narcissistic(n) {
//     let arr = n.toString().split('');
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] ** arr.length)
//     }

//     result = result.reduce((a, b) => a + b)
//     if (result === n) {
//         return true
//     } else {
//         return false
//     }
// }

// function narcissistic(value) {
//     return value.toString()
//         .split('')
//         .map((x, i, arr) => x ** arr.length)
//         .reduce((a, b) => +a + +b)
//         === value
// }

// https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
// function roundIt(n) {
//     let decN = n.toString().split("");
//     let finD = decN.indexOf(".");
//     let fpart = decN.slice(0, finD).length;
//     let spart = decN.slice(finD + 1, decN.length).length;

//     if (fpart < spart) {
//         return Math.ceil(n);
//     } else if (fpart > spart) {
//         return Math.floor(n);
//     } else if (fpart === spart) {
//         return Math.round(n);
//     }
// }

// function roundIt(n) {
//     var [a, b] = String(n).split('.').map(s => s.length);
//     if (a < b) return Math.ceil(n);
//     if (a > b) return Math.floor(n);
//     return Math.round(n);
// }

// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
// function blackAndWhite(arr) {
//     if (Array.isArray(arr) !== true) {
//         return "It's a fake array"
//     }

//     if (arr.includes(5) && arr.includes(13)) {
//         return "It's a black array";
//     } else {
//         return "It's a white array";
//     }

// }

// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
// function howManySmaller(arr, n) {
//     let newArr = arr.map(el => +el.toFixed(2))
//     let count = 0;

//     for (let el of newArr) {
//         if (el < n) {
//             count++
//         }
//     }
//     return count
// }

// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
// function countGrade(arr) {
//     return {
//         S: arr.filter(score => score === 100).length,
//         A: arr.filter(score => 100 > score && score >= 90).length,
//         B: arr.filter(score => 90 > score && score >= 80).length,
//         C: arr.filter(score => 80 > score && score >= 60).length,
//         D: arr.filter(score => 60 > score && score >= 0).length,
//         X: arr.filter(score => score === -1).length,
//     }
// }


// Числа фибоначи / Fibonacci numbers

// function fibN(n) {
//     let fibArr = [1, 1];

//     if (n < 2) {
//         return fibArr.slice(0, n)
//     }

//     while (fibArr.length < n) {
//         const last = fibArr[fibArr.length - 1];
//         const prev = fibArr[fibArr.length - 2];

//         fibArr.push(last + prev)
//     }

//     return fibArr
// }

// https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

// function _if(bool, func1, func2) {
//     if (bool == true) return func1()
//     else return func2()
// }


// Напиши функцию, которая принимает массив чисел и возвращает сумму положительных. Если суммировать нечего, возвращает ноль.
// Например: [1, -4, 7] → 8; [-1, -2] → 0.

// function sumOfPosNums(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let cur = arr[i];

//         if (cur > 0) {
//             result.push(cur)
//         }
//     }
//     if (result.length === 0) {
//         return 0
//     }

//     return result.reduce((a, b) => a + b)
// }

// let arr = [1, -4, 7];
// let ar2 = [-1, -2];




// console.log(sumOfPosNums(arr))
// console.log(sumOfPosNums(ar2))




// Напиши функцию, которая принимает n(положительное целое число) и возвращает сумму всех целых чисел от 1 до n.Например:
// (3)→6 //1+2+3
//     (5)→15 //1+2+3+4+5


// function sumN(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum = sum + i
//         i++
//     }
//     return sum
// }

// function sumN(n) {
//     let sum = [];

//     for (let i = 1; i <= n; i++) {
//         sum.push(i)

//     }

//     return sum.reduce((a, b) => a + b)
// }

// console.log(sumN(3));
// console.log(sumN(5));

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// function validatePIN (pin) {

//     let str = pin.replace(/\s/g, "");

//     if (pin !== str) return false

//     pin = pin.trim().split('').map(a=>a*1)

//     if ((pin.length === 4 || pin.length === 6) && !pin.includes(NaN)) {
//         return true
//     } else {
//         return false
//     }
// }

// function validatePIN (pin) {

//     var pinlen = pin.length;
//     var isCorrectLength = (pinlen == 4 || pinlen == 6);
//     var hasOnlyNumbers = pin.match(/^\d+$/);

//     if(isCorrectLength && hasOnlyNumbers){
//       return true;
//     }

//     return false;

//   }

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// function openOrSenior(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];

//         if (el[0] >= 55 && 7 < el[1]) {
//             result.push('Senior')
//         } else {
//             result.push('Open')
//         }
//     }

//     return result
// }


// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
// function isTriangle(a, b, c) {
//     let result1;
//     let result2;
//     let result3;

//     if (a + b > c) result1 = true;

//     if (a + c > b) result2 = true;

//     if (b + c > a) result3 = true
//     else result3 = false;


//     if (result1 == result2 && result1 == result3) return true
//     else return false
// }

// function isTriangle(a, b, c) {
//     return a + b > c && a + c > b && c + b > a;
// }


// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
// const addBinary = (a, b) => (a + b).toString(2);

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// const solution = (str, ending) => str.endsWith(ending)

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// function oddOrEven(arr) {
//     if (arr.length === 0) return 'even'

//     arr = arr.reduce((a, b) => a + b);

//     if (arr % 2 === 0) return 'even'
//     else return 'odd'
// }

// function oddOrEven(arr) {
//     return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
// }

// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
// function divisors(n) {
//     let arr = []
//     let result;

//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             arr.push(i)
//         }
//     }

//     if (arr.length === 0) {
//         return `${n} is prime`
//     }

//     return arr
// };

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// function reverseWords(str) {
//     str = str.split(' ');

//     let result = [];

//     for (let i = 0; i < str.length; i++) {
//         result.push(str[i].split('').reverse().join(''))
//     }

//     return result.join(' ')
// }

// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
// function SeriesSum(n) {
//     if (n === 0) return '0.00'
//     if (n === 1) return '1.00'

//     let series = 4;
//     let result = 1;

//     for (let i = 1; i < n; i++) {

//         let fix = 1;

//         result += (fix / series);
//         series += 3;
//     }

//     return result.toFixed(2)
// }

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
// function removeSmallest(n) {
//     let min = Math.min(...n);
//     let skip = n.indexOf(min);
//     let result = [];

//     for (let i = 0; i < n.length; i++) {
//         if (i === skip) continue

//         result.push(n[i])
//     }

//     return result
// }

// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
// const number = arr => arr.map((el, i) => `${i + 1}: ${el}`)

// https://www.codewars.com/kata/559590633066759614000063/train/javascript
// const minMax = arr => [Math.min(...arr), Math.max(...arr)]

// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
// function dontGiveMeFive(start, end) {
//     let count = 0;

//     for (i = start; i <= end; i++) {
//         if ((i + '').split('').includes('5')) continue
//         count++
//     }

//     return count
// }

// function withoutRepeat(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
//             result.push(arr[i])
//         }
//     }

//     return result
// }

// https://leetcode.com/problems/two-sum/
// function twoSum(arr, needN) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < i; j++) {
//             if (arr[j] + arr[i] === needN) result.push(j, i)
//         }
//     }

//     return result
// }

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// function spinWords(str) {
//     let arr = str.split(' ');
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i].length < 5) {
//             result.push(arr[i])
//         } else {
//             result.push(arr[i].split('').reverse().join(''))
//         }

//     }

//     return result.join(' ')
// }

// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// function solution(n) {
//     let result = 0;


//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             result += i
//         }
//     }

//     if (result < 0) return 0

//     return result
// }

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// function findOdd(arr) {
//     let count = {};

//     for (let elem of arr) {
//         if (count[elem] === undefined) {
//             count[elem] = 1;
//         } else {
//             count[elem]++;
//         }
//     }

//     count = Object.entries(count)


//     for (let i = 0; i < count.length; i++) {

//         if (count[i][1] % 2 !== 0) return (+count[i][0]);;
//     }
// }

// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// function digitalRoot(n) {
//     // ...
// }


let n = 493193;


let arr = (n + '').split('').map(Number);

console.log(arr);

let result = 0;


// while ((result + '').length !== 0) {
//     result += arr.reduce((a, b) => a + b)

// }






console.log(result);