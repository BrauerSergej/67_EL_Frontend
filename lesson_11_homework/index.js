// Задание 1
// Напишите функцию, которая принимает два числа и возвращает большее значение. Вызов функции присвоить переменной и отобразить результат(переменную) в консоле
function eqaulsNumbers(number1 = 6, number2 = 8) {
  if (number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  } else {
    return "Numbers are equal";
  }
}

const bigNumber = eqaulsNumbers();
console.log(bigNumber);

// Задание 2
// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.
const findCarByIndex = (array, index) => {
  if (array.length <= index || index < 0) {
    return `Car with index ${index} not found`;
  } else {
    return array[index];
  }
};

const cars = ["BMW", "Mercedes", "Audi", "Opel", "Porsche"];
console.log(findCarByIndex(cars, 3));

// Задание 3
// Создайте функцию getWeather, которая бы принимала следующие параметры: код погоды и функцию decode(которая дает расшифровку погоды по коду). Функция decode должна возвращать строку, описывающую погоду, а фукнция getWeather должна возвращать результат выполнения функции decode
// Таблица соответствия код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS - песчаная буря (видимость менее 10 км) Подсказка: удобно использовать switch-case в функции decode для расшифровки погоды по коду
const decode = (code) => {
  switch (code) {
    case "SQ": {
      return "шквал";
    }
    case "PO": {
      return "пыльный вихрь";
    }
    case "FC": {
      return "торнадо";
    }
    case "BR": {
      return "дымка (видимость от 1 до 9 км)";
    }
    case "HZ": {
      return "мгла (видимость менее 10 км)";
    }
    case "FU": {
      return "дым (видимость менее 10 км)";
    }
    case "DS": {
      return "пыльная буря (видимость менее 10 км)";
    }
    case "SS": {
      return "песчанная буря (видимость менее 10 км)";
    }
    default: {
      return "Неизвестный код погоды";
    }
  }
};

const getWeather = (code, decode) => {
  return decode(code);
};
console.log(getWeather("FU", decode));
