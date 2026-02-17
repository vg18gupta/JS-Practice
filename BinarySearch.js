// Input: [2, 3, 4, 4, 4, 5, 10]
// Find count of 4
const arr = [2, 3, 4, 4, 4, 5, 10];
const target = 4;

const sarchLeft = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            result = mid;
            right = mid - 1;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

const sarchRight = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            result = mid;
            left = mid + 1;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}


const searchCount = (arr, target) => {
    if(!arr.length) return;
    const firstLeft = sarchLeft(arr, target);

    if(firstLeft === -1) return 0;
    const lastRight = sarchRight(arr, target);

    return lastRight - firstLeft + 1;
}

console.log(searchCount(arr, target))