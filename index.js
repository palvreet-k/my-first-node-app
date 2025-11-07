// All import statements would be at the top of the file

import fs from 'fs';
import os from 'os';
import chalk from 'chalk';
import figlet from 'figlet';
import {add, multiply} from './math.js';

console.log("The sum is: ", add(5, 3));
console.log("The product is: ", multiply(15, 3));

fs.writeFileSync('message.txt', 'Hello from Node.js (ESM)!');
const data = fs.readFileSync('message.txt', 'utf8');
console.log('File contents:', data);
console.log('Hello, World!');

console.log('Operating System:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

console.log(chalk.green('Hello World'));
console.log(chalk.bold('Hello World'));
console.log(chalk.underline('Hello World'));

figlet('Node Rocks!', (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        return;
    } console.log(data);
});



//UTF-8 Encoding is used to read the file contents correctly