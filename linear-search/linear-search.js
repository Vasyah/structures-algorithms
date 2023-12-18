/**
 * Линейный поиск - алгоритм, предназначенный для последовательного перебора каждого элемента массива
 * для поиска искомого элемента
 *
 * Сложность: O(n)
 */
"use strict";
const array = [1, 2, 3, 5, 6, 8, 9, 10, 34, 50, 47, 28, 5, 1, 2, 3, 5];

let count = 0;

function linearSearch(searchItem, array) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === searchItem) {
      return i;
    }
  }

  return null;
}

const result = linearSearch(34, array);
console.log({ count, found: result });
