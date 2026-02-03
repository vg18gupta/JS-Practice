const twoSum = (numbers, target) => {
    if(!numbers.length) return [];

    let map = new Map();
    for(let i = 0; i < numbers.length; i++) {
        map.set(numbers[i], i);
    }

    for(let i = 0; i < numbers.length; i++) {
        const sum = target - numbers[i];
        if(map.has(sum) && map.get(sum) !== i) {
            return [i, map.get(sum)];
        }
    }
    return [];
}

console.log([2,7,11,15], 9);