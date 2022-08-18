const minimist = require('minimist'); // 获取请求参数
const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);
const path = require('path');
const figlet = require('figlet'); // 生成ascii
const versionStr = figlet.textSync('Mina Lib');
const Printer = require('@darkobits/lolcatjs');
let rootDir = path.resolve(__dirname, '../');
const ora = require('ora'); // 生成lodaing


// p 是输入命令时的 -p 的入参
if (args.p) {
    rootDir = rootDir + '/packages/' + args.p;
    const _version = require(rootDir + '/package.json').name;
    console.log(Printer.default.fromString(`${_version} test cases \n ${versionStr}`));
}

const jestArgs = ['--runInBand', '--rootDir', rootDir];
const spinner = ora(`\n ⏰ ===> running: jest ${jestArgs.join(' ')}`);
spinner.start();

require('jest').run(jestArgs);

spinner.stop();