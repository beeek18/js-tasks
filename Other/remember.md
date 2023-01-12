https://developer.mozilla.org/ru/docs/Web/JavaScript - MDN
https://learn.javascript.ru/ - Learn JS

NUMBER
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
https://learn.javascript.ru/number

1.1 - TO STRING:

1.  (num + '')
2.  String(num)
3.  num.toString()
4.  `${num}`

1.2 - TO ARRAY:
NEED CONVERT TO STRING (NUMBER 1.1), AFTER TO ARRAY (STRING 1.2)

1. num.toString().split('').map(Number)
2. String(num).split('').map(Number)
3. (num+'').split('').map(Number)
4. (`${num}`).split('').map(Number)

STRING
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
https://learn.javascript.ru/string

1.1 - TO NUMBER:

1.  str \* 1;
2.  Number(str)
3.  +str

1.2 - TO ARRAY:

1.  str.split('')
2.  [...str]
3.  Array.from(str)
4.  Object.assign([], str)

ARRAY
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
https://learn.javascript.ru/array
https://learn.javascript.ru/array-methods

1.1 - NUMBER TO STRING:

1.  num.map(String)
2.  num.join().split(',')

1.2 - STRING TO NUMBER:

1.  str.map(Number)
2.  str.map(n => +n)
3.  str.map(n => n\*1)

2.1 - OPERATIONS ON NUMBER:

1.  num = num.reduce((a, b) => a + b) // sum (you can put other operations) of all numbers

2.  IF ARRAY HAVE OTHER TYPE:

    1. const checkN = n => isNaN(n) ? 0 : n

    2. num.reduce((a, b) => checkN(a) + checkN(b)) //same like ARRAY - 2.1 (1 point)

3.  num.map(n => checkN(n) \* 2) // miltiplication (you can put other operations) of each numbers

---

Найти непрерывный подмассив в arr, сумма элементов в котором максимальна / A maximal subarray:
https://learn.javascript.ru/task/maximal-subarray

function getMaxSubSum(arr) {
let maxSum = 0;
let partialSum = 0;

for (let item of arr) { // для каждого элемента массива
partialSum += item; // добавляем значение элемента к partialSum
maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
if (partialSum < 0) partialSum = 0; // ноль если отрицательное
}

return maxSum;
}

Остановка цикла на последнем элементе / Stop loop in last i:

for (let i = 0; i < some.length; i++) {

if (i === some.length - 1) break

}

Объект с ключами из массива / Keyed object from array:
https://learn.javascript.ru/task/reduce-object

function groupById(array) {
return array.reduce((obj, value) => {
obj[value.id] = value;
return obj;
}, {})
}

Объект в массив с объектами / Object to array with object:
https://learn.javascript.ru/task/map-objects

1.  let usersMapped = [];

for (let i = 0; i < users.length; i++) {
usersMapped.push({
fullName: `${users[i].name} ${users[i].surname}`,
id: users[i].id
})
}

2.  let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
    }));

Середина строки/массива:
Math.floor((str.length - 1) / 2)
