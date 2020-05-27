const mongoose = require("mongoose") //用于创建Schema和实例化一个model
const schema = new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        select: false,//不展示密码
        set(val) {
            //npm i bcrypy加密
            return require('bcrypt').hashSync(val, 10)
        }
    }
})
module.exports = mongoose.model('AdminUser', schema) 