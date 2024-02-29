
//---------------------------User accounts----------------------------------//
let users = [{"index":0,"isActive":true,"balance":"$2,226.60","name":"Eugenia Sawyer","gender":"female","phone":"+1 (840) 583-3207","address":"949 John Street, Rose, Puerto Rico, 1857"},{"index":1,"isActive":true,"balance":"$2,613.77","name":"Pauline Gallegos","gender":"female","phone":"+1 (985) 593-3328","address":"328 Greenpoint Avenue, Torboy, North Dakota, 6857"},{"index":2,"isActive":false,"balance":"$3,976.41","name":"Middleton Chaney","gender":"male","phone":"+1 (995) 591-2478","address":"807 Fleet Walk, Brutus, Arkansas, 9783"},{"index":3,"isActive":true,"balance":"$1,934.58","name":"Burns Poole","gender":"male","phone":"+1 (885) 559-3422","address":"730 Seba Avenue, Osage, Alabama, 6290"},{"index":4,"isActive":true,"balance":"$3,261.65","name":"Mcfadden Horne","gender":"male","phone":"+1 (942) 565-3988","address":"120 Scholes Street, Kirk, Michigan, 1018"},{"index":5,"isActive":false,"balance":"$1,790.56","name":"Suzette Lewis","gender":"female","phone":"+1 (837) 586-3283","address":"314 Dunne Place, Bawcomville, Guam, 9053"}];

let phoneNumbersWithBalancesAbove2000 = users
    .filter(user => parseFloat(user.balance.replace(/[$,]/g, '')) > 2000)
    .map(user => user.phone);

let totalBalance = users
    .reduce((sum, user) => sum + parseFloat(user.balance.replace(/[$,]/g, '')), 0);

let resultContainer = document.createElement('div');
resultContainer.innerHTML = `<p>Телефонні номери користувачів з балансом більше 2000:</p><ul>${phoneNumbersWithBalancesAbove2000.map(phone => `<li>${phone}</li>`).join('')}</ul><p>Загальний баланс користувачів: ${totalBalance}</p>`;
document.body.appendChild(resultContainer);

console.log("Телефонні номери користувачів з балансом більше 2000:");
phoneNumbersWithBalancesAbove2000.forEach(phoneNumber => console.log(phoneNumber));

console.log("Загальний баланс користувачів:", totalBalance);


//--------------------------------------------------------------//
//--------------------------------------------------------------//
// alert("Enter your name for information");
// const yourName = prompt("What is your name?");
// alert("Hello," + yourName + "! How are you?")
// console.log(yourName);

//--------------------------------------------------------------//

// const a = parseFloat(prompt('Enter your first number'))
// const b = parseFloat(prompt('Enter your second number'))


// const sum = a + b;
// const difference = a - b;
// const product = a * b;
// const quotient = a / b;

// alert("User entered " + a + " and " + b + ":\n\n" +
//                     a + " + " + b + " = " + sum + "\n" +
//                     a + " - " + b + " = " + difference + "\n" +
//                     a + " * " + b + " = " + product + "\n" +
//                     a + " / " + b + " = " + quotient)

//--------------------------------------------------------------//

// function showInformation() {
//     const yearOfBirth = prompt("Введіть свій рік народження:");
//     if (yearOfBirth === null) {
//         alert("Шкода, що Ви не захотіли ввести свій рік народження.");
//         return;
//     }

//     const city = prompt("Введіть місто, в якому ви живете:");
//     if (city === null) {
//         alert("Шкода, що Ви не захотіли ввести своє місто.");
//         return;
//     }

//     const favoriteSport = prompt("Введіть свій улюблений вид спорту:");
//     if (favoriteSport === null) {
//         alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
//         return;
//     }


//     const currentYear = new Date().getFullYear();
//     const age = currentYear - parseInt(yearOfBirth);


//     const capitals = ["Київ", "Вашингтон", "Лондон"];
//     let message = "";
//     if (capitals.includes(city)) {
//         const countries = {
//             "Київ": "Україна",
//             "Вашингтон": "США",
//             "Лондон": "Велика Британія"
//         };
//         message = `Ти живеш у столиці ${countries[city]}`;
//     } else {
//         message = `Ти живеш у місті ${city}`;
//     }


//     const sportsChampions = {
//         "футбол": "Ліонель Мессі",
//         "баскетбол": "Леброн Джеймс",
//         "теніс": "Серена Вільямс"
//     };

//     if (sportsChampions.hasOwnProperty(favoriteSport)) {
//         message += `\nКруто! Хочеш стати як ${sportsChampions[favoriteSport]}?`;
//     }

//     alert(`Ваш вік: ${age}\n${message}`);
// }
// showInformation();


//---------------------------Task----------------------------------//


// document.getElementById('textField').addEventListener('focus', function () {
//     document.getElementById('infoDiv').style.display = 'block';
// });

// document.getElementById('textField').addEventListener('blur', function () {
//     document.getElementById('infoDiv').style.display = 'none';
// });


//---------reworked part----------//

// const textFieldEl = document.getElementById('textField');
// const infoDivEl = document.getElementById('infoDiv');

// textFieldEl.addEventListener('focus', function () {
//     infoDivEl.style.display = 'block';
//     });

// textFieldEl.addEventListener('blur', function () {
//     infoDivEl.style.display = 'none';
//     });

//-------------------------------------------------------------//

//---------------------------Table----------------------------------//


// const table = document.getElementById('myTable');

// let count = 1;
// for (let i = 0; i < 10; i++) {
//     const row = table.insertRow();
//     for (let j = 0; j < 10; j++) {
//     const cell = row.insertCell();
//     setTimeout(() => {
//         cell.textContent = count++;
//       }, (i * 10 + j) * 100)
//     }
// }

//-------------------------------------------------------------//
//---------------------------Math----------------------------------//

// function displayResults() {
//     const results = {};
//     // 1.
//     let result1 = '';
//     for (let i = 10; i <= 20; i++) {
//         result1 += i + ', ';
//     }
//     document.getElementById('result1').textContent = '1. Числа від 10 до 20: ' + result1.slice(0, -2);
//     results['Числа від 10 до 20'] = result1;

//     // 2. 
//     let result2 = '';
//     for (let i = 10; i <= 20; i++) {
//         result2 += i ** 2 + ', ';
//     }
//     document.getElementById('result2').textContent = '2. Квадрати чисел від 10 до 20: ' + result2.slice(0, -2);
//     results['Квадрати чисел від 10 до 20'] = result2;

//     // 3. 
//     let result3 = '<p>3. Таблиця множення на 7:</p><table><tr><th>Число</th><th>Результат</th></tr>';
//     for (let i = 1; i <= 10; i++) {
//         result3 += `<tr><td>${i}</td><td>${i * 7}</td></tr>`;
//     }
//     result3 += '</table>';
//     document.getElementById('result3').innerHTML = result3;
//     results['Таблиця множення на 7'] = result3;

//     // 4. 
//     let sum4 = 0;
//     for (let i = 1; i <= 15; i++) {
//         sum4 += i;
//     }
//     document.getElementById('result4').textContent = '4. Сума цілих чисел від 1 до 15: ' + sum4;
//     results['Сума цілих чисел від 1 до 15'] = sum4;

//     // 5. 
//     let product5 = 1;
//     for (let i = 15; i <= 35; i++) {
//         product5 *= i;
//     }
//     document.getElementById('result5').textContent = '5. Добуток цілих чисел від 15 до 35: ' + product5;
//     results['Добуток цілих чисел від 15 до 35'] = product5;

//     // 6. 
//     let sum6 = 0;
//     for (let i = 1; i <= 500; i++) {
//         sum6 += i;
//     }
//     const average6 = sum6 / 500;
//     document.getElementById('result6').textContent = '6. Середнє арифметичне цілих чисел від 1 до 500: ' + average6.toFixed(2);
//     results['Середнє арифметичне цілих чисел від 1 до 500'] = average6;


//     // 7. 
//     let sum7 = 0;
//     for (let i = 30; i <= 80; i++) {
//         if (i % 2 === 0) {
//             sum7 += i;
//         }
//     }
//     document.getElementById('result7').textContent = '7. Сума лише парних чисел від 30 до 80: ' + sum7;
//     results['Сума лише парних чисел від 30 до 80'] = sum7;

//     // 8. 
//     let result8 = '';
//     for (let i = 100; i <= 200; i++) {
//         if (i % 3 === 0) {
//             result8 += i + ', ';
//         }
//     }
//     document.getElementById('result8').textContent = '8. Числа від 100 до 200, кратні 3: ' + result8.slice(0, -2);
//     results['Числа від 100 до 200, кратні 3'] = result8;


//     // 9. 
//     let result9 = '';
//     const number9 = 25; 
//     for (let i = 1; i <= number9; i++) {
//         if (number9 % i === 0) {
//             result9 += i + ', ';
//         }
//     }
//     document.getElementById('result9').textContent = `9. Дільники ${number9}: ` + result9.slice(0, -2);
//     results['Дільники ' + number9] = result9;

//     // 10. 
//     let count10 = 0;
//     for (let i = 1; i <= number9; i++) {
//         if (number9 % i === 0 && i % 2 === 0) {
//             count10++;
//         }
//     }
//     document.getElementById('result10').textContent = '10. Кількість парних дільників числа ' + number9 + ': ' + count10;
//     results['Кількість парних дільників числа ' + number9] = count10;


//     // 11.
//     let sum11 = 0;
//     for (let i = 1; i <= number9; i++) {
//         if (number9 % i === 0 && i % 2 === 0) {
//             sum11 += i;
//         }
//     }
//     document.getElementById('result11').textContent = '11. Сума парних дільників числа ' + number9 + ': ' + sum11;
//     results['Сума парних дільників числа ' + number9] = sum11;


//     // 12. 
//     let result12 = '<p>12. Повна таблиця множення від 1 до 10:</p><table border="1"><tr><th>Число</th>';
//     for (let i = 1; i <= 10; i++) {
//         result12 += `<th>${i}</th>`;
//     }
//     result12 += '</tr>';
//     for (let i = 1; i <= 10; i++) {
//         result12 += `<tr><td>${i}</td>`;
//         for (let j = 1; j <= 10; j++) {
//             result12 += `<td>${i * j}</td>`;
//         }
//         result12 += '</tr>';
//     }
//     result12 += '</table>';
//     document.getElementById('result12').innerHTML = result12;
//     results['Повна таблиця множення від 1 до 10'] = result12;
//     console.log('Результати:', results);
// }
// window.onload = function () {
//     displayResults();
// };
//-------------------------------------------------------------//
//---------------------------Buttons----------------------------------//
// function processStrings() {
//     const userInput1 = prompt("Введіть перший рядок:");
//     const userInput2 = prompt("Введіть другий рядок:");
//     const userInput3 = prompt("Введіть третій рядок:");

//     const result = concatenateStrings(userInput1, userInput2, userInput3);
//     displayResult("Рядки у довільному порядку:", result);
//     console.log("Результат у консолі:", result);
// }

// function concatenateStrings(str1, str2, str3) {
//     const stringsArray = [str1, str2, str3];
//     stringsArray.sort(() => Math.random() - 0.5);
//     return stringsArray.join(" ");
// }

// function splitNumber() {
//     const userNumber = prompt("Введіть п'ятизначне число:");

//     if (/^\d{5}$/.test(userNumber)) {
//         const result = userNumber.split("").join(" ");
//         displayResult("Розбите число:", result);
//         console.log("Результат у консолі:", result);
//     } else {
//         displayResult("Некоректне введення. Будь ласка, введіть п'ятизначне число.");
//     }
// }


// function displayResult(message, result) {
//     const resultDiv = document.getElementById("result");
    
//     if (!resultDiv) {
//         const newResultDiv = document.createElement("div");
//         newResultDiv.id = "result";
//         document.body.appendChild(newResultDiv);
//     }

//     document.getElementById("result").innerHTML = `<p>${message}</p><p>${result}</p>`;
// }
//-------------------------------------------------------------//

/* -----------------------------Hours--------------------------------------------- */
// const hours = parseFloat(prompt("Введіть кількість годин:"));

// const seconds = hours * 3600;

// const resultMessage = `Кількість секунд у ${hours} годинах: ${seconds}`;

// alert(resultMessage);
// console.log(resultMessage);
/* -------------------------------------------------------------------------- */
//---------------------------Average----------------------------------//

// const number1 = parseFloat(prompt("Введіть перше число:"));
// const number2 = parseFloat(prompt("Введіть друге число:"));
// const number3 = parseFloat(prompt("Введіть третє число:"));


// const average = (number1 + number2 + number3) / 3;


// alert(`Середнє арифметичне: ${average}`);
// console.log(`Середнє арифметичне: ${average}`);

//--------------------------------------------------------------//
//---------------------------Calculator----------------------------------//

// const operation = prompt("Введіть операцію (add, sub, mult, div):");

// const num1 = parseFloat(prompt("Введіть перше число:"));

// const num2 = parseFloat(prompt("Введіть друге число:"));

// let result;
// let operationSymbol;

// if (operation === "add") {
//     result = num1 + num2;
//     operationSymbol = "+";
// } else if (operation === "sub") {
//     result = num1 - num2;
//     operationSymbol = "-";
// } else if (operation === "mult") {
//     result = num1 * num2;
//     operationSymbol = "*";
// } else if (operation === "div") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//         operationSymbol = "/";
//     } else {
//         alert("Ділення на нуль неможливе.");
//         result = null;
//     }
// } else {
//     alert("Невірна операція. Будь ласка, введіть коректну операцію.");
//     result = null; 
// }

// if (result !== null) {
//     console.log(`${num1} ${operationSymbol} ${num2} = ${result}`);
//     alert(`${num1} ${operationSymbol} ${num2} = ${result}`);
// }

//--------------------------------------------------------------//
//---------------------------Switch----------------------------------//
// let numOrStr = prompt('Введіть число або рядок');
// console.log(numOrStr);

// switch (true) {
//     case numOrStr === null:
//         console.log('Ви скасували');
//         break;
//     case numOrStr.trim() === '':
//         console.log('Порожній рядок');
//         break;
//     case isNaN(+numOrStr):
//         console.log('Число - не число (NaN)');
//         break;
//     default:
//         console.log('OK!');
// }

//--------------------------------------------------------------//
//---------------------------Dollars----------------------------------//
// let outputText = "";


// outputText += "1. Числа від 20 до 30 з кроком 0,5:<br>";
// console.log("1. Числа від 20 до 30 з кроком 0,5:");
// for (let i = 20; i <= 30; i += 0.5) {
//     outputText += i + " ";
//     console.log(i);
// }

// outputText += "<br><br>"; 

// outputText += "2. Розрахунок вартості доларів у гривнях:<br>";
// console.log("2. Розрахунок вартості доларів у гривнях:");
// for (let i = 10; i <= 100; i += 10) {
//     let costInHryvnia = i * 27;
//     outputText += i + " доларів коштують " + i * 27 + " гривень<br>";
//     console.log(i + " доларів коштують " + costInHryvnia + " гривень");
// }

// outputText += "<br>"; 

// outputText += "3. Цілі числа, квадрат яких не перевищує введеного числа:<br>";
// console.log("3. Цілі числа, квадрат яких не перевищує введеного числа:");
// let n = parseInt(prompt("Введіть ціле число:"));
// for (let i = 1; i <= 100; i++) {
//     if (i * i <= n) {
//         outputText += i + " ";
//         console.log(i);
//     } else {
//         break;
//     }
// }
// outputText += "<br><br>";

// outputText += "4. Перевірка числа на простоту:<br>";
// console.log("4. Перевірка числа на простоту:");
// let num = parseInt(prompt("Введіть ціле число для перевірки на простоту:"));
// let isPrime = true;
// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// outputText += "Число " + num + (isPrime ? " є простим" : " не є простим") + "<br><br>";
// console.log("Число " + num + (isPrime ? " є простим" : " не є простим"));

// outputText += "5. Перевірка можливості отримати число зведенням 3 у ступінь:<br>";
// console.log("5. Перевірка можливості отримати число зведенням 3 у ступінь:");
// let numToCheck = parseInt(prompt("Введіть ще раз будь-яке число для перевірки:"));
// let isPowerOfThree = false;
// if (numToCheck > 0) {
//     while (numToCheck !== 1) {
//         if (numToCheck % 3 !== 0) {
//             break;
//         }
//         numToCheck /= 3;
//     }
//     isPowerOfThree = numToCheck === 1;
// }
// outputText += "Число " + numToCheck + (isPowerOfThree ? " можна отримати шляхом зведення числа 3 у деякий ступінь" : " не можна отримати шляхом зведення числа 3 у деякий ступінь") + "<br><br>";
// console.log("Число " + numToCheck + (isPowerOfThree ? " можна отримати шляхом зведення числа 3 у деякий ступінь" : " не можна отримати шляхом зведення числа 3 у деякий ступінь"));

// document.getElementById("output").innerHTML = outputText;

//--------------------------------------------------------------//

//---------------------------Promise----------------------------------//
// function searchPost() {
//     const postId = document.getElementById("postId").value;

//     if (postId < 1 || postId > 100) {
//         alert("Будь ласка, введіть коректне ID від 1 до 100.");
//         return;
//     }

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         .then(response => response.json())
//         .then(post => {
//             const postContainer = document.getElementById("postContainer");
//             postContainer.innerHTML = `
//                 <h2>Пост #${post.id}</h2>
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//                 <button onclick="fetchComments(${post.id})">Отримати коментарі</button>
//             `;
//         })
//         .catch(error => {
//             console.error('Помилка запиту:', error);
//         });
// }

// function fetchComments(postId) {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
//         .then(response => response.json())
//         .then(comments => {
//             alert(`Коментарі до поста #${postId}:\n\n${JSON.stringify(comments, null, 2)}`);
//         })
//         .catch(error => {
//             console.error('Помилка запиту:', error);
//         });
// }
//--------------------------------------------------------------//
//---------------------------Massif----------------------------------//
// let array = [];
// let length = parseInt(prompt("Введите длину массива:"));

// if (isNaN(length) || length <= 0) {
//     alert("Пожалуйста, введите корректную длину массива.");
// } else {
//     for (let i = 0; i < length; i++) {
//         let userInput = prompt(`Введите элемент ${i + 1}:`);
//         if (userInput.trim() === "") {
//             alert("Вы ввели пустое значение");
//             i--; 
//         } else {
//             array.push(userInput.trim());
//         }
//     }

//     console.log("Исходный массив:", array.join(", "));
//     document.write("<strong>Исходный массив:</strong> " + array.join(", ") + "<br>");

//     array.sort();

//     console.log("Отсортированный массив:", array.join(", "));
//     document.write("<strong>Отсортированный массив:</strong> " + array.join(", ") + "<br>");

//     array.splice(1, 3);

//     console.log("Массив после удаления элементов с 2 по 4:", array.join(", "));
//     document.write("<strong>Массив после удаления элементов с 2 по 4:</strong> " + array.join(", ") + "<br>");
// }

//--------------------------------------------------------------//
//---------------------------Massif2----------------------------------//
// const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//     let [sumOfPositives, countOfPositives, minElement, minIndex, maxElement, maxIndex, countOfNegatives, countOfOddPositives, countOfEvenPositives, sumOfEvenPositives, sumOfOddPositives, productOfPositives] = [0, 0, array[0], 0, array[0], 0, 0, 0, 0, 0, 0, 1];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (element > 0) {
//             sumOfPositives += element;
//             countOfPositives++;

//             if (element % 2 === 0) {
//                 countOfEvenPositives++;
//                 sumOfEvenPositives += element;
//             } else {
//                 countOfOddPositives++;
//                 sumOfOddPositives += element;
//             }

//             productOfPositives *= element;
//         }

//         if (element < minElement) {
//             minElement = element;
//             minIndex = i;
//         }

//         if (element > maxElement) {
//             maxElement = element;
//             maxIndex = i;
//         }

//         if (element < 0) {
//             countOfNegatives++;
//         }
//     }


//     const resultsArray = [
//         `Сумма положительных элементов: ${sumOfPositives}`,
//         `Количество положительных элементов: ${countOfPositives}`,
//         `Минимальный элемент: ${minElement}, порядковый номер: ${minIndex}`,
//         `Максимальный элемент: ${maxElement}, порядковый номер: ${maxIndex}`,
//         `Количество негативных элементов: ${countOfNegatives}`,
//         `Количество непарных положительных элементов: ${countOfOddPositives}`,
//         `Количество парных положительных элементов: ${countOfEvenPositives}`,
//         `Сумма парных положительных элементов: ${sumOfEvenPositives}`,
//         `Сумма непарных положительных элементов: ${sumOfOddPositives}`,
//         `Произведение положительных элементов: ${productOfPositives}`
//     ];

//     const resultsList = document.getElementById("results");
//     resultsList.innerHTML = resultsArray.map(result => `<li>${result}</li>`).join('');

//     console.log("Результаты выполнения JavaScript Homework:");
//     console.log(resultsArray);


//--------------------------------------------------------------//