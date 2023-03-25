function sleep(timeout) {   // 睡眠函数，参数为时长，单位ms
    return new Promise(function (resolve, reject) {    // 返回一个promise函数
        setTimeout(() => {  // 延时器设置睡眠时间
            resolve()   // 返回promise成功的回调
        }, timeout);
    })
}

(async function start() {
    console.log(1)      // 打印： 1
    await sleep(5000)   // 调用sleep函数睡眠5秒
    console.log(2);     // 延迟5秒打印： 2
})()