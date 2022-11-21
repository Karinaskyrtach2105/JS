// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61


// const checkAge = function(age) {
//     age_1 = 17;
//     age_2 = 18;
//     age_3 = 61;
//     if (age <= age_2) {
//         console.log('You dont have acces because your age is ' + age + ' It is less then ');
//     } else if (age >= age_2 && age <= age_3) {
//         console.log('Welcome!');
//     } else if (age > age_3) {
//         console.log('Keep calm and look Culture channel');
//     } else {
//         console.log('Technikal work')
//     }
// }

// checkAge(17)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// const checkAge = function(age) {
//     age_1 = 17;
//     age_2 = 18;
//     age_3 = 61;
//     if (typeof(age) != 'number'){
//         console.log('Error');
//     if (age <= age_2) {
//         console.log('You dont have acces because your age is ' + age + ' It is less then ');
//     } else if (age >= age_2 && age <= age_3) {
//         console.log('Welcome!');
//     } else if (age > age_3) {
//         console.log('Keep calm and look Culture channel');
//     } else {
//         console.log('Technikal work')
//     }
// }

// checkAge(hb)


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


// const checkAge = function (age) {
//     +age;
//     age_1 = 17;
//     age_2 = 18;
//     age_3 = 61;
//     if (typeof(+age) != 'number'){
//         console.log('Error');
//     } else if (age <= age_2) {
//         console.log('You dont have acces because your age is ' + age + ' It is less then ');
//     } else if (age >= age_2 && age <= age_3) {
//         console.log('Welcome!');
//     } else if (age > age_3) {
//         console.log('Keep calm and look Culture channel');
//     } else {
//         console.log('Technikal work')
//     }
// }

// checkAge('50')

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


const age_2 = 18;
const age_3 = 60;
const div = document.getElementById('d')
const checkAge = function(...age) {
    age.forEach(el => {
      if(el && !isNaN(el)) {
        if (el < age_2) {
           div.innerHTML += 'You dont have acces because your age is ' + age + ' It is less then ' + '<br />';
        } else if (el >= age_2 && el < age_3) {
            div.innerHTML += 'Welcome!' + '<br />';
        } else if (el > age_3) {
            div.innerHTML += 'Keep calm and look Culture channel' + '<br />';
        } else {
            div.innerHTML += 'Technikal work' + '<br />'; 
        }
    } else div.innerHTML += 'Not an integer value' + '<br />'
    })
}

checkAge(17, 18, 60, 61, '', '20', 'fff', '0')

// Для того, чтобы посмотреть на действие prompt, создала html документ.