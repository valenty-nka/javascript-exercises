const reverseString = function(str) {
let newStr = "";
for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
}
return newStr;
};
console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
