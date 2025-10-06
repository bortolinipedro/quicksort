module.exports = { quickSort };

function quickSort(arr, low, high, counters = { comparisons: 0, swaps: 0 })
{
    counters.comparisons++;
    if (low < high) {

        let pi = partition(arr, low, high, counters);

        quickSort(arr, low, pi - 1, counters);
        quickSort(arr, pi + 1, high, counters);
    }
    return counters;
}

function partition(arr, low, high, counters)
{
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

function swap(arr, i, j, counters)
{
    counters.swaps++;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}