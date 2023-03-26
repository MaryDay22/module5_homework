// Задача 5

let array = [1, 2, 3]
console.log(array.length)
let result = array.map(function(item, index, array) {
  return item + 2
})
console.log(result)