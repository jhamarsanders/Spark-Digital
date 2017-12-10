var A = [1, 3, 6, 4, 1, 2];
var B = [1, 2, 3];
var C = [-1, -3];
var D = [5, 4, 57, 36, 57, 28];
var E = [134049, 45434, 465362, 958376, 5748, 74839];

function sortNumber(a, b){
    return a - b;
}

function returnLowestNum (arr){
    arr.sort(sortNumber);
    var lowestNumb = arr[0];
    for(var i = 0; i < arr.length; i++){
        if((lowestNumb + 1) == arr[i]){
            lowestNumb = arr[i];
        }
        if(i == (arr.length - 1)){
            if(lowestNumb < 0){
                lowestNumb = 1;
            } else {
                lowestNumb++;
            }
        }
    }
    return lowestNumb;
}

console.log('The lowest integer not in the array is: ' + returnLowestNum(A));
console.log('The lowest integer not in the array is: ' + returnLowestNum(B));
console.log('The lowest integer not in the array is: ' + returnLowestNum(C));
console.log('The lowest integer not in the array is: ' + returnLowestNum(D));
console.log('The lowest integer not in the array is: ' + returnLowestNum(E));