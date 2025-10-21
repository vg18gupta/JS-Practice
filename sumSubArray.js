const getsubArrayCount = (arr, sum) => {
    let count = 0;

    for(let i = 0; i<arr.length; i++) {
        let k = 0;
        for(let j = i; j<arr.length; j++) {
            k += arr[j];

            if(k === sum) {
                count++;
            }
        }
    }
    return count;
}

console.log(getsubArrayCount([3,4,-7,1,3,3,1,-4], 7));