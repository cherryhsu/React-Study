module.exports = app => {//导出一个函数，参数为app
    const mongoose = require('mongoose')//创建连接
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
        useNewUrlParser: true,
        useUnifiedTopology: true     //这个即是报的警告
    })
}