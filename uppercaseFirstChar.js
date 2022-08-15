function ucFirst(str) {
    return result = str[0].toUpperCase() + str.slice(1);
}

// console.log(ucFirst("john"));


function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("innocent rabbit"));
