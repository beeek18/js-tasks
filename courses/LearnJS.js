// Основы JavaScript

// Привет, мир!

// console.log('Я JavaScript!');

// Переменные

// 1

// let admin, name;

// name = "John";
// admin = name;

// console.log(admin);

// 2

// let ourPlanetName = 'Earth'
// let currectUserName = 'John'

// Взаимодействие: alert, prompt, confirm

// let userName = prompt("What's your name?", "");
// console.log(userName);

// Базовые операторы, математика

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// console.log(a + b);

// Условное ветвление: if, '?'

// 1

// let nameJS = prompt("Какое официальное название JS?", "");

// if (nameJS === 'ECMAScript') {
//     console.log('Right');
// } else {
//     console.log('Do not know? ECMAScript!');
// }

// 2

// let someNum = +prompt("write num", 0);

// if (someNum > 0) {
//   console.log(1);
// } else if (someNum < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// 3

// let result;
// let a = 1;
// let b = 2;

// result = a + b < 4 ? "Мало" : "Много";

// console.log(result);

// 4

// let message;
// let login = prompt("Напишите кто Вы?", "");

// message =
//   login === "Сотрудник"
//     ? "Привет"
//     : login === "Директор"
//     ? "Здравствуйте"
//     : login === ""
//     ? "Нет логина"
//     : "";

// console.log(message);

// Логические операторы

// 1

// let age = +prompt("How old you", 0);

// if (age >= 14 && age <= 90) {
//   console.log("Youre age in diapozone 14-90");
// } else {
//   console.log("Not with us");
// }

// 2

// let age = +prompt("How old you", 0);

// if (!(age >= 14 && age <= 90)) {
//     console.log("Youre age NOT in diapozone 14-90");
//   } else {
//     console.log("live like a boss");
//   }

// if (age < 14 || age > 90) {
//   console.log("Youre age NOT in diapozone 14-90");
// } else {
//   console.log("live like a boss");
// }

// 3

// let user = prompt("Who are you?", "");

// if (user === "Admin") {
//   let password = prompt("Password?", "");
//   if (password === "Boss") {
//     console.log("Welcome!");
//   } else if (password === null || password === "") {
//     console.log("Exit!");
//   } else {
//     console.log("Try again");
//   }
// } else if (user === null || user === "") {
//   console.log("Exit!");
// } else {
//   console.log("I don't know you!");
// }

// Циклы

// 1

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 2

// let i = 0;

// while (i<3) {
//   console.log(`number ${i}!`);
//   i++
// }

// 3

// let num;

// do {
//   num = +prompt("write num more than 100", 0);
// } while (num <= 100 && num);

// console.log(`more than 100 - ${num}`);

// 4

// let n = 10;

// nextPrimeNum: for (let i = 2; i < n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) continue nextPrimeNum;
//   }
//   console.log(i);
// }

// Конструкция "switch"

// 1

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

// 2

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

// Функции

// 1

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// const checkAge = (age) => age > 18 || confirm("Родители разрешили?");

// const checkAge = (age) => (age > 18 ? true : confirm("Родители разрешили?"));

// 2

// function min(a, b) {
//     return a > b ? b : a;
//   }

// 3

// function pow(x, y) {
//   return x ** y;
// }

// Стрелочные функции, основы

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
//   };

//   ask(
//     "Вы согласны?",
//     () => {alert("Вы согласились.");},
//     () => {alert("Вы отменили выполнение.");}
//   );

// Объекты

// 1

// let user = {};
// user.name = 'Jonh';
// user['surname'] = 'Smith';
// user['name'] = 'Pete';
// delete user.name

// 2

// let emptyObj = {};

// let user = {
//     name: 'Bek',
//     age: 22,
//     higth: 178,
// }

// const isEmpty = (obj) => Object.keys(obj).length === 0 ? true : false

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// 3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let result = 0;

// for (let key in salaries) {
//     result += salaries[key];
// };

// 4

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// Методы объекта, "this"

// 1

// let calculator = {
//     read() {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b?", 0);
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },
// };

// 2

// let ladder = {
//     step: 0,
//     up() {                  // наверх
//         this.step++;
//         return this
//     },
//     down() {                // вниз
//         this.step--;
//         return this
//     },
//     showStep: function () { // показывает текущую ступеньку
//         console.log(this.step);
//         return this
//     }
// };

// Конструктор, оператор "new"

// 1

// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b?", 0);
//     }

//     this.sum = function () {
//         return this.a + this.b;
//     }

//     this.mul = function () {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();

// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

// 2

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.num = +prompt("Сколько добавить?", 0);
//         return this.value += this.num;
//     };
// }

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt('Сколько нужно добавить?', 0);
//     };
// }


// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений

// Числа

// 1

// function sumUserNums() {
//     let n1 = +prompt('first n', 0)
//     let n2 = +prompt('second n', 0)

//     return alert(n1 + n2)
// }

// 2

// function readNumber() {
//     let num;

//     do {
//         num = prompt("Введите число", 0);
//     } while (!isFinite(num));

//     if (num === null || num === '') return null;

//     return +num;
// }

// alert(`Число: ${readNumber()}`);
// readNumber()

// 3

// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }

// 4

// function randomInteger(min, max) {
//     min = Math.ceil(min)
//     man = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Строки

// 1

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
// }

// 2

// function checkSpam(str) {
//     str = str.toLowerCase();

//     return str.includes('viagra') || str.includes('xxx')
// }

// 3

// const truncate = (str, maxlength) => (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;

// 4

// const extractCurrencyValue = (str) => +str.slice(1)

// Массивы

// 1

// let styles = ['jazz', 'blues']
// styles.push('rock&roll')
// styles[Math.floor((styles.length - 1) / 2)] = 'classic'
// console.log(styles.shift());
// styles.unshift('rap', 'reggie')
// console.log(styles);

// 2

// function sumInput() {
//     let arr = [];

//     while (true) {
//         let num = prompt('write num for sum', 0);

//         if (num === '' || num === null || !isFinite(num)) break

//         arr.push(+num)
//     }

//     let sum = 0;

//     for (let n of arr) {
//         sum += n
//     }

//     return sum
// }

// alert(sumInput());

// 3
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         partSum += arr[i];
//         maxSum = Math.max(maxSum, partSum);
//         if (partSum < 0) partSum = 0;
//     }

//     return maxSum;
// }


// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) { // для каждого элемента массива
//         partialSum += item; // добавляем значение элемента к partialSum
//         maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//         if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }

//     return maxSum;
// }

// Методы массивов

// 1

// function camelize(str) {
//     str = str.split('')

// for (let i = 0; i < str.length; i++) {

//     if (str[i] === '-') {
//         if (i === str.length - 1) break
//         str[i + 1] = str[i + 1].toUpperCase()
//     }

//     }
//     return str.join('').split('-').join('')
// }

// 2

// const filterRange = (arr, a, b) => arr.filter((el) => (a <= el && el <= b))

// 3

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((a > arr[i] || arr[i] > b)) {
//             arr.splice(i, 1)
//             i--
//         }
//     }
// }

// 4

// arr.sort((a, b) => b - a)

// 5

// const copySorted = arr => arr.slice().sort()

// 6

// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.calculate = function (str) {

//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     }

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// 7

// let names = users.map(el => el.name)

// 8

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

// 9

// const sortByAge = arr => arr.sort((a, b) => a.age - b.age)

// 10


// const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// const shuffle = arr => arr.map(n => ({ n, pos: Math.random() })).sort((a, b) => a.pos - b.pos).map(({ n }) => n)

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

// 11

// function getAverageAge(arr) {
//     let ages = arr.map(el => el.age);
//     return Math.ceil(ages.reduce((a, b) => (a + b)) / ages.length)
// }

// const getAverageAge = arr => arr.reduce((prev, user) => prev + user.age, 0) / arr.length;

// 12

// function unique(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!(result.includes(arr[i]))) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// 13

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }


// Map и Set

// 1

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// 2

// Мой вариант:

// function aclean(arr) {
//     arr = arr.sort((a, b) => a.length - b.length);
//     let sortedNewArr = [];
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         sortedNewArr.push(arr[i].split('').sort().join(''))
//     }

//     for (let i = 0; i < arr.length; i++) {
//         let lowerCaseNames = sortedNewArr.map(el => el.toLowerCase())

//         if (lowerCaseNames[i] !== lowerCaseNames[i + 1]) {
//             result.push(arr[i].split('').sort((a, b) => b.length - a.length).join(''))
//         }
//     }

//     return result
// }

// Вариант от JS Learn:
// Первый:
// function aclean(arr) {
//     let map = new Map();

//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//         map.set(sorted, word);
//     }

//     return Array.from(map.values());
// }

// Второй
// function aclean(arr) {
//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split("").sort().join("");
//         obj[sorted] = arr[i];
//     }

//     return Object.values(obj);
// }

// 3

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");


// WeakMap и WeakSet

// 1

// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0])
// readMessages.add(messages[1])

// readMessages.add(messages[0])

// console.log('Read message 0:' + readMessages.has(messages[0]));

// messages.shift()

// let isRead = Symbol("isRead");
// messages[0][isRead] = true;

// 2

// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));


// Object.keys, values, entries

// 1

// function sumSalaries(salaries) {
//     let result = 0;

//     for (let money of Object.values(salaries)) {
//         result += money
//     }

//     return result
// }

// 2

// function count(obj) {
//     return Object.keys(obj).length;
// }

// function count(obj) {
//     let result = 0;

//     for (let count of Object.entries(obj)) {
//         if (count) result++
//     }

//     return result
// }

// Деструктурирующее присваивание

// 1

// let user = {
//   name: "John",
//   years: 30,
// };

// let user = { name, years: age, isAdmin = false };

// 2

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries = {}) {
//     let maxSalary = 0;
//     let name = null;

//     for (let [key, value] of Object.entries(salaries)) {

//     if (maxSalary < value) {
//         maxSalary = value;
//         name = key;
//     }
//   }

//   return name
// }


// Дата и время

// 1

// let date = new Date(2012, 1, 20, 3, 12);

// 2

// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days[date.getDay()];
//   }

// function getWeekDay(date) {
//     switch (date.getDay()) {
//         case 0: return 'ВС'
//         case 1: return 'ПН'
//         case 2: return 'ВТ'
//         case 3: return 'СР'
//         case 4: return 'ЧТ'
//         case 5: return 'ПТ'
//         case 6: return 'СБ'

//     }

// };

// 3

//   function getLocalDay(date) {

//     let day = date.getDay();

//     if (day == 0) {
//       day = 7;
//     }

//     return day;
//   }

// function getLocalDay(date) {

//         switch (date.getDay()) {
//         case 0: return 7
//         case 1: return 1
//         case 2: return 2
//         case 3: return 3
//         case 4: return 4
//         case 5: return 5
//         case 6: return 6

//   }}

// 4

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);

//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
//   }

// 5

// function getLastDayOfMonth(year, month){
//     return new Date(year, month + 1, 0).getDate();
//  }

// 6

// function getSecondsToday() {
//     let now = new Date();

//     // создаём объект с текущими днём/месяцем/годом
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     let diff = now - today; // разница в миллисекундах
//     return Math.round(diff / 1000); // получаем секунды
//   }

// function getSecondsToday() {
//     let d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
//   }

// 7

// function getSecondsToTomorrow() {
//     let now = new Date();

//     // завтрашняя дата
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

//     let diff = tomorrow - now; // разница в миллисекундах
//     return Math.round(diff / 1000); // преобразуем в секунды
//   }

// 8

// Первый вариант:

// function formatDate(date) {
//     let diff = new Date() - date; // разница в миллисекундах

//     if (diff < 1000) { // меньше 1 секунды
//       return 'прямо сейчас';
//     }

//     let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

//     if (sec < 60) {
//       return sec + ' сек. назад';
//     }

//     let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
//     if (min < 60) {
//       return min + ' мин. назад';
//     }

//     // отформатировать дату
//     // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
//     let d = date;
//     d = [
//       '0' + d.getDate(),
//       '0' + (d.getMonth() + 1),
//       '' + d.getFullYear(),
//       '0' + d.getHours(),
//       '0' + d.getMinutes()
//     ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

//     // соединить компоненты в дату
//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
//   }

// Второй вариант:

// function formatDate(date) {
//     let dayOfMonth = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let diffMs = new Date() - date;
//     let diffSec = Math.round(diffMs / 1000);
//     let diffMin = diffSec / 60;
//     let diffHour = diffMin / 60;

//     // форматирование
//     year = year.toString().slice(-2);
//     month = month < 10 ? '0' + month : month;
//     dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//     hour = hour < 10 ? '0' + hour : hour;
//     minutes = minutes < 10 ? '0' + minutes : minutes;

//     if (diffSec < 1) {
//       return 'прямо сейчас';
//     } else if (diffMin < 1) {
//       return `${diffSec} сек. назад`
//     } else if (diffHour < 1) {
//       return `${diffMin} мин. назад`
//     } else {
//       return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//     }
//   }

// Формат JSON, метод toJSON

// 1

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };


// let json = JSON.stringify(user)

// console.log(json);

// let goBack = JSON.parse(json)

// console.log(goBack);

// 2

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     return (key !== "" && value == meetup) ? undefined : value;
// }))

// Рекурсия и стек

// 1

// function sumTo(n) {
//     let result = 0;

//     for (let i = 1; i <= n; i++) {
//         result += i
//     }

//     return result
// }


// function sumTo(n) {
//     if (n == 1) return 1

//     return n + sumTo(n - 1)
// }

// function sumTo(n) {
//     return n * (n + 1) / 2;
//   }

// 2

// for (let i = 1; i <= n; i++) {
//     result *= i
// }

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }

// 3

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }


// 4

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printList(list) {
//     let tmp = list;

//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     }

//     return tmp
// }

// function printList(list) {

//     console.log(list.value); // выводим текущий элемент

//     if (list.next) {
//         printList(list.next); // делаем то же самое для остальной части списка
//     }
// }


// 5

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printReverseList(list) {

//     if (list.next) {
//         printReverseList(list.next);
//     }

//     console.log(list.value);
// }


// function printReverseList(list) {
//     let arr = [];
//     let tmp = list;

//     while (tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

// Замыкание

// 1

// function sum(a) {

//     return function(b) {
//       return a + b; // берёт "a" из внешнего лексического окружения
//     };

//   }


// 2

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(arr) {
//     return function (x) {
//         return arr.includes(x);
//     };
// }

// 3

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }

// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete

// users.sort(byField('age'));
// users.forEach(user => alert(user.name)); // Pete, Ann, John

// 4

// Первый вариант:

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let j = i;
//         let shooter = function () { // функция shooter
//             console.log(j); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// Второй вариант:

// function makeArmy() {
//     let shooters = [];

//     for (let i = 0; i < 10; i++) {

//         let shooter = function () { // функция shooter
//             console.log(i); // должна выводить порядковый номер
//         };

//         shooters.push(shooter);

//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5


// Объект функции, NFE

// 1

// function makeCounter() {
//     let count = 0;

//     function counter() {
//         return count++;
//     }

//     counter.set = value => count = value;

//     counter.decrease = () => count--;

//     return counter;
// }

// 2

// function sum(a) {

//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.toString = function () {
//         return currentSum;
//     };

//     return f;
// }


// Планирование: setTimeout и setInterval

// 1

// Используем setInterval:

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function () {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }

// Используем рекурсивный setTimeout:

// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function go() {
//         alert(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }

// printNumbers(5, 10);


// Декораторы и переадресация вызова, call/apply

// 1

// function spy(func) {

//     function wrapper(...args) {
//         // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     wrapper.calls = [];

//     return wrapper;
// }

// 2

// function delay(f, ms) {

//     return function () {
//         setTimeout(() => f.apply(this, arguments), ms);
//     };

// }

// let f1000 = delay(alert, 1000);

// f1000("test"); // показывает "test" после 1000 мс

// 3

// function debounce(f, ms) {

//     let isCooldown = false;

//     return function() {
//       if (isCooldown) return;

//       f.apply(this, arguments);

//       isCooldown = true;

//       setTimeout(() => isCooldown = false, ms);
//     };

//   }

// 4

// function throttle(func, ms) {

//     let isThrottled = false,
//       savedArgs,
//       savedThis;

//     function wrapper() {

//       if (isThrottled) { // (2)
//         savedArgs = arguments;
//         savedThis = this;
//         return;
//       }

//       func.apply(this, arguments); // (1)

//       isThrottled = true;

//       setTimeout(function() {
//         isThrottled = false; // (3)
//         if (savedArgs) {
//           wrapper.apply(savedThis, savedArgs);
//           savedArgs = savedThis = null;
//         }
//       }, ms);
//     }

//     return wrapper;
//   }


// Bind

// 1

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'Вася',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },

// };

// Первый вариант:

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Второй вариант:

// askPassword(() => user.loginOk(), () => user.loginFail());


// 2

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     login(result) {
//         alert(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
// };

// Первый вариант:

// askPassword(() => user.login(true), () => user.login(false));

// Второй вариант:

// askPassword(user.login.bind(user, true), user.login.bind(user, false));
