#!/usr/bin/env node

import { processArgs} from './utils';

async function main() {
    const options = processArgs();
    printOptions(options);
}

function printOptions(options: object) {
    console.log(options);
}

main().catch((error) => {
    console.error('Error occurred:', error);
});