/*Task 1.

Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt
*/

// function getUsersByDate(date) {
//     const users = [
//         {
//             firstName: 'John',
//             lastName: 'Caper',
//             phone: '7436676737634',
//             registrationDate: '12.10.2021'
//         },
//         {
//             firstName: 'Clark',
//             lastName: 'Kent',
//             phone: '4346676737634',
//             registrationDate: '16.09.2021'
//         },
//         {
//             firstName: 'Tony',
//             lastName: 'Stark',
//             phone: '7436698337634',
//             registrationDate: '11.10.2021'
//         },
//         {
//             firstName: 'Bruce',
//             lastName: 'Wayne',
//             phone: '1111176737634',
//             registrationDate: '09.10.2021'
//         },
//         {
//             firstName: 'Star',
//             lastName: 'Lord',
//             phone: '7439374737634',
//             registrationDate: '10.10.2021'
//         },
//         {
//             firstName: 'Kate',
//             lastName: 'Bishop',
//             phone: '7436693647634',
//             registrationDate: '11.10.2021'
//         },
//         {
//             firstName: 'Jerry',
//             lastName: 'James',
//             phone: '7409048737634',
//             registrationDate: '10.10.2021'
//         },
//         {
//             firstName: 'Jeremy',
//             lastName: 'Clarkson',
//             phone: '743667600289334',
//             registrationDate: '16.10.2020'
//         },
//         {
//             firstName: 'Robert',
//             lastName: 'Patrik',
//             phone: '7436676730093',
//             registrationDate: '10.10.2020'
//         },
//         {
//             firstName: 'Jonny',
//             lastName: 'Sins',
//             phone: '74923982737634',
//             registrationDate: '01.01.2021'
//         },
//         {
//             firstName: 'Andrew',
//             lastName: 'Garfield',
//             phone: '743667988344',
//             registrationDate: '09.10.2019'
//         },
//         {
//             firstName: 'Jane',
//             lastName: 'Foster',
//             phone: '74368783427634',
//             registrationDate: '09.10.2019'
//         },
//         {
//             firstName: 'Rick',
//             lastName: 'Smith',
//             phone: '700000037634',
//             registrationDate: '12.10.2021'
//         },
//     ];
//     for (i = 0; i < users.length; i++) {
//         if(users[i].registrationDate == "09.10.2021"|| users[i].registrationDate == "10.10.2021") 
//         console.log(users[i])
//     }
// }
    
// getUsersByDate();

// Сначала перебираем весь массив, затем делаем проверку на нужные нам даты в условии, и выводим каждый объект, который содержит эти даты.


/* Task 2*
Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
*/

// function keepUniqueData() {
//     'use strict';
//     let jsonData = require('./task2.json');
//     let unique = Array.from(new Set(jsonData.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
//     console.log(unique)
// }
// keepUniqueData();

//- преобразуем каждый объект в строку
//- создаем Set(он оставит только уникальные значения)
//- создаём массив
//- каждый элемент(строку) - преобразуем в объект


// // 2 способ:
// function keepUniqueData() {
//   let data = require('./task2.json');
//   let a = [];
//   let b = data.map(item => {
//     item = JSON.stringify(item)
//     if(a.indexOf(item) ===-1)
//       a.push(item)
//   })
//   a = a.map(item => item = JSON.parse(item))
//   return a
// }
// console.log(keepUniqueData())

// 1) создаем переменную a, в которой пустой массив;
// 2) создаем переменную b, в которой из моего существующего массива методом map создадим новый массив. item - это элемент массива, а так как там у нас формат JSON, сначала мы приводим этот item к строке;
// 3) в условии мы перебираем массив а . indexOf смотрит, есть ли в нем наша строка, если нет, т.е. -1, то добавляем в массив а нашу строку, если возвращается 1, т.е. такой элемент есть, то условие не срабатывает и оно проверяет следующий item;
// 4) метод push позволяет добавить один, или более элементов в конец массива;
// 5) далее методом JSON.parse() каждый элемент(строку) - преобразуем в объект


/*примечание****
Метод indexOf() ищет в массиве указанный элемент и возвращает его позицию.
Поиск начнется с указанной позиции или сначала массива, если начальная позиция не указана. Завершается поиск в конце массива.
Возвращает -1, если элемент не найден.*/

// Task 3.
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  
  