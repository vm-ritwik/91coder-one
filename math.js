// sum, difference, multiply, divide
// var lodash = require("lodash");
//
// function sum(a, b) {
//     return a + b;
// }
//
// function diff(a, b) {
//     return a - b;
// }
//
// function multiply(a, b) {
//     return a * b;
// }
//
// function divide(a, b) {
//     if (lodash.isNumber(b) && b !== 0) {
//         return a / b;
//     }
//     return 0;
// }

// module.exports = {
//     sum: sum,
//     difference: diff,
//     multiply: multiply,
//     divide: divide
// };

import lodash from "lodash";

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (lodash.isNumber(b) && b !== 0) {
        return a / b;
    }
    return 0;
}

export default {
    sum,
}

export