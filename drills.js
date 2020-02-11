const array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

function quickSort(array, start = 0, end = array.length) {
    console.log(array, "array");
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log(middle, "middle");
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

quickSort(array);
