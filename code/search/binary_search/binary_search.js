function binarySearch(array, key) {
    let low = 0,
        high = array.length - 1,
        mid,
        element;
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10); //Formula for Finding MID..
        
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
           high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
