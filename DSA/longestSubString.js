const longestSubString = (s) => {
    let map = new Map();
    let left = 0;
    let maxLen = 0;

    for(let right = 0; right < s.length; right++) {
        if(map.has(s[right])) {
            left = Math.max(left, s[right] + 1);
        }

        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

console.log(longestSubString('abcabcbb'))