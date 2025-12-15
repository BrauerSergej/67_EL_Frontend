// Задание 1
// У вас есть массив объектов:
// const cars = [ { brand: "BMW", price: 20000, isDiesel: true }, { brand: "Mercedes", price: 22000, isDiesel: false }, { brand: "Porshe", price: 50000, isDiesel: true }, { brand: "Nissan", price: 25000, isDiesel: false }, ];
// Создайте на основе страрого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCarsArray = cars.map((car) => {
  // Вариант: 1
  // return {brand: car.brand, isDiesel: car.isDiesel};
  // Вариант: 2
  const { price, ...rest } = car;
  return rest;
});
// console.log(newCarsArray);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
// const carsWithDiesel = cars.filter((car) => {
//   return car.isDiesel === true;
// });
// console.log(carsWithDiesel);

const carsWithDiesel = cars.filter((car) => car.isDiesel === true);
// console.log(carsWithDiesel);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
// const carsWithOutDiesel = cars.filter((car) => {
//   return car.isDiesel === false;
// });
// console.log(carsWithOutDiesel);

const carsWithOutDiesel = cars.filter((car) => !car.isDiesel);
// console.log(carsWithOutDiesel);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
let sumPriceWithOutDiesel = 0;

cars.forEach((car) => {
  if (car.isDiesel === false) {
    sumPriceWithOutDiesel = car.price + sumPriceWithOutDiesel;
  }
});
console.log(sumPriceWithOutDiesel);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.
cars.forEach((car) => {
  car.price *= 1.2;
});
console.log(cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const teslaCars = cars.map((car) => {
  if (car.isDiesel) {
    return { brand: "Tesla", price: 25000, isDiesel: false };
  } else {
    return car;
  }
});

console.log(teslaCars);
