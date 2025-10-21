const array = [[1,2,3], [4,[5,6, [7,8,9]]], 10];

const flattenArray = (arrayList, level = 0, result = []) => {
    for(let item of arrayList) {
        if (Array.isArray(item) && level > 0) {
          flattenArray(item, level - 1, result);
        } else {
          result.push(item);
        }
    }
    return result;
}

console.log(flattenArray(array,2, []));