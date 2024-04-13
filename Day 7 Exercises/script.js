// // function zaki() {
// //     console.log('helo world')
// // }
// // zaki()

// // function printFullName (){
// //     let firstname = 'Asabeneh'
// //     let lastName = 'Yetayeh'
// //     let space = ' '
// //     let fullname = firstname + space + lastName
// //     return fullname
// // }
// // console.log(printFullName())

// // function areaOfCircle(r) {
// //     let area = Math.PI * r ** 2
// //     return area
// // }
// // console.log(areaOfCircle(10 ))

// // function sumNumber(num1, num2) {
// //     let sum = num1 + num2
// //     console.log(sum)
// //     return sum
// // }

// // sumNumber(20, 20)

// // function sumArrayValues(arr) {
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++){
// //         sum = sum + arr[i]
// //     }
// //     console.log(arr.length)
// //     console.log(sum)
// //     return sum;
// // }
// // const number = [1, 3, 4, 5];
// // sumArrayValues(number)

// // const functionPengurangan = (const1, const2) => {
// //     let total = const1 - const2
// //     console.log(total)
// //     return total
// // }
// // functionPengurangan(10, 11)

// // // function sumAllNum() {
// // //     let sum = 0
// // //     for (let i = 0; i < arguments.length; i++) {
// // //         sum += arguments[i]
// // //     }
// // //     console.log(sum)
// // //     return sum
// // // }
// // sumAllNum(1, 2)

// // // const sumAllNums = (...args) => {
// // //     // console.log(arguments), arguments object not found in arrow function
// // //     // instead we use a parameter followed by spread operator (...)
// // //     console.log(args)
// // //   }

// // function sumAllNums1() {
// //     console.log(arguments)
// // }
// // sumAllNums1(1, 2, 3, 4)

// // const sumAllNum = (...args) => {
// //     let sum = 0;
// //     for (const element of args) {
// //         sum += element
// //     }
// //     return sum
// // }
// // console.log(sumAllNum(1, 4, 6, 4))

// // const anonymousFun = function() {
// //     console.log(
// //         'I am an anonymous function and my value is stored in anonymousFun'
// //     )
// // }

// // const square = function(n) {
// //     return console.log(n * n)
// // }
// // square(2)

// (function(n) {
//     console.log(n * n)
// })(2)

// let squaredNum = (function(n) {
//     return n * n
// })(10)

// console.log(squaredNum)

// function square(n) {
//     return console.log(n * n)
// }
// square(2)

// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//       newArr.push(element.toUpperCase())
//     }
//     return newArr
//   }
  
//   const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
//   console.log(changeToUpperCase(countries))

//   function greetings(name = 'Peter') {
//     let message = `${name}, welcome to 30 Days Of JavaScript!`
//     return message
//   }
  
//   console.log(greetings())
//   console.log(greetings('Asabeneh'))

//   function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
//   }
  
//   console.log(generateFullName())
//   console.log(generateFullName('David', 'Smith'))

//   function calculateAge(birthYear, currentYear = 2019) {
//     let age = currentYear - birthYear
//     return age
//   }
  
//   console.log('Age: ', calculateAge(1819))

//   function weightOfObject(mass, gravity = 9.81) {
//     let weight = mass * gravity + ' N' // the value has to be changed to string first
//     return weight
//   }
  
//   console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
//   console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon


function fullname() {
    console.log('M Zakky Al Wafa')
}
fullname()

function fullname2() {
    firstname = 'zaki';
    lastname = 'wafa';
    space = " ";
    full = firstname +  space + lastname
    return console.log(full)
}
fullname2()

function addNumbers(para1, para2) {
    return console.log(para1 + para2)
}
addNumbers(2, 5)

function areaOfRectangle(length, width){
    return console.log(length * width)
}
areaOfRectangle(12, 12)

function perimeter(length, width) {
    return console.log(2 * (length + width))
}
perimeter(2, 1)

function volume(length, height, width) {
    return console.log(length * height * width)
}
volume(10, 10, 10)

