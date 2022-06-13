
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


/// Задание 3

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели", '');
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){
    for (let i=0; i<2; i++){
    
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b= prompt("На сколько его оцените", '');
              if(a != null && b != null && a !='' && b !='' && a.length < 50)
              {
                personalMovieDB.movies[a] = b;
                console.log('done');
              }else{
                  i--;
                  console.log('error');
              }
    }
}


rememberMyFilms();
    
    

    function detectPersonalLevel(){
        if(personalMovieDB.count <10){
            console.log("Просмотренно довольно мало фильмов");
        }else if(personalMovieDB.count >10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count > 30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    }

    detectPersonalLevel();

function showMyDB (attr) {
    if(!attr){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
let genres = [];
function writeYourGenres (){
    for(let i =1; i <= 3; i++){
        let genre = prompt(`Ваш любимый жанр под номером${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres();