//Задание 2

const user1 = function(str, info) {
 str = "Информация об участнике:";
  info = {Имя: 'Петрова',
  Фамилия: 'Ольга',
  Возраст: '30'}
for (let key in info) {
  console.log(str, key+ ': ' + info[key]);
}
 }
user1();
function check(key, info) {
	console.log(key in info);
};
check('Имя', user1)
