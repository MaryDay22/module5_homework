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
