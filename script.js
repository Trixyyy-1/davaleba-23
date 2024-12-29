// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.

let numbers = [20, 13, 14, 45, 27] 

let result = sum(numbers);

function sum(numbers) {
    return numbers.reduce((total, current) => total += current, 0);
}




console.log(result);
// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.

let num = [12, 34, 25, 44, 32]

function hightnum(num) {
    return num.reduce((max, current) => current > max ? current : max);
}
console.log(hightnum(num));

// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.

let words = ["my" , "name", "is" , "luka"] 

function combinewords(words) {
    return words.reduce((result , current) => result + " " + current)
}

console.log(combinewords(words));

// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.

let number = [11, 2, 13, 22, 3];

function multiply(number) {
    return number.reduce(function(total, current) {
        return total * current;
    }, 1); 
}

console.log(multiply(number)); 

// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.

let num1 = [ 20, 12, 3]

let result2 = difference(num1)

function difference(num1) {
    return num1.reduce((total , current) => total - current)
}

console.log(result2);

// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.

let num2 = [22, 3, 1, 43]

function multiply(num2) {
    return num2.map(function(num) {
        return num * 2
    })
}

console.log(multiply(num2));

// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.

let sentence = [ "I", "Study" , "In" , "london"]

function smallletters(sentence) {
    return sentence.map(function(sentence) {
        return sentence.toLowerCase()
    })
}

console.log(smallletters(sentence));
// 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი. map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.



// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.

let num3 = [22, 12, 12, 3]

function squarenummber(num3) {
    return num3.map(function(num3) {
        return num3 * num3 
    })
}

console.log(squarenummber(num3));

// 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.


// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.
let students = [
    { name: "oqropiridze", score: 95 },
    { name: "bragvadze", score: 77 },
    { name: "qobulashvili", score: 80 },
    { name: "mesxi", score: 68 }
];


students.forEach(function(student) {
    student.score += 5;
});

console.log(students);

// 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.

// 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და ჩასვი ისინი გვერდზე for-ის გამოყენებით.

// 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.

let numbers1 = [2, 7, 5]; 

function printMultiplicationTable(numbers) {
   
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        console.log(`Multiplication Table for ${number}:`);
        
       
        for (let j = 1; j <= 10; j++) {
            console.log(`${number} x ${j} = ${number * j}`);
        }
        
        console.log(''); 
    }
}

printMultiplicationTable(numbers);

// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.

let numbers2 = [5, 12, 8, 20, 7, 15, 3, 25];

function filterbacktthanten(arr) {
    return arr.filter(function(number) {
        return number > 10;
    });
}

let filteredNumbers = filterbacktthanten(numbers);
console.log(filteredNumbers);

// 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი. filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც აქვთ კონკრეტული CSS კლასი.