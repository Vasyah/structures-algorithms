/**
 * Бинарный поиск - алгоритм для поиска, суть его в том, что происходит последовательный перебор элементов,
 * всегда проверяем середину массива и сравниваем с искомым значением, если >, то работает с половиной массива,
 * которая больше среднего значения, если меньше, то с половиной, которая меньше и так до тех пор, пока элемент не будет найден
 * Условие: Исходный массив отсортирован по возрастанию
 * Сложность: O(log2n)
 */
"use strict";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;
function binarySearch(searchItem, sortedArray) {
  let start = 0;
  let end = sortedArray.length - 1;

  const getMiddle = () => Math.floor((end + start) / 2);
  let middle = getMiddle(end, start);

  let found = false;

  console.log(sortedArray);
  while (!found && start <= end) {
    count += 1;
    console.log({
      start,
      end,
      middle,
      count,
    });
    if (sortedArray[middle] === searchItem) {
      found = true;
      return searchItem;
    }

    if (sortedArray[middle] < searchItem) {
      start = middle + 1;
      middle = getMiddle();
      // всё, что после этого элемента берём
    } else {
      end = middle - 1;
      middle = getMiddle();
    }
  }

  return null;
}
