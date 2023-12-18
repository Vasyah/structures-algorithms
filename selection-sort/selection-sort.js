/**
 * Сортировка выбором - есть исходные массив, происходит его последовательный перебор и сравнения каждого элемента
 * массива с каждым, в случае, если элемент массива меньше того, с котороым происходит сравнение, то
 * происходит их замена и так до тех пор, пока массив не будет отсортирован
 *  */

const array = [
  1, 3, 5, 0, -1, 3, 5, 8, 33, 50, 99, -10, -150, 1, 3, 5, 0, -1, 3, 5, 8, 33,
  50, 99, -10, -150, 1, 3, 5, 0, -1, 3, 5, 8, 33, 50, 99, -10, -150, 1, 3, 5, 0,
  -1, 3, 5, 8, 33, 50, 99, -10, -150,
];

let count = 0;

function selectionSort(array) {
  console.time("for sorting");
  const copyArray = [...array];
  for (let i = 0; i < copyArray.length; i++) {
    // индекс минимального значения, изначально считаем, что это само число
    let indexMin = i;

    for (let j = i + 1; j < copyArray.length; j++) {
      count += 1;
      const currentElement = copyArray[i];
      const nextElement = copyArray[j];

      if (nextElement < currentElement) {
        indexMin = j;
      }
    }

    const temp = copyArray[i];

    copyArray[i] = copyArray[indexMin];
    copyArray[indexMin] = temp;
  }

  console.timeEnd("for sorting");
  return copyArray;
}

console.log({
  array,
  sortedArray: selectionSort(array),
  count,
  length: array.length,
  difficult: count / array.length ** 2,
});

// Сложность такого алгоритма - O(n*2) - потому что количество итераций сравнимо с квадратом n - числом элементов массива
// Но дробная часть не считается
