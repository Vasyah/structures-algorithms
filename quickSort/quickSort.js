/**
 * Алгоритм быстрой сортировки - суть в том, что ищется средняя точка массива, далее происходит формирование двух массивов
 * в один помещаются все значения, которые меньше средней точки, в другой все, что больше средней точки, после чего
 * операция повторяется до тех пор, пока не останется одно значение в массиве
 */
const array = [
  1, 3, 5, 0, -1, 3, 5, 8, 33, 50, 99, -10, -150, 1, 3, 5, 0, -1, 3, 5, 8, 33,
  50, 99, -10, -150, 1, 3, 5, 0, -1, 3, 5, 8, 33, 50, 99, -10, -150, 1, 3, 5, 0,
  -1, 3, 5, 8, 33, 50, 99, -10, -150,
];
let count = 0;

function quickSort(array) {
  const copyArray = [...array];

  if (copyArray.length <= 1) return copyArray;

  // середина массива
  const middle = Math.floor(copyArray.length / 2);
  // хранилище для значений больше middle
  let great = [];
  // хранилище для значений меньше middle
  let less = [];

  for (let index = 0; index < copyArray.length; index++) {
    count += 1;

    if (index === middle) continue;

    if (copyArray[index] < copyArray[middle]) less.push(copyArray[index]);
    else great.push(copyArray[index]);
  }

  console.log({ less, middle, great });
  return [...quickSort(less), array[middle], ...quickSort(great)];
}

console.log({ result: quickSort(array), count });

// Количество элементов 13, количество итераций - 38 O(log2n*n)
