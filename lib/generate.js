const path = require('path');
const ncp = require('ncp');
const ora = require('ora');
const chalk = require('chalk');

const templatePath = path.resolve(__dirname, '../template-content/mock-server');

/**
 * Generate component
 * @param targetPath absolute path where to generate the compnent
 */
async function generate(targetPath){
  await (new Promise((resolve, reject) => {
    const spinner = ora('creating mock server').start();
    ncp(templatePath, path.resolve(targetPath, 'mock-server'), (err) => {
      spinner.stop();
      if (err) {
        console.log(chalk.red(err));
        reject(err);
      } else {
        console.log(chalk.green('mock server created!'));
        resolve();
      }
    });
  }));
}

module.exports = generate;