import colors from 'colors';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface SyncTestOptions {
  a?: boolean;
  f?: boolean;
  s?: boolean;
  [x: string]: unknown;
  _: (string|number)[]
  $0: string;

}

type PromisifiedOptions = Promise<{
  [x: string]: unknown;
  a: boolean | undefined;
  f: boolean | undefined;
  s: boolean | undefined;
  _: (string | number)[];
  $0: string;
}>

export type TestOptions = SyncTestOptions | PromisifiedOptions;


export function processArgs() {
    const usage = colors.green("\nUsage: pm -c <command>");
    const options = yargs(hideBin(process.argv))
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