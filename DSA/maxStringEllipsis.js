const truncate = (s, maxLen) => {
    if(!s.length) return;
    if(s.length <= maxLen) return s;

    const newS = s.slice(0,maxLen-1);
    return `${newS}...`;
}
console.log(truncate("Hi everyone!", 20));
console.log(truncate("What I'd like to tell on this topic is:", 20));