function friedAnda (callback) {
    setTimeout(() => {
        callback('Anda fried')
    }, 2000);
}
function makebread (para) {
    setTimeout(() => {
        para('toast done')
    }, 2000);
}
makebread((cb)=> {
    console.log(cb);
    friedAnda ( function (para1) {
        console.log(para1);
    })
})