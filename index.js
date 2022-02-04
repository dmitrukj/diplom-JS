//ЗАДАНИЕ 1

//a)Создать свою реализацию функции map для массивов  (map - вызывает callback один раз для каждого элемента и возвращает новый массив)

// Array.prototype.map2 = function (callback, thisArg) {
//   if (this == null) {
//     throw new Error("Cant iterate over undefined or null");
//   }

//   let context = this;
//   let o = Object(this);

//   if (arguments.length > 1) {
//   }

//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }
//   let len = o.length;
//   let newArr = [];
//   let i = 0;

//   while (i < len) {
//     if (i in o) {
//       newArr[i] = callback.call(context.this[i], i, 0);
//     }
//     i++;
//   }
//   return newArr;
// };

//JSON.stringify   ([1,2,3].map(function(x) { return x + 1; })) === [2,3,4];

//  let Arr = [1, 2, 3];
// const newArr = Arr.map(el => el += 1)
// console.log(newArr)

// б) Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }.
//Использовать функцию map

// let newReleases = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg&quot",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470&quot",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg&quot",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470&quot",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     id: 65432445,
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg&quot",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470&quot",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg&quot",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470&quot",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];
// let newReleases2 = newReleases.map(({ id, title }) => ({ id, title }));
// console.log(newReleases2);

// в) Создать свою реализацию функции filter для массивов(filter - создает новый массив, с элементами, которые прошли проверку, задаваемой функцией)

// Array.prototype.filter = function (callback, thisArg) {
//   if (this == null) {
//     throw new Error("Cant iterate over undefined or null");
//   }

//   let context = this;
//   let o = Object(this);

//   if (arguments.length > 1) {
//     context = thisArg;
//   }

//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }
//   let len = o.length;
//   let res = [];

//   for (let i = 0; i < len; i++) {
//     if (i in o) {
//       let current = this[i];
//       if (callback.call(context.current, i, 0)) {
//         res.push(current);
//       }
//     }
//   }
//   return res;
// };

//   // JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === [3];

// let Arr = [1, 2, 3];
// const getNumber = () => {
//   return Arr.filter((x) => x > 2);
// };
// console.log(Arr.filter((x) => x > 2));

//г)Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных используйте newReleases из предыдущих заданий.

// let ids = newReleases.filter((title) => title.rating >= 5);

// console.log(ids);

//д) Создать свою реализацию функции reduce для массивов(reduce - применяет callback к каждому элементу массива, и возвращает одно результирующее значение  )

// Array.prototype.reduce = function (callback, result) {
//   let i = o;

//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// [1,2,3].reduce(function(memo, item) { return memo + item; }); === [6];
// [1,2,3].reduce(function(memo, item) { return memo + item; }, 10); === [16];

// let arr = [1, 2, 3];

// let newArr = arr.reduce((memo, item) => {
//   return memo + item;
// });
// console.log(newArr);

// let arr = [1, 2, 3];

// let newArr = arr.reduce((memo, item) => {
//   return memo + item;
// }, 10);
// console.log(newArr);

//е)  С помощью функции reduce получить максимальное значение в массиве

// var ratings = [2, 3, 1, 4, 5];

// let newRating = ratings.reduce((acc, el) => {
//   return Math.max(el);
// });
// console.log(newRating);

//ж) С помощью функций map, reduce, вывести url у которого самая большая площадь

// var boxarts = [
//   {
//     width: 200,
//     height: 200,
//     url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
//   },
//   {
//     width: 150,
//     height: 200,
//     url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
//   },
//   {
//     width: 300,
//     height: 200,
//     url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
//   },
//   {
//     width: 425,
//     height: 150,
//     url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
//   },
// ];

// let newBoxarts = boxarts.map((el) => {
//   return el.width * el.height;
// });
// console.log(newBoxarts);

// let urlBoxarts = newBoxarts.reduce((acc, el) => {
//   return Math.max(el);
// });

// console.log(urlBoxarts);

////////////// ЗАДАНИЕ 2

//Выведите указанные внизу ответы

// var Robot = function (name) {
//   this.name = name;
// };

// function add(op1, op2) {
//   this.name = this.name || "Human";
//   return this.name + " can count to " + (op1 + op2);
// }

// var voltron = new Robot("Voltron");

// // #1 Выведите результат сложения 0 и 1
// // Human can count to 1;

// add(1, 2);
// console.log(add(0, 1));

// // #2 Выведи результат сложения Voltron 1 и 2 используя call
// // “Voltron can count 3”

// add.call(1, 2);
// console.log(add.call(voltron, 1, 2));

// // #3 Выведи результат сложения Voltron 20 и 30 используя apply
// // “Voltron can count 50”

// add.apply([20, 30]);
// console.log(add.apply(voltron, [20, 30]));

// // #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
// // “Voltron can count drinkingbeer”

// add.bind(voltron)("drinking", "beer");
// console.log(add.bind(voltron)("drinking", "beer"));

//5 Написанный вами код должен вывести console.log имени которое лежит в
//this.name пятью разными способами

// function showName() {
//   setTimeout(() => {
//     console.log(`I robot  ${this.name}`);
//   }, 1000);
// }

// showName(this.name);
// showName.call(this.name);
// showName.apply(this.name, []);
// showName.bind(this.name)();

//ЗАДАНИЕ 3

//a)
//Создать кнопку по нажатию на которую в консоль выведет фразу ‘Hello
//World’ с задержкой в 5 секунд, при повторном нажатии в течении 5 секунд
//время должно пойти заново

// const btn1 = document.querySelector(".btn1");

// const myClick = () =>
//   btn1.addEventListener("click", () =>
//     setTimeout(() => {
//       console.log("Hello Word");
//     }, 5000)
//   );
// if ("click" == 2) {
//   setTimeout(() => {
//     console.log("Hello Word");
//   }, 2000);
// }
// myClick();

//Б)
// Создать кнопку по нажатию на которую будет выводить в консоль ‘You
//are welcome! ’ каждые 3 секунды, пока не нажмем на кнопку еще раз

// const btn1 = document.querySelector(".btn1");
// let timeInterval;

// btn1.addEventListener("click", () => {
//   if (!timeInterval) {
//     timeInterval = setInterval(() => console.log("You are welcome!!!"), 3000);
//   } else {
//     clearInterval(timeInterval);
//   }
// });

//////////ЗАДАНИЕ 4

//В
// Написать Promise который выводит console.log в случае если время
//выполнения не превысило 2 секунд, и console.error в случае если
//превысило. Время должно определяться случайным образом,
//использовать внутренний обработчик ошибок для Promise

// const myPromise = new Promise((resolve, reject) => {
//   if (Math.random() * 100 <= 90) {
//     const res = {
//       name: "Dima",
//       email: "dima@mail.ru",
//     };
//     resolve(res);
//   }
//   const res2 = new Error("Error , not name and email");
//   reject(res2);
// });
// console.log(res);

//Задание 5 Что не так с этим кодом? Предложить исправленную версию.

//1)

// function loadVideosAsync() {
//   return promise.then(function (videos) {
//     loadMetaAsync().then(function (meta) {
//       DoSomething(videos, meta);
//     });
//   });
// }
//2)

// function anAsyncCall() {
//   var promise = doSomethingAsync();
//   return promise.then(function () {
//     somethingComplicated();
//   });
// }

//3)

// function getAllDocs() {
//   return promise
//     .then(function (result) {
//       result.rows.forEach(function (row) {
//         db.remove(row.doc);
//       });
//     })
//     .then(function () {})
//     .cath(function () {});
// }

//4)

// function doAsync() {
//   return promise.then(
//     function () {
//       throw new Error("nope");
//     }.cath(function () {})
//   );
// }
