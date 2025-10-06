module.exports = { hybridQuickSort };

const M = 10;

function hybridQuickSort(arr, low, high, counters = { comparisons: 0, swaps: 0 }, threshold = M) {
    counters.comparisons++;
    if (low < high) {
        counters.comparisons++;
        if (high - low + 1 <= threshold) {
            insertionSort(arr, low, high, counters);
            return;
        }

        let pi = partition(arr, low, high, counters);

        hybridQuickSort(arr, low, pi - 1, counters, threshold);
        hybridQuickSort(arr, pi + 1, high, counters, threshold);
    }
    return counters;
}

function partition(arr, low, high, counters) {
    const m = medianOfThree(arr, low, high, counters);

    swap(arr, m, high, counters);
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        counters.comparisons++;
        counters.comparisons++;
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j, counters);
        }
    }
    swap(arr, i + 1, high, counters);
    return i + 1;
}

function medianOfThree(arr, low, high, counters) {
    const mid = Math.floor((low + high) / 2);

    counters.comparisons++;
    if (arr[low] > arr[mid]) {
        swap(arr, low, mid, counters);
    }

    counters.comparisons++;
    if (arr[low] > arr[high]) {
        swap(arr, low, high, counters);
    }

    counters.comparisons++;
    if (arr[mid] > arr[high]) {
        swap(arr, mid, high, counters);
    }

    return mid;
}

function swap(arr, i, j, counters) {
    counters.swaps++;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function insertionSort(arr, left, right, counters) {
    for (let i = left + 1; i <= right; i++) {
        counters.comparisons++;
        let key = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > key) {
            counters.comparisons++;
            counters.comparisons++;
            arr[j + 1] = arr[j];
            counters.swaps++;
            j = j - 1;
        }
        counters.comparisons++;
        arr[j + 1] = key;
    }
}