#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const colors_1 = __importDefault(require("colors"));
const utils_1 = require("./utils");
async function main() {
    const options = (0, utils_1.processArgs)();
    const testCases = (0, utils_1.getTestCases)(options);
    console.log(colors_1.default.white('Running tests with options:'), options);
    await runTests(testCases);
}
async function runTests(testCases) {
    let errorCount = 0;
    for (const testCase of testCases) {
        const { items, isInternational, itemType } = testCase;
        const data = { items, isInternational, itemType };
        console.log('\nRunning test:', colors_1.default.cyan(testCase.title));
        try {
            // curl -X POST http://localhost:4200/rest/items/validate -H "Content-Type: application/json" -d
            const response = await axios_1.default.post('http://localhost:4200/rest/items/validate', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response.data);
            if (isFailure(testCase)) {
                if (response.data.length !== testCase.reasons.length) {
                    console.log(colors_1.default.red('Test failed!'));
                    console.log('Received:', response.data);
                    console.log('Expected:', testCase.reasons);
                    errorCount++;
                }
                else {
                    testCase.reasons.forEach((reason) => {
                        if (!response.data.includes(reason)) {
                            console.log(colors_1.default.red('Test failed!'), reason);
                            errorCount++;
                        }
                    });
                }
            }
            else {
                if (response.data.length > 0) {
                    console.log(colors_1.default.red('Should not have failed!'), response.data);
                    errorCount++;
                }
            }
        }
        catch (error) {
            console.error('There was an error!', error);
        }
    }
    if (errorCount === 0) {
        console.log(colors_1.default.green('All tests passed!'));
    }
    else {
        console.log(errorCount, colors_1.default.red('tests failed!'));
    }
}
function isFailure(testCase) {
    return testCase.isFailure;
}
main().catch((error) => {
    console.error('Error occurred:', error);
});
