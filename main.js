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


//--------------------------------------------------------------//


document.getElementById('textField').addEventListener('focus', function () {
    document.getElementById('infoDiv').style.display = 'block';
});

document.getElementById('textField').addEventListener('blur', function () {
    document.getElementById('infoDiv').style.display = 'none';
});