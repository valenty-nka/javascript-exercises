const removeFromArray = function(arr, ...args) {
    args = [...args];
    let newArr = [];
    console.log(args);
    for (let i = 0; i < arr.length; i++){
        if(!args.includes(arr[i])) {
            newArr.push(arr[i]);
        } 
        
    }
    console.log(newArr)
    return newArr;
    
};
removeFromArray([1,2,3], 2)
// Do not edit below this line
module.exports = removeFromArray;
