// Рекурсия - это процесс вызова функции самой себя, при использовании рекурсии всегда должна быть точка выхода

// Поиск факториала - факториал - это произведение всех чисел от n до 1
function factorial(n) {
  if (n === 1) return 1;

  const nextNumber = n - 1;

  return n * factorial(nextNumber);
}

console.log("factorial:", factorial(3));
// Расчёт числе фибоначи - каждое последующее числа является суммой двух предыдущих, за исключением того, что первые два равны единице
function fibbonachi(n) {
  if (n === 1 || n === 2) return 1;

  return fibbonachi(n - 1) + fibbonachi(n - 2);
}

console.log("fibbonachi:", fibbonachi(5));
