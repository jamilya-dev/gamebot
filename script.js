'use strict'

function hiddenNumber(num) {
  let number = prompt('Угадай число от 1 до 100');

  return function conditions() {
    if (number === null || number === 0) {
      alert('Игра окончена');
      return;
    }

    if (isNaN(number) || number === '') {
      number = prompt('Введи число!');
      conditions();
      return;
    }

    if (number > num) {
      number = prompt('Загаданное число меньше');
      conditions();
    } else if (number < num) {
      number = prompt("Загаданное число больше");
      conditions();
    } else if (number == num) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    }
  }
}

const func = hiddenNumber(15);
func();
