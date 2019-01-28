// var pi = Math.PI;
// document.write('1. Пи = ' + pi + ' число пи (2 знака после точки) = ' + pi.toFixed(2));
// console.log(pi);
// document.write("<br>");
//
// var max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
// document.write("2. Максимальное число" + " " + max);
// console.log(max);
// document.write("<br>");
//
// var min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// document.write("  " + "Минимальное число" + " " + min);
// console.log(min);
// document.write("<br>");
//
// var random = Math.random();
// document.write("3.a Случайное число" + " " + random + " " + "округление до 2-х знаков" + " " + random.toFixed(2));
// document.write("<br>");
// var random1 = (Math.random() * 50);
// document.write("  " + " b Случайное число" + " " + random1);
// console.log(random);
// console.log(random1);
// document.write("<br>");
//
// var num1 = 0.6;
// var num2 = 0.7;
// var sum = num1 + num2;
// document.write("4.Результат 06+0.7 =" + ' ' + sum + " " + "округление" + " " + sum.toFixed(1));
// document.write("<br>");
// var res = Math.round(sum * 10) / 10;
// document.write("второй вариант округления" + " " + res);
// console.log(sum);
// document.write("<br>");
//
// var number = parseInt('100$');
// document.write("5.Строка 100$" + " " + "результат" + " " + number);
// console.log(number);
//
// document.write("<br>");
// document.write("<br>");
//
// //-------------------------------------------------------------------
// let goods = {
//     product: 'iphone',
//     price: 1000,
//     currency: 'dollar',
//     details: {
//         model: 'X10',
//         color: 'white'
//     }
// };
// document.write("Характеристика товара:" + " ");
// document.write("Товар: " + goods.product + "\n\t" + "Цена: "
//     + goods.price + " " + goods.currency + "\n\t" + "Модель: " + goods.details.model + " " + goods.details.color);
//
//
// document.write("<br>");
// document.write("<br>");
// //----------------------------------------------------------------------
// document.write("Задачи по второй презентации");
// document.write("<br>");
// document.write("<br>");
//
// document.write('a=a+10' + " a+=10" + ' ' + 'b=b*18' + ' ' + 'b*=18' + ' ' + 'c=c-10' + ' ' + 'c-=10');
// document.write("<br>");
// document.write('x=a+x' + ' ' + "x+=a" + ' ' + 'y=y*z' + ' ' + 'y*=z' + ' ' + 'i=i*5*y' + ' ' + 'i*=5*y');
// document.write("<br>");
// document.write("Переменную в квадрат:" + 'x=x*x' + ' ' + ' ' + "x*=x");
// var a = 5;
// var res1 = (a *= a);
// document.write("<br>");
// document.write("Result:" + ' ' + res1);
// document.write("<br>");
// document.write("<br>");
//
// //------------------------------------------------------------------
// //Условные операторы
//
// let b = 'hidden';
// if (b) {
//     console.log('visible');
//     document.write('visible')
// } else {
//     console.log('hidden');
//     document.write('hidden')
// }
//
// b = 'hidden' ? 'visible' : 'hidden';
// console.log(b);
// document.write("<br>");

//1.Если переменная равно 0 присвоить 1
//2.Если меньше нуля - строку "less than zero"
//3.Если больше нуля *10.
// let data = -2;
// if (data==0) {
//     data=1;
// }else if (data<0) {
//     data = "less than zero";
// } else {
//     data*=10;
//     };
// console.log(data)
//
// data == 0 ? 1 : 'less than zero';
// data<0? 'less than zero':data*=10;

//Конструкция switch case
//
// let z = 'block';
// switch (z) {
//     case 'block':
//         console.log('block');
//         break;
//     case "none":
//         console.log('none');
//         break;
//     case "inline":
//         console.log('inline');
//         break;
//     default:
//         console.log('other');
// }


let someString = 'some test string';
let c = someString.charAt(0);
console.log(c);

let d = someString.length;
console.log(d);
let f = someString.charAt(someString.length-1);
console.log(f);

let g = someString.charAt(0).toUpperCase() + someString.substring(1,someString.length-1)+someString.charAt(someString.length-1).toUpperCase();
console.log(g);

let h = someString.lastIndexOf('string');
console.log(h);

let z = someString.lastIndexOf(' ', someString.indexOf(' ')+1);
console.log(z);

let l = someString.substr(5,4);
console.log(l);

let m = someString.substring(5,9);
console.log(m);

let n = someString.slice(0,-6);
console.log(n);

let a = 20;
let b = 16;
let k = a.toString()+b.toString();
console.log(k);






































































