import chalk from "chalk";
import validator from 'validator';

console.log(chalk.green.inverse('success'));
console.log(chalk.red.inverse('fail'));
console.log(chalk.blue.inverse('blue'));
console.log(chalk.yellow.inverse('yellow'));
console.log(chalk.white.inverse('white'));

/* Email validation */

const res = validator.isEmail('rohit.ramteke@gmail.com');

const checkValidEmail = (res) => {
    if ( res ) {
        console.log(chalk.green.inverse('valid email'));
    } else {
        console.log(chalk.red.inverse('invalid email'));
    }
}

checkValidEmail(res);