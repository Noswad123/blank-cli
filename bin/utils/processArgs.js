"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processArgs = void 0;
const colors_1 = __importDefault(require("colors"));
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
function processArgs() {
    const usage = colors_1.default.green("\nUsage: pm -c <command>");
    const options = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
        .usage(usage)
        .option("a", {
        alias: "all",
        describe: "run all tests",
        type: "boolean",
        demandOption: false
    })
        .option("f", {
        alias: "failures",
        describe: "run failure test cases",
        type: "boolean",
        demandOption: false
    })
        .option("s", {
        alias: "success",
        describe: "run success test cases",
        type: "boolean",
        demandOption: false
    })
        .help(true)
        .argv;
    return options;
}
exports.processArgs = processArgs;
