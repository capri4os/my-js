// Задание 1
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// var n = 100;
// var i = 1;
// while (true) {
//     if (i % 1 == 0 && i % i == 0) //не работает так, как хотелось бы
//         console.log(i++);
//     if (i > n)
//         break;
// }


// Задание 2
// С этого урока начинаем работать с функционалом интернет - магазина. Предположим, есть сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// Задание 3
// Товары в корзине хранятся в массиве.Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// var goods = [
//     {
//         "title": "Товар 1",
//         "price": 100,
//         "count": 1,
//     },
//     {
//         "title": "Товар 2",
//         "price": 200,
//         "count": 2,
//     },
//     {
//         "title": "Товар 3",
//         "price": 300,
//         "count": 3,
//     },
// ];

// function countBasketPrice(items) {
//     var s = 0;
//     for (var item of items) {
//         s = s + (item.price * item.count);
//     }
//     return s;
// }

// console.log(countBasketPrice(goods));

//     Задание 4 *
//         Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.Выглядеть это должно так:
// for (…) {// здесь пусто}

// for (var x = 1; x <= 10; console.log(x++)) {

// }


//     Задание 5 *
//         Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//     x
//     xx
//     xxx
//     xxxx
//     xxxxx

// var arr = [
//     'x',
//     'xx',
//     'xxx',
//     'xxxx',
//     'xxxxx',
//     'xxxxxx',
//     'xxxxxxx',
//     'xxxxxxxx',
//     'xxxxxxxxx',
//     'xxxxxxxxxx',
//     'xxxxxxxxxxx',
//     'xxxxxxxxxxxx',
//     'xxxxxxxxxxxxx',
//     'xxxxxxxxxxxxxx',
//     'xxxxxxxxxxxxxxx',
//     'xxxxxxxxxxxxxxxx',
//     'xxxxxxxxxxxxxxxxx',
//     'xxxxxxxxxxxxxxxxxx',
//     'xxxxxxxxxxxxxxxxxxx',
//     'xxxxxxxxxxxxxxxxxxxx',
// ];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } 
