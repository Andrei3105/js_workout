/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
// const data =[
//     {
//     firstName: 'Ashton',
//     lastName: 'Kutcher',
//     age: 40,},
//     {
//     firstName: 'Bradley',
//     lastName: 'Pitt',
//     age: 54,},
//     {
//     firstName: 'Hannah',
//     lastName: 'Dacota',
//     age: 24,},
//     ];
//
// const  searchUser= function (lastName) {
//     for (let i=0; i < data.length; i++){
//         // if (data[i].lastName.toLowerCase() === lastName.toLowerCase()){
//         const  reg = new RegExp(`${lastName}`, 'i');
//         if(lastName.length >= 2 && reg.test(data[i].lastName)){
//         return `Пользователь: ${data[i].firstName} ${data[i].lastName}, возраст ${data[i].age}`;
//         }
//     }
//     return ('No results found for your request');
// };
//
// const form = document.getElementById('searchForm');
//     form.addEventListener('submit', function (event) {
//     event.preventDefault();
//    const input = document.getElementById('searchData');
//    const paragraph = document.getElementById('searchResult');
//    paragraph.innerText = searchUser(input.value);
// }
// );



//2 ПРИМЕР С ЗАМЕНОЙ В МАССИВЕ ЭЛЕМЕНТОВ

// const myArr = [12, 53, 20, 18, 22, 200, 43, 57, 50, 1];
// const replaceZero = arr => {
//     for(let i = 0; i < arr.length; i++){
//         const item = arr[i];
//         if (!(item % 10)){
//         const reg = /0/g;
//         arr[i] = item.toString().replace(reg,'zero');
//         }
//     }
//     return arr;
// };
// const result = replaceZero(myArr);
// console.log (result);


/// Задание 3 работа с объектом
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function (){
//         personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели", '');
//         while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели", '');
//         }
//     },
//     rememberMyFilms: function (){
//         for (let i=0; i<2; i++){
        
//             const a = prompt('Один из последних просмотренных фильмов', ''),
//                   b= prompt("На сколько его оцените", '');
//                   if(a != null && b != null && a !='' && b !='' && a.length < 50)
//                   {
//                     personalMovieDB.movies[a] = b;
//                     console.log('done');
//                   }else{
//                       i--;
//                       console.log('error');
//                   }
//         }
//     },
//     detectPersonalLevel: function (){
//         if(personalMovieDB.count <10){
//             console.log("Просмотренно довольно мало фильмов");
//         }else if(personalMovieDB.count >10 && personalMovieDB.count < 30){
//             console.log("Вы классический зритель");
//         }else if(personalMovieDB.count > 30){
//             console.log("Вы киноман");
//         }else{
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function (attr) {
//         if(!attr){
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function  (){
//         for(let i =1; i < 2; i++){
//             let genre = prompt(`Ваш любимые жанры через запятую ${i}`);
//             if(genre == "" || genre == null){
//                 console.log("Вы ввели некоректные данные или вовсе не ввели их");
//             }else{
//                 personalMovieDB.genres = genre.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }
//         personalMovieDB.genres.forEach((item, value)=>{
//             console.log(`Любимый жанр ${value+1} это ${item}`);
//         })
//     },
//     toggleVisibleMyDB: function(){
//         if(!personalMovieDB.privat){
//             personalMovieDB.privat = true;
//         }else{
//             personalMovieDB.privat = false;
//         }
//     }
// };

// Работа с индексным файлом
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

