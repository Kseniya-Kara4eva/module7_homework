//Задание 1

const user1 = function(info) {
  info = {Имя: 'Петрова',
  Фамилия: 'Ольга',
  Возраст: '30'}
for (let key in info) {
  console.log(key+ ': ' + info[key]);
}
  
 }
user1();