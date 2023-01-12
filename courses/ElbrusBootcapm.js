// ОСНОВЫ

// 1 TASK
// console.log('Hello, World!');

// 2 TASK
// console.log('Robert');
// console.log('Stannis');
// console.log('Renly');

// 3 TASK
// console.log('Я есть JavaScript!');

// 4 TASK
// // coment before code
// console.log('Это мой код');

// ЧИСЛА И АРИМФЕТИКА

// 1 TASK
// console.log(81 / 9);

// 2 TASK
// console.log(27 ** (1 / 3));

// 3 TASK
// console.log(36 % 5);

// 4 TASK
// console.log(70 * (3 + 4) / (8 + 2));

// СТРОКИ

// 1 TASK
// console.log('""Khal Drogo\'s favorite word is ""athjahakar""""');

// 2 TASK
// console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n"');

// 3 TASK
// console.log('Winter came for the House' + ' of ' + 'Frey.');

// ПЕРЕМЕННЫЕ

// 1 TASK
// let motto = 'What Is Dead May Never Die!';
// console.log(motto);

// 2 TASK
// let motto = 'Hop hei la la la lay';
// motto = 'yal al al al ieh poH';
// console.log(motto);

// 3 TASK
// let myCountSiblings = 3;
// console.log(myCountSiblings);

// 4 TASK
// let eurosCount = 100;
// let eurToDol = eurosCount * 1.25;
// let dolToRub = eurToDol * 60;

// console.log(eurToDol);
// console.log(dolToRub);

// 5 TASK
// let info = "We couldn't verify your mother's maiden name.";
// let intro = 'Here is important information about your account security.';
// let firstName = 'Joffrey';
// let greeting = 'Hello';

// console.log(`${greeting}, ${firstName}!`);
// console.log(`${intro}\n${info}`);

// 6 TASK
// const army = 'the white walkers';
// console.log(army);

// 7 TASK
// const stark = 'Arya';
// console.log(`Do you want to eat, ${stark}?`);

// ТИПЫ ДАННЫХ

// 1 TASK
// const name = 'Na\nharis';
// console.log(name[name.length-1]);

// 2 TASK
// const one = 'Naharis';
// const two = 'Mormont';
// const three = 'Sand';
// console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);

// ОПЕРАТОРЫ СРАВНЕНИЯ

// 1 TASK
// console.log (59 > 48) //true
// console.log (19 < 8) //false
// console.log (8 !== 8) //false

// 2 TASK
// console.log(5 > 4) // true
// console.log("01" === 1) // false

// УСЛОВНЫЕ КОНСТРУКЦИИ

// 1 TASK
// let firstVariable = 156;
// let secondVariable = 118;
// if (firstVariable>secondVariable) {
//     console.log('Круто!');
// }

// 2 TASK
// let result;
// let numA = 2;
// let numB = 1;
// if (numA+numB<4) {
//     result ='Мало';
// }else {
//     result ='Много';
// }
// console.log(result);

// 3 TASK
// let login = "";
// let message;
// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// console.log(message);

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// 1 TASK
// let age = 25;
// if(14 <= age && age <= 90){
// console.log('age находится в диапазоне от 14 до 90!')}

// 2 TASK
// let age = 25;
// if(age < 14 || age > 90){
// console.log('age не входит в диапазон от 14 до 90!')}

// ФУНКЦИИ

// 1 TASK
// const soldiersCount = -2309;
// console.log(Math.abs(soldiersCount));

// 2 TASK
// const number = 923.2238;
// console.log(Math.ceil(number));

// 3 TASK
// const number = 10.1234;
// console.log(number.toFixed(2) * 1);

// 4 TASK
// const text = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';
// console.log(text.length);

// 5 TASK
// const text = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
// console.log(text.toLocaleLowerCase());

// 6 TASK
// let firstName = '  Grigor   \n';
// console.log(firstName.trim());

// 7 TASK
// const text = 'When \t\n you play a \t\n game of thrones you win or you die.';
// console.log(text.slice(5,16).trim().length);

// 8 TASK
// function printMotto() {
//     console.log('Winter is coming');
// }

// 9 TASK
// function specialCalculate(firNum, secNum) {
//     if (firNum % 2 === 0 && secNum % 2 ===0){
//         return firNum * secNum;
//     } else if(firNum % 2 !== 0 && secNum % 2 !==0){
//         return firNum + secNum;
//     } else if (firNum %2 !== 0) {
//         return firNum
//     } else {
//         return secNum
//     }
// }

// 10 TASK
// function truncate(word, countSlice) {
//     return `${word.slice(0, countSlice)}...`
// }

// 11 TASK
// function getHiddenCard(name, stars = 4) {
//     return `${'*'.repeat(stars)}${name.slice(12)}`
// }

// ЦИКЛЫ

// 1 TASK
// function printNumbers(num) {
//     while (num > 0) {
//         console.log(num);
//         num--
//     }
//     return console.log('finished!');
// };

// 2 TASK
// function multiplyNumbersFromRange(start, end) {
// let i = start;
// let result = 1;
// while (i <= end) {
//     result = result * i;
//     i++
// }
// return result
// }

// 3 TASK
// function joinNumbersFromRange(start, end) {
//     let i = start;
//     let result ='';
//     while (i <=end) {
//      result = `${result}${i}`
//      i++
//     }
//     return result
// }

// 4 TASK
// function printReversedNameBySymbol(name) {
//     let i = name.length - 1;
//     while (i >= 0) {
//         console.log(name[i]);
//         i--
//     }
// }

// 5 TASK
// function countChars(word, simb) {
//     let i = 0;
//     let count = 0;
//     word = word.toLowerCase();
//     simb = simb.toLowerCase()
//     while (i <= word.length) {
//        if (word[i] === simb) {
//         count++
//        }
//        i++
//     }
//     return count
// }

// 6 TASK
// function reverse (word) {
//   let i = word.length - 1;
//   let result = '';
//   while (i>=0){
//     result = `${result}${word[i]}`;
//     i--;
//   } return result
// }

// 7 TASK
// function filterString(word, simb) {
//   let i = 0;
//   const lowWord = word.toLowerCase();
//   const lowSimb = simb.toLowerCase();
//   let result = "";
//   while (i < word.length) {
//     if (lowWord[i] !== lowSimb) {
//       result = `${result}${word[i]}`;
//     }
//     i++;
//   }
//   return result;
// }

// 8 TASK
// function makeItFunny(word, num) {
//   let i = 0;
//   let result = "";
//   const upWord = word.toUpperCase();
//   while (i < word.length) {
//     if ((i + 1) % num === 0) {
//       result = `${result}${upWord[i]}`;
//     } else {
//       result = `${result}${word[i]}`;
//     }
//     i++;
//   }
//   return result;
// }

// 9 TASK
// function hasChar(word, simb) {
//     let i = 0;
//     while (i < word.length - 1) {
//       if (word[i] === simb) {
//         return true;
//       }
//       i++;
//     }
//     return false;
//   }

// 10 TASK
// function encrypt(word) {
//   let result = "";
//   for (let i = 0; i < word.length; i += 2) {
//     const nextWord = word[i + 1] || "";
//     result = `${result}${nextWord}${word[i]}`;
//   }
//   return result;
// }

// 11 TASK
// function accum(text) {
//   let result = "";
//   const upText = text.toUpperCase();
//   const lowText = text.toLowerCase();

//   for (let i = 0; i < text.length; i++) {
//     result = `${result}${upText[i]}${lowText[i].repeat(i)}-`;
//   }
//   return result.slice(0, result.length - 1);
// }

// 12 TASK
// function dividerCounter(num) {
//   let count = 0;
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// 13 TASK
// function nbYear(people, pPers, pMov, pGoal) {
//   let countYear = 0;

//   for (let i = 0; i < people; i++) {
//     if (people < pGoal) {
//       let percent = pPers * 0.01 * people;

//       people = people + percent + pMov;

//       countYear++;
//     }
//   }
//   return countYear;
// }

// МАССИВЫ

// 1 TASK
// function generateIntegers (num){
//     let arr = [];
//     for(let i =0; i <= num; i++){
//       arr.push(i)
//     }
//     return arr
//   }

// 2 TASK
// function valueRepeater(n, str1, str2) {
//   const result = [];
//   if (n === 0) return result;

//   for (let i = 0; i <= n; i++) {
//     if (result.length === n) break;
//     result.push(str1);
//     if (result.length === n) break;
//     result.push(str2);
//   }
//   return result;
// }

// 3 TASK
// function maps(num) {
//   for (let i = 0; i < 3; i++) {
//     num[i] = num[i] * 2;
//   }
//   return num;
// }

// МЕТОДЫ МАССИВОВ

// 1 TASK
// function arraySlicer(arr) {
//   return arr.slice(0, 3);
// }

// 2 TASK
// function arraySquarer(arr) {
//   const newArr = [];
//   arr.forEach((elem) => {
//     newArr.push(elem ** 2);
//   });
//   return newArr;
// }

// 3 TASK
// function sumArray(arr) {
//     let result = 0;
//     arr.forEach((element) => {
//       result = result + element;
//     });
//     return result;
//   }

// 4 TASK
// function counter(start, end) {
//     const arr = [];
//     for (let i = start; i <= end; i++) {
//       if (!i.toString().includes("5")) {
//         arr.push(i);
//       }
//     }
//     return arr.length;
//   }

// 5 TASK
// function sumOfLeasts(arr) {
//     arr = arr.sort((a,b) => a - b);
//     return arr[0] + arr[1]
// }

// 6 TASK
// function maxTransform(num) {
//   function compareNumeric(a, b) {
//     return b - a;
//   }
//   num = num.toString().split("").sort(compareNumeric).join("");
//   return +num;
// }

// INTERVIE

// 1 TASK

// function generateRange(start, end, step) {
//   let arr = [];
//   for (let i = start; i <= end; i += step) {
//     arr.push(i);
//   }
//   return arr;
// }

// 2 TASK

// function cycleGo() {
//     let result = "";
//     let i = 20;
//     while (i >= 0) {
//       result = result + i;
//       i -= 4;
//     }
//     return result + " Поехали!";
//   }

// 3 TASK

// function trimSpaces(text) {
//   return text.split(" ").join("");
// }

// 4 TASK

// function filterArray(arr, num) {
//     return result = arr.filter((item) => (item.length === num));
// }

// 5 TASK

// function oppositeNumber(num) {
//     arr = num.toString().split("");
//     if (arr[0] === "-") {
//       return num;
//     } else {
//       return (num = +("-" + num));
//     }
//   }
