const products = [
  {
    id: 1,
    type: "Jeans",
    gender: "men",
    price: 250,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/b8/3f/b83f0131eaff47773d6ba3e3024b299439bc963e.jpg?imwidth=396",
  },
  {
    id: 2,
    type: "Jeans",
    gender: "women",
    price: 220,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/0c/5d/0c5d1c4971a174cf01248f54b61109dacd3a30d9.jpg?imwidth=396",
  },
  {
    id: 3,
    type: "Jeans",
    gender: "men",
    price: 270,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/ae/d6/aed6b79ed54b1e09edce79aebd86e3f0f075be92.jpg?imwidth=396",
  },
  {
    id: 4,
    type: "Jeans",
    gender: "women",
    price: 230,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/4c/7b/4c7b4a7b8e6f3680f8c4f8e4f25e56201c38ff5f.jpg?imwidth=396",
  },
  {
    id: 5,
    type: "T-shirt",
    gender: "men",
    price: 800,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/77/bd/77bd9ef47352b39ddc0dff7b124463244661f879.jpg?imwidth=396",
  },
  {
    id: 6,
    type: "T-shirt",
    gender: "women",
    price: 700,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/08/e8/08e859002b9f71a6bdc437a7b7ef1429080cc88b.jpg?imwidth=396",
  },
  {
    id: 7,
    type: "T-shirt",
    gender: "men",
    price: 900,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/7b/2f/7b2f83487c7e145a979675a1fcbedcca51255238.jpg?imwidth=396",
  },
  {
    id: 8,
    type: "T-shirt",
    gender: "women",
    price: 750,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/69/36/6936b107995ffc923def9b329a5cda7b36deb837.jpg?imwidth=396",
  },
  {
    id: 9,
    type: "Jacket",
    gender: "men",
    price: 400,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/2a/19/2a19abe7dd8d853b52c8bea3fc40c0c3fb9f2e39.jpg?imwidth=396",
  },
  {
    id: 10,
    type: "Jacket",
    gender: "women",
    price: 350,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/d3/82/d382a96594ea7bc316124226502b41aa728881a7.jpg?imwidth=396",
  },
  {
    id: 11,
    type: "Jacket",
    gender: "men",
    price: 420,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/e4/ee/e4ee52b35b38970636fa53e6d465427af9ae62aa.jpg?imwidth=396",
  },
  {
    id: 12,
    type: "Jacket",
    gender: "women",
    price: 370,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/37/c5/37c5ca89ee19a8f99ed465ac87be5ec0529aa1c2.jpg?imwidth=396",
  },
  {
    id: 13,
    type: "Sweater",
    gender: "men",
    price: 180,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/84/b0/84b0d322c7fd6d9f6d2f146079f5f1f20d07c990.jpg?imwidth=396",
  },
  {
    id: 14,
    type: "Sweater",
    gender: "women",
    price: 160,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/22/a4/22a44d4ee577424040be124e348ae73411ae9d79.jpg?imwidth=396",
  },
  {
    id: 15,
    type: "Sweater",
    gender: "men",
    price: 200,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/4e/2d/4e2d5cb670270230f80edfefe5d402da039504b6.jpg?imwidth=396",
  },
  {
    id: 16,
    type: "Sweater",
    gender: "women",
    price: 170,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/28/74/2874d9c939be32d2a29a169ef39be46379f091d1.jpg?imwidth=396",
  },
  {
    id: 17,
    type: "Jeans",
    gender: "men",
    price: 260,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/82/2f/822f130f12e7c6bcd7067a12207ac47372aca0b2.jpg?imwidth=396",
  },
  {
    id: 18,
    type: "Jeans",
    gender: "women",
    price: 240,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/c5/79/c5795b68bb5d7d0122a655ee22600257b5490fcc.jpg?imwidth=396",
  },
  {
    id: 19,
    type: "Jeans",
    gender: "men",
    price: 280,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/fb/27/fb275470a4ae7902a07c683c9a95aecf547ace8d.jpg?imwidth=396",
  },
  {
    id: 20,
    type: "Jeans",
    gender: "women",
    price: 250,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/88/6c/886cb3feee42bdab22d2870dab81cc8a2324aed3.jpg?imwidth=396",
  },
  {
    id: 21,
    type: "T-shirt",
    gender: "men",
    price: 850,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/d7/f3/d7f3c8419e0ac5fc880f91bb617419eac795bb6d.jpg?imwidth=396",
  },
  {
    id: 22,
    type: "T-shirt",
    gender: "women",
    price: 720,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/62/d0/62d0aa839b8a0009b3ce1d04f21f1b30264ad790.jpg?imwidth=396",
  },
  {
    id: 23,
    type: "T-shirt",
    gender: "men",
    price: 920,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/7c/7e/7c7e77e03d783cd55620d867fdee6dd5340b8dd1.jpg?imwidth=396",
  },
  {
    id: 24,
    type: "T-shirt",
    gender: "women",
    price: 780,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/4e/6e/4e6e926a781a4257081da040bea47b09e1cce8ae.jpg?imwidth=396",
  },
  {
    id: 25,
    type: "Jacket",
    gender: "men",
    price: 410,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/52/64/526453cdb8adec9bcacd3841c5671350d1b49d59.jpg?imwidth=396",
  },
  {
    id: 26,
    type: "Jacket",
    gender: "women",
    price: 360,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/89/87/8987a4e732e68c5066f21a264e0b7956ef6f67ec.jpg?imwidth=396",
  },
  {
    id: 27,
    type: "Jacket",
    gender: "men",
    price: 430,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/f8/10/f8105a2e5125db1b28030a3d97d731f17b118558.jpg?imwidth=396",
  },
  {
    id: 28,
    type: "Jacket",
    gender: "women",
    price: 380,
    status: "Out of stock",
    imgUrl:
      "https://image.hm.com/assets/hm/47/74/47744c2837ae0304253ea6f2452483018704cd8d.jpg?imwidth=396",
  },
  {
    id: 29,
    type: "Sweater",
    gender: "men",
    price: 190,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/72/6f/726ff99a85e6175379564cd68abb93f2d6b95c7c.jpg?imwidth=396",
  },
  {
    id: 30,
    type: "Sweater",
    gender: "women",
    price: 175,
    status: "In stock",
    imgUrl:
      "https://image.hm.com/assets/hm/9e/e2/9ee286af20d80a6c4861e4383bc1509b0a7f2d93.jpg?imwidth=396",
  },
];

const cardsContainer = document.getElementById("cards");

// Функция renderCards(products) — рисует список карточек
function renderCards(products) {
  cardsContainer.innerHTML = ""; // очишаем контейнер

  products.forEach((item) => {
    // Создаём элемент карточки
    const card = document.createElement("div");
    card.className = "card";

    //картинка
    const image = document.createElement("img");
    image.className = "card_image";
    image.src = item.imgUrl;
    image.alt = "Product photo";

    //название товара
    const type = document.createElement("div");
    type.className = "product_type";
    type.textContent = item.type;

    //цена товара
    const price = document.createElement("div");
    price.className = "card_price";
    price.textContent = item.price + " $";

    //пол
    const gender = document.createElement("div");
    gender.className = "card_gender";
    gender.textcontent = item.gender;

    //статус товара
    const status = document.createElement("div");
    status.className = "card_status";
    status.textContent = item.status;

    // Собираем карточку
    card.appendChild(image);
    card.appendChild(type);
    card.appendChild(price);
    card.appendChild(gender);
    card.appendChild(status);

    // Добавляем карточку в контейнер
    cardsContainer.appendChild(card);
  });
}
// Первый вызов renderCards(products)
// Здесь ты передаёшь глобальный массив products в функцию renderCards.
// Внутри renderCards параметр products теперь = твой исходный массив.
// Функция: очищает контейнер; пробегает по массиву; создаёт и добавляет на страницу
// карточки для всех товаров.
// После этого ты видишь все карточки в main части.
renderCards(products);

// Работа с формой фильтрации
const FORM = document.querySelector(".form");
// * Почти правильно, давай точнее сформулируем 👇
//  *### Что значит обработчик `submit` в твоём проекте
// * В *твоём* коде:
``` FORM.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const productGender = event.target.gender.value;
//   const productPrice = event.target.price.value;
//   const productType = event.target.type.value;
// ... фильтрация products
// const productsToShow = products.filter(...)
// renderCards(productsToShow);
// });
// ```;
//  * Это по сути означает:
//  * > **Когда пользователь нажимает кнопку в форме (отправляет форму),
//  * > мы:**
// ! > 1. **Отменяем** стандартную отправку формы (чтобы страница не перезагружалась),
// ! > 2. **Читаем выбор пользователя** в фильтрах (`gender`, `price`, `type`),
// ! > 3. **Фильтруем массив товаров** по этим выборкам,
// ! > 4. **Перерисовываем карточки** только с подходящими товарами.
// * То есть да, **в твоём приложении**
// * обработчик отправки формы = «код, который запускается, когда пользователь хочет отфильтровать товары».
// *✨ Другими словами:
// ! пользователь крутит фильтры → жмёт кнопку формы → срабатывает `submit` → выполняется твоя функция → на экране обновляются карточки по выбранным фильтрам.
// * Важно только понимать:
// ! `submit` сам по себе = «форма отправлена».
// ! *Что именно* при этом происходит — решаешь ты внутри обработчика.
// ! Ты решил: *«при отправке формы я буду фильтровать товары»* — и написал эту логику внутри `(event) => { ... }`.
// Вешаем обработчик отправки формы
FORM.addEventListener("submit", (event) => {
  // Отменяем стандартное поведение формы (отправка на сервер + перезагрузка)
  event.preventDefault();

  // фильтруем товары
  // вызываем renderCards(...)
  // читаем значения полей
  // event.target — это сама форма <form ...>. event.target.gender — элемент внутри формы с атрибутом name="gender". .value — выбранное значение (например "men", "women", "all").
  const productGender = event.target.gender.value;
  const productPrice = event.target.price.value;
  const productType = event.target.type.value;

  let minPrice = 0;
  let maxPrice = Infinity; // maxPrice = Infinity — «бесконечность», т.е. фактически нет верхней границы.

  // Если пользователь выбрал All prices (value="all") → условие ложь, внутрь if мы не заходим, minPrice и maxPrice остаются:
  if (productPrice !== "all") {
    // Метод .split("-") берёт строку и разбивает её на массив по символу "-".
    const parts = productPrice.split("-");
    // parts будет: ["300", "600"]
    minPrice = Number(parts[0]);
    maxPrice = Number(parts[1]);
  }

  
});
