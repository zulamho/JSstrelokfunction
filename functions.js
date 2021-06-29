//удаление пользователя
let removeUser = (name) =>{

}
removeUser()

//создание записи(сообщения)
let createPost = () => {

}
createPost()

// доюавить элемент
let addItem = () =>{

}
addItem()

// прочитать файл
let readFile = () => {

}
readFile()

// получть элеимент
let getElemnst = () => {

}
getElemnst()

//Созданеи родительского элемента
let createParentElement = () => {

}
createParentElement()

//Начать игру
let startGame = () => {

}
startGame()

// Отправить сообщение 
let sendMessage = () => {

}
sendMessage()





//                                                                Задание 2.




// 1 Функция для выводы имени на экран
let nameOutput = (name) => {
}
nameOutput()



// 2 Функция для выводы Фамилии на экран
let firstNameOutpu = (FirstName) => {
}
firstNameOutpu()

// 3 Функция для вывода возраста
let ageOutpu = (age) => {
ageOutpu()


// 4 Функция для вывода ФИО
let lastnameFirstNamePatronymic = (lastname,FirstName,Patronymic) => {
}
lastnameFirstNamePatronymic()


// 5 Функция для вывода города , улица, дома номер
let cityStreetHouseNumber = (City,Stree,House,Number) => {
}
cityStreetHouseNumber()

// 6  Марка вашего автомобиля 
let brandYourCar = (brand) => {
}
brandYourCar()


// 7 Количество братьев
let numberOfBrothers = (number) => {
}
numberOfBrothers()

// 8 Количество сестер
let numberOfSisters = (number) => {
}
numberOfSisters()

// 9 Количество человек в семье
let numberFamily = (numberFamily) => {
}
numberFamily()


// 10 Ваш номер телефона?
let myNamberMobole = (number) =>{

}
myNamberMobole()
//                                                                Задание 3


// 1 Функция для выводы имени на экран
let nameOutput = (name) => {
    return 'Очень приятно ' + name

}
nameOutput('Адам')



// 2 Функция для выводы Фамилии на экран
let firstNameOutpu = (FirstName) => {
    return 'Фамилия : ' + FirstName

}
firstNameOutpu('Амхадов')

// 3 Функция для вывода возраста
function ageOutpu(age){
    return 'Ваш возраст ' + age
    
}
ageOutpu(12)


// 4 Функция для вывода ФИО
let lastnameFirstNamePatronymic = (lastname,FirstName,Patronymic) => {
return `ФИО: ${lastname} ${FirstName} ${Patronymic}`
}
lastnameFirstNamePatronymic('Amkhadov','Adam','Magometovich')


// 5 Функция для вывода города , улица, дома номер
let  cityStreetHouseNumber  = (City,Stree,House,Number) => {
  return `Ваше место проживания : ${City},${Stree}, улица ${House}, квартира ${Number}`
  }
  console.log(cityStreetHouseNumber('Magas','Borova','45','12'))

// 6  Марка вашего автомобиля 
let brandYourCar = (brand) => {
    return 'Марка вашего автомобиля ' + brand
}
brandYourCar('Ford')


// 7 Количество братьев
let numberOfBrothers = (number) => {
return 'Количество братьев: ' + number 

}
numberOfBrothers(5)

// 8 Количество сестер
let numberOfSisters = (number) => {
  return 'Количество сестер: ' + number 
  console.log(d)
  }
  numberOfSisters(6)

// 9 Количество человек в семье
let numberFamily = (numberFamily) => {
    return 'Количество человек в семье ' + numberFamily
    
}
numberFamily(7)



// 10 угадать сколько мне лет

let howManyAge = (age) => {
    if(age > 24){
      console.log('слишком много')
    } if(age == 24){
      console.log('правильно')
    }  else {
      console.log('не правильно')
    }
    }
    howManyAge(24)



//Задача 4. Создай пять разных функций, каждая из которых принимает один параметр.
// Затем функция должна вернуть
// значение этого параметра, умноженное на два. Выведи результат работы функции в консоль.


// 1 Функция для вывода возраста
let ageOutpu = (age) => {
    return 'Ваш возраст ' + age * 2
}
ageOutpu(12)


// 2 (умножение на 2)
let increase_2 = (number) => {
return 'Резултат ' + number * 2
}
increase_2(2)

// 3  (умножение на 2 другой вариант)

let increase_2 = (number) => {

    return number*2
}
increase_2(2)
 
//4 

let number = (number) => {
return Speed * 2
}
console.log(number(2))

//5 
let  numberSpeed = (Speed) => {
return Speed * 2
}
console.log(number(2))



// Задача 5. Создай функцию, которая принимает в качестве параметра массив и возвращает первый элемент этого массива. Вызови функцию в консоль.


function elemntsMassiv(name){
  return name[0]
}
console.log(elemntsMassiv([12,23,'Adam']))

//Задача 6. Создай функцию, которая принимает в качестве 
//параметра массив и возвращает последний элемент этого массива. Вызови функцию в консоль.
let elemntsMassiv = (name) => {
  return name[name.length-1]
}
console.log(elemntsMassiv([12,23,'Adam']))

/*Задача 7. Добавь комментарии к каждой строке следующего кода:
Данная функция объединяет 2 имени в одну переменную fullname , после чего функция возвращает данные в переменной в свое изначальное значение в функции.
*/
let printMyFullName = (firstname, secondname) => {
  const fullname = `${firstname} ${secondname}`;
  
  return fullname;
}

console.log(printMyFullName('into', 'code'));
  
/* Данная функция проверяет на условие (ЕСЛИ меньше  количество(длина)элементво массива чем 2?) 
если да , возвращать сообщение в функцию  'леее, минимум два элемента нужно жи есть';  ИНАЧЕ 
 к переменной lastIndex равен последний элемент массива (arr.length - 1) и возвращать 
 arr[0] + arr[lastIndex];-  первый элемент массива плюс последний элемент массива(СУММА), так как 
 lastIndex = arr.length - 1;     ВКЛЮЧАЕТСЯ ФУНКЦИЯ В КОНСОЛЕ, 2 ВКЛЮЧАЕТСЯ ФУНКЦИЯ В КОНСОЛЕ 
 ГДЕ УЖЕ УКАЗЫВАЮТСЯ НЕ ПОСРЕДСТВЕННО САМИ ЭЛЕМЕНТЫ МАССИВА ТАК КАК РАННЕ ОНА БЫЛА ПУСТА.

*/
const getSumOfFirstAndLastElement = (arr) => {
  if(arr.length < 2) {
    return 'леее, минимум два элемента нужно жи есть';
  } else {
    const lastIndex = arr.length - 1;
    
    return arr[0] + arr[lastIndex];
  }
}

console.log(getSumOfFirstAndLastElement([]))

console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]))

//   Задача 8. Напиши к следующему коду комментарий, объясняющий почему функция возвращает "html" вместо "css".
/*
Дело в том что , в консоле вызвали функцию  с ее результатом, но так как переменная text = 'html',
стоит в  внутри функции то он возвращает только ту переменную которая находиться в внутри функции
а let text = "css"; -  стоит за пределами функции.

*/
let text = "css";
  
const testVariableScope = () => {
  let text = "html";
  
  return text;
}

console.log(testVariableScope());

//Задача 9: Погугли и узнай почему следующий код выполняется несмотря на то, что функция объявлена после того, как используется (то есть вызывается).


const addToNumbers = (x, y) => {
  return x + y;
}
console.log(addToNumbers(4, 8))







