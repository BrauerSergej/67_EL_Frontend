const temperature = Number(prompt("Введите температуру:"));
if (temperature < 0) console.log("Холодно!");
else if (temperature <= 20) console.log("Прохладно");
else if (temperature <= 30) console.log("Тепло");
else console.log("Жарко!");