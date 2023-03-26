// Задача 1

const NUMBER = +prompt('Введите четное число', '')
if (typeof +NUMBER !== 'number') {
  console.log('Ошибка, введено НЕ ЧИСЛО')
} else if (isNaN(NUMBER % 2)) {
  console.log('Упс, кажется, вы ошиблись')
} else if (NUMBER % 2 === 0) {
  console.log('Вы ввели чётное число')
} else {
  console.log('Вы ввели нечётное число')
}

// Задача 2

let x = 1,
  res;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    res = "x - число"
    break;
  case "string":
    res = "x - строка"
    break;
  case "boolean":
    res = "x - логическое"
    break;
  default:
    res = "Тип x не определен"
}
console.log(res)
// Задача 3

const STR = 'Hello'
const REVERSE = STR.split('').reverse().join('')
console.log(REVERSE)


// Задача 4

function randomInt(min, max) {
	min = Math.ceil(0)
	max = Math.floor(100)
	return Math.floor(Math.random() * (100 - 0) + 0)
}
console.log(randomInt(0, 100))

// Задача 5

let array = [1, 2, 3]
console.log(array.length)
let result = array.map(function(item, index, array) {
  return item + 2
})
console.log(result)

// Задача 6

let ones = [1, 1, 1, 1, 1]
let resultOnes = ones.every(function(res){
	return res === 1
})
console.log(resultOnes)
// Задача 7

for (let i = 1; i < 10; i += 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// Задача 8

const associative = new Map ([
	['First name:', 'Ivan'],
	['Last name:', 'Ivanov'],
	['Age:', '35']
])
console.log(associative)