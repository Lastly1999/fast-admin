/**
 * 启动日志banner配置 作用在启动前输出一个banner日志
 */
const log = `
_______  _______  _______  _______ 
|       ||   _   ||       ||       |
|    ___||  |_|  ||  _____||_     _|
|   |___ |       || |_____   |   |  
|    ___||       ||_____  |  |   |  
|   |    |   _   | _____| |  |   |  
|___|    |__| |__||_______|  |___|  loading... version 0.0.1
                      
`

process.stdout.write('\n');

console.log(log)