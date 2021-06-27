var array1 = [2, 3, 5, 7, -10, 115, 0, -13, 2];
console.log("Массив 1: " + array1);

function sortDescending(array) {
    return array.sort(function (a, b) {
        return b - a;
    });
}

console.log("Массив 1, упорядоченный по убыванию: " + sortDescending(array1));

function sliceFirstFive(array) {
    return array.slice(0, 5);
}

console.log("Подмассив 1 из первых пяти элементов массива 1: " + sliceFirstFive(array1));

function sliceLastFive(array) {
    return array.slice(array.length - 5, array.length);
}

console.log("Подмассив 2 из последних пяти элементов массива 2: " + sliceLastFive(array1));

var array2 = [];

for (var i = 1; i < 101; i++) {
    array2.push(i);
}

console.log("Массив 2: " + array2);

function getSquaredEvenNumbers(array) {
    return array.filter(item => item % 2 === 0).map(item => item * item);
}

console.log("Массив квадратов четных чисел из массива 2: " + getSquaredEvenNumbers(array2));