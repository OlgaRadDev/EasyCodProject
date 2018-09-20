// // task 2
// var greet = 'Hello';
// (function () {
//     var text = "World";
//     console.log(greet + text);
//
// }());
// console.log(greet+text);
//
//
// //task 3
//
// function minus(a) {
//
//     return function (b) {
//         return a - b;
//     };
// }
//
// console.log(minus(10)(6));
// console.log(minus(5)(6));
// console.log(minus(10)(0));
// console.log(minus(-0)(-6));
// console.log(minus(0)(0));

//task 4
// function MultiplyMaker(arg) {
//
//     return function (value) {
//         return arg = arg * value;
//     }
//
// }
//
// const multiply = MultiplyMaker(2);
//
// console.log(multiply(2));
// console.log(multiply(1));
// console.log(multiply(3));
// console.log(multiply(10));

//task 5
// const moduleString = (function () {
//     let startString = "";
//
//     function setString(value) {
//         if (arguments.length == 0) {
//             return startString;
//         }
//         startString += value;
//     }
//
//     function getString() {
//         return startString;
//     }
//
//     function getLength(startString) {
//         // let lengthString = startString.length
//         // return lengthString;
//     }
//     function reverseString(startString) {
//         // let result = startString.split().reverse().join();
//         // return result;
//     }
//     return {
//         setString:setString,
//         getString:getString,
//         getLength:getLength,
//         reverseString:reverseString
//     };
// })();
// console.log(moduleString.setString('abcde'));
// console.log(moduleString.getString());
// console.log(moduleString.getLength());
// console.log(moduleString.reverseString());

const calculate = (function () {
    let index = 0;

    function setIndex(value) {
        index = value;
    }

    function getSum(arg1) {
        index += arg1;
        return calculate;
    }

    function getMultiply(arg2) {
        index *= arg2;
    }

    function getMinus(arg3) {
        index -= arg3;
    }

    function getDivision(arg4) {
        index /= arg4;
    }

    function getRaisePower(power) {
        index = Math.pow(index, power);
    }

    function getRound() {
        return Math.round(index * 100) / 100;
    }
    return {
        setIndex:setIndex,
        getSum:getSum,
        getMultiply:getMultiply,
        getMinus:getMinus,
        getDivision:getDivision,
        getRaisePower:getRaisePower,
        getRound:getRound
    };
})();

console.log(calculate.setIndex(10).getSum(2));



