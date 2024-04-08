let challenge ='30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.substring(3, 100))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))


// let sosmed = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log(sosmed.split(','))

console.log(challenge.replace('JavaScript', 'Phyton'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

// let exam = 'You cannot end a sentence with because because because is a conjunction'
// console.log(exam.indexOf('because'))
// console.log(exam.lastIndexOf('because'))
// console.log(exam.search('because'))

// let trail = ' 30 Days Of JavaScript '
// console.log(trail.trim())

console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
console.log(challenge.match(/a/gi))

// let first = '30 Days Of'
// let second = 'JavaScript'
// console.log(first.concat(second))

console.log(challenge.repeat(2))

// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

// let exam = '10'
// let numInt = parseInt(exam)
// console.log(numInt === 10)

// console.log(parseFloat('9.8') === 10)

// let exam = '9.81'
// let numInt = Math.round(parseFloat(exam))

// console.log(numInt === 10)

// let exam = 'python, jargon'
// console.log(exam.match(/on/gi))

// let exam = 'I hope this course is not full of jargon'
// console.log(exam.includes('jargon'))

// const random = Math.random()
// console.log(random * 101)

// const random = Math.random()
// console.log(random * 51 + 50)

// const random = Math.random()
// console.log(random * 256)

// let exam = 'JavaScript'
// let random = Math.floor(Math.random() * exam.length)
// console.log(exam[random])x

// console.log('1\t1\t1\t1\t1')
// console.log('2\t1\t2\t4\t8')
// console.log('3\t1\t3\t9\t27')
// console.log('4\t1\t4\t16\t64')
// console.log('5\t1\t5\t25\t125')

// let exam = 'You cannot end a sentence with because because because is a conjunction'
// console.log\(exam.substring(31, 54))

// let exam = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(exam.match(/love/gi))

let exam = 'You cannot end a sentence with because because because is a conjunction'
console.log(exam.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Step 1: Remove special characters and punctuation marks using regular expressions
const cleanedSentence = sentence.replace(/[^\w\s]/g, '');

// Step 2: Convert the text to lowercase
const lowercaseSentence = cleanedSentence.toLowerCase();

// Step 3: Split the text into words
const words = lowercaseSentence.split(/\s+/);

// Step 4: Count the frequency of each word
const wordFrequency = {};
words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

// Step 5: Find the word with the highest frequency
let mostFrequentWord = '';
let maxFrequency = 0;
for (const word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
}

console.log("Most frequent word:", mostFrequentWord);


const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extracting numbers using regular expressions
const numbers = text.match(/\d+/g);

// Converting strings to numbers and calculating total annual income
const monthlySalary = parseInt(numbers[0]);
const annualBonus = parseInt(numbers[1]);
const monthlyOnlineCourses = parseInt(numbers[2]);
const totalMonthlyIncome = monthlySalary + monthlyOnlineCourses;
const totalAnnualIncome = (totalMonthlyIncome * 12) + annualBonus;

console.log("Total annual income:", totalAnnualIncome, "euro");
