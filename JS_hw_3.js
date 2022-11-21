// 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function pow(a, b) {
    for (let i = 1; i <= b; i++) {
        console.log(2 ** i)
    }
}

pow(2, 10)

// Можно так же испольпользовать цикл WHILE:

let i = 1;
let b = 10;
while (i <= b) {
    console.log(2 ** i);
    i++
}






// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)


function printSmile(a, b) {
    str = "";
    for (let i = 1; i <=5; i++) {
        str += ":)";
        console.log(str)
    }
}

printSmile(":)", 5)

// Если использовать цикл WHILE:

let i = 1;
let b = 5;
let str = "";
while (i <= b) {
    str += ":)";
    console.log(str)
    i++;
}

// 2 способ:

function smilik(str, numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++) {
        console.log(str.repeat(i))
    }
}

smilik(':(', 10)






// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'


function getWordStructure(word) {
    let vowels = ['a', 'e', 'y', 'u', 'i', 'o', 'A', 'E', 'Y', 'U', 'I', 'O'];
    let numVowels = 0;
    let numConsonans = 0;
    let wordArr = word.split("");
    for (let i = 0; i < word.length; i++) {
        vowels.forEach((item) => {
            if(wordArr[i] == item) numVowels++;
        })
        }
    numConsonans = word.length - numVowels;
    console.log(`Слово ${word} состоит из ${numVowels} гласных и ${numConsonans} согласных`) 
}

// **у нас есть функция, внутри которой массив с гласными, переменная, в которую будет записываться кол-во гласных и переменная, где будут записываться согласные, дальше метод , который разбивает строку на массив, 
// потом идет сам цикл, где мы обозначаем что будет перебираться слово по буквам в соответсвии с нашим массивом, и внутри еще один цикл, чтобы найти совпадения буквы с согласными.

getWordStructure('Case')



// Если использовать цикл WHILE:

    let word = "Test-case";
    let vowels = ['a', 'e', 'y', 'u', 'i', 'o', 'A', 'E', 'Y', 'U', 'I', 'O'];
    let numVowels = 0;
    let numConsonans = 0;
    let wordArr = word.split("");
    let i = 0;

    while(i < word.length) {
        vowels.forEach((item) => {
            if(wordArr[i] == item) numVowels++;
        })
        numConsonans = word.length - numVowels;
        i++;
}
console.log(`Слово ${word} состоит из ${numVowels} гласных и ${numConsonans} согласных`)




// 2 способ:

function getWordStructure(word) {
    const vowels = 'aeiouy'.split('');
    const consonants = 'bcdfghjklmnpqrstvwxz';

    let vowelsCount = 0;
    let consonantsCount = 0;

    for(const item of word.toLowerCase()){
        if(vowels.includes(item)) vowelsCount++;
        else if(consonants.includes(item)) consonantsCount++;
    }
    console.log(`В слове ${word} ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}

getWordStructure('Test-case')

// 3 способ:

function getWordStructure(word) {
    console.log(`В слове ${word} содержится ${(word.match(/[aeiouy]/gi)).length} гласных и ${(word.match(/[bcdfghjklmnpqrstvwxz]/gi)).length} согласных букв`)
}

getWordStructure('Test-Case')

// Поснение: внутри '/' - находится регулярное выражение, gi - модификатор к регулярному выражению, он здесь нужен, чтобы не учитывался регистр букв.





// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    word = word.toLowerCase();
    let wordReverse = word.split('').reverse().join('');
    if(word == wordReverse) console.log(`Word ${word} is palindrom`)
    else console.log(`Word ${word} is NOT palindrom`)
}

// **Создали функцию, внутри переменная, которой присваиваем метод, с помощью которого буквы обоих регистров будут приводиться к нижнему регистру, далее создали переменную, которой присвоили методы разделения строки на массив, переворачивания строки, и объединения, дальше идет условие, в которой сравниваются эти 2 переменные.

// isPalindrom('AnnA')

// 2 способ:

function isPalindrom(word) {
    word = word.toLowerCase()
    for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--) {
        if(word[i] !== word[j]) {
            return false
        }
    }
}

console.log(isPalindrom('aBBa'))

// 3 способ:

function isPalindrom2(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}

isPalindrom2('avva')


