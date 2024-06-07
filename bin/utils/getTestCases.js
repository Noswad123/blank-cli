"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestCases = void 0;
const failureTestCases_1 = require("./failureTestCases");
const successTestCases_1 = require("./successTestCases");
const defaults = {
    a: true,
    f: false,
    s: false,
    _: [],
    $0: 'yo'
};
function getTestCases(options = defaults) {
    const wat = options;
    if (wat.a) {
        return [
            ...successTestCases_1.successTestCases,
            ...failureTestCases_1.failureTestCases
        ];
    }
    else if (wat.f) {
        return failureTestCases_1.failureTestCases;
    }
    else if (wat.s) {
        return successTestCases_1.successTestCases;
    }
    return successTestCases_1.successTestCases;
}
exports.getTestCases = getTestCases;
