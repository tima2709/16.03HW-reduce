// Дан массив с числами. Сделайте из него массив, состоящий из
// квадратов этих чисел.

//
// let num = [1,2,3,0,4,5,6];
// num = num.map(el => el **2);
// console.log(num)

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// let num = [[1, 2, 3, 0, 4, 5, 6]]
// const result = num.filter(item => item === 0).sort((a, b) => a - b)
// console.log(result)
//
// const numberZero = (array) => {
//     return array.map(el => el > 0)
// }
// console.log(numberZero(num))

// Дан массив с числами. Проверьте то, что в нем есть отрицательные
// элементы.

// const num = [1, 2, -3, 0, 4, -5, 6]
// const result = num.filter(item => item < 0).sort((a, b) => a + b)
// console.log(result)

// function arr() {
//     if (num >= 0){
//         return 'true'
//     } else {
//         return 'false'
//     }
// }
// console.log(arr(num))

// const number = (array) => {
//     return array.map(el => el >= 0)
// }
// console.log(number(array))


// Дан массив с числами. Оставьте в нем только отрицательные числа.

// const num = [1, 2, -3, 0, 4, 5, -6];
// const array = num.filter(el => el < 0)
//
// console.log(array)

// Дан массив с числами. Оставьте в нем только четные числа.

//     const num = [1, 2, -3, 0, 4, 5, -6];
// const numEven = (array) => {
//     return array.filter((num) => num % 2 === 0)
// }
//
// console.log(numEven(num))

// Дан массив со строками. Оставьте в нем только те строки,
//     длина которых больше 5-ти символов.

// const word = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// const wordsFilter = (array) => {
//     return array.filter((word) => word.length > 5)
// }
//
// console.log(wordsFilter(word))


// Дан массив с числами. Посчитайте количество отрицательных чисел
// в этом массиве.

// const numbers = [1, 2, -3, 0, -4, 5, -6]
// const minusNum = (array) => {
//     return array.filter((numbers) => numbers < 0)
// }
// console.log(minusNum(numbers).length)

// Дан массив с числами. Найдите сумму этих чисел.

// const num = [1, 2, 3, 33, 4, 5, 6];
//
// const average = num.reduce((acc, number) => acc + number, 0);
// console.log(average)
//
