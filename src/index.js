const WebBot = require('WebBot') //引用WebBot模块

//注册主函数
WebBot.registerMain(() => {}, '127.0.0.1', 36678, {
  browserName: 'chrome',
  argument:
    '--remote-debugging-port=19222 --user-data-dir=C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\User Data'
})

WebBot.registerMain(webMain, '127.0.0.1', 36679, {
  browserName: 'chrome',
  debugPort: 19222
})

/**用作代码提示，webMain函数会被多次调用，注意使用全局变量
 * @param {WebBot} webBot
 */
async function webMain(webBot) {
  //设置隐式等待
  await webBot.setImplicitTimeout(5000)

  await webBot.goto('https://www.baidu.com/')
  await webBot.sendKeys('//*[@id="kw"]', 'Aibote\r')
}
