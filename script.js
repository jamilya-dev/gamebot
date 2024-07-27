'use strict'

function hiddenNumber(num) {
  let number = prompt('Угадай число от 1 до 100');

  function conditions() {
    if (isNaN(number)) {
      number = prompt('Введи число!');
      conditions();
    }

    if (number === null) {
      alert('Игра окончена')
      return
    }

    if (number === '') {
      number = prompt('Введи число!');
    }

    if (number > num) {
      number = prompt('Загаданное число меньше');
      conditions();
    } else if (number < num) {
      number = prompt("Загаданное число больше");
      conditions();
    } else if (number == num) {
      alert('Поздравляю, Вы угадали!!!')
      return
    }
  }
  return conditions;
}

const func = hiddenNumber(15);
func();
