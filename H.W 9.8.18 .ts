//h.w q1 9.8.18
let arr: number[] = new Array(10);
arr = [0, 14, 52, 113, 0, 95, 66, 17, 0, 90];

function sumArray(arr):number {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }

    return sum;

}
console.log("the sum is: " + sumArray(arr));

function avgArray(arr):number {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }

    // avg : (0);
    let avr = (sum / arr.length);

    return avr;  
}
console.log("the avg is: " + avgArray(arr));


function maxNumInArray(arr): number {
    return Math.max(...arr);
    
}
console.log("maxNumInArray: " + maxNumInArray(arr));

function minNumInArray(arr) : number {
    return Math.min(...arr);
}
console.log("minNumInArray :" + minNumInArray(arr));

function indexOfMaxNumInArray(arr):number {
    let max:number = Math.max (...arr);
    return arr.indexOf(max);
}
console.log('indexOfMaxNumInArray :' + indexOfMaxNumInArray(arr));


function indexOfMinNumInArray(arr): number {
    let min:number = Math.min (...arr);
    return arr.indexOf(min);
}
console.log('indexOfMinNumInArray: ' + indexOfMinNumInArray(arr));

function evenNumInArray(arr): number {
    let sumEven = 0;      
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            
            sumEven += arr[i];
        }
    }

    return sumEven;


}
console.log("sumEven: " + evenNumInArray(arr));

function oddNumInArray(arr):number {
    let sumOdd = 0;      
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sumOdd += arr[i];
        }
    }
    return sumOdd;

}
console.log("sumOdd: " + oddNumInArray(arr));

function biggerNumThanZeroInArray(arr):number {
    let biggerThanZero = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            biggerThanZero += 1;
        }
        
    }
    return biggerThanZero;
}
console.log("biggerThanZero: " + biggerNumThanZeroInArray(arr));

function equalToZeroInArray(arr):number {
    let equalToZero = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0) {
            equalToZero += 1;
        }
        
    }
    return equalToZero;
}
console.log("equalToZero: " + equalToZeroInArray(arr));


////////////////////////////////
Q2


let num1: number[] = new Array<number>(3)

function max(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = prompt("enter number");
    }
    return Math.max(...arr);
}
console.log(max(num1));

