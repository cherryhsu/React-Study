const mongoose = require("mongoose") //用于创建Schema和实例化一个model
const schema = new mongoose.Schema({
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],//多个分类
    title: { type: String },
    body: { type: String },
})
module.exports = mongoose.model('Article', schema) 