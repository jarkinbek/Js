// Условие

// 2 == 2 - сравнивает наши значения между двумя элементами ( операндами ) не строгое сравнение

// 2 === 2 - сравнивает наши значения и типы данных между двумя элементами - строное сравнение

// if(1 == '1') {
//     console.log("Привет");
// }else {
//     console.log('Пока');
// }


// var a = prompt('Введите слово Привет');

// if(a === 'Привет') {
//     console.log("Вы молодец");
// }else {
//     console.log('Вы холодец');
// }


// var mark = +prompt('Введите любое число');

// if(mark === 5) {
//     console.log('ты получишь тачку');
// }else if(mark == 5) {
//     console.log('ты получишь айфон');
// }else {
//     console.log('тебя убьют');
// }





// var secret = prompt('Введите секретное слово');

// if(secret == 'admin' || secret == 'админ' || secret == 'zafar') {
//     console.log('Вы угадали');
// }else {
//     console.log('сорян');
// }


//  || - оператор или
//  && - оператор и 
// ! - восклицательный знак перед значением или функцией возвращает противоположное значение
// isNaN() - функция проверяет на NaN если внутри значение NaN то отдаст true


//  var a = +prompt('Введите первое число');
//  var b = +prompt('Введите второе число');

//  if(a > b && !isNaN(a) && !isNaN(b) ) {
//      console.log(a + ' больше чем ' + b);
//  }else if(b > a && !isNaN(a) && !isNaN(b) ) {
//      console.log(b + ' больше чем ' + a);
//  }else if(b == a && !isNaN(a) && !isNaN(b) ) {
//      console.log(a + ' равно ' + b);
//  }else {
//      console.log('Вы ввели не число');
//  }


// var num = +prompt('Введите день недели');

// switch(num) {
//         case 1:
//             alert('Пн');
//             break;
//         case 2:
//             alert('Вт');
//             break;
//         case 3:
//             alert('Ср');
//             break;
//         case 4:
//             alert('Чт');
//             break;
//         default:
//             alert('Такого дня недели нету');
//             break;
// }

//if(2 === 2) {
  //  console.log('good');
//}else {
  //  console.log("bad");
//}

//var x = 2 === 2 ? 'good' : 'bad';

//console.log(x);

//* / первое задание

var a = +prompt('Введите свой возраст');

if ( a >= 0 && a <= 18) {
    console.log('Вы еще молоды. Вам нужно работать');
} else if (  a >= 18 && a <= 50)  {
    console.log('Вам нужно работать');  
}else if ( a >= 50 && a <= 59) {
  console.log('Вам скоро на пенсию');
}else if (a >= 59 && a <= 150) {
    console.log('Вы еще молоды. Вам нужно работать');
}

//второе задание

var clock = +prompt('Введите время');

switch (clock) {
    case 1:
        alert(1 + " час ночи");
        break;
    case 2:
        alert(2 + " часа ночи");
        break;
    case 3:
        alert(3 + " часа ночи");
        break;
    case 4:
        alert(4 + " часа утра");
        break;
    case 5:                           
        alert(5 + " часов утра");
        break;
    case 6:
        alert(6 + " часов утра");
        break;
    case 7:
        alert(7 + " часов утра");
        break;
    case 8:
        alert(8 + " часов утра");
        break;
    case 9:
        alert(9 + " часов утра");
        break;
    case 10:
        alert(10 + " часов утра");
        break;
    case 11:
        alert(11 + " часов утра");
        break;
    case 12:
        alert(12 + " часов дня");
        break;
    case 13:
        alert(1 + " час дня");
        break;
    case 14:
        alert(2 + " часа дня");
        break;
    case 15:
        alert(3 + " часа дня");
        break;
    case 16:
        alert(4 + " часа дня");
        break;
    case 17:
        alert(5 + " часов вечера");
        break;
    case 18:
        alert(6 + " часов вечера");
        break;
    case 19:
        alert(7 + " часов вечера");
        break;
    case 20:
        alert(8 + " часов вечера");
        break;
    case 21:
        alert(9 + " часов вечера");
        break;
    case 22:
         alert(10 + " часов вечера");
         break;
     case 23:
         alert(11 + " часов вечера");
         break;
     case 24:
         alert(12 + " часов ночи");
         break;                           
 }

 //третие задание 
  

var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третие число');


if (a > b && b < c || a < b && a > c) {
    alert("Среднее число: " + a);
} else if (b > a && b < c || b < a && b > c) {
    alert("Среднее число: " + b)
} else if (c > a && c < b || c <a && c > b) {
    alert("Среднее число: " + c)
}