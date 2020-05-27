const mongoose = require("mongoose") //用于创建Schema和实例化一个model
const schema = new mongoose.Schema({
    // parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },//关联model
    name: { type: String },
    items: [{
        image: { type: String },
        url: { type: String }
    }]
})
module.exports = mongoose.model('Ad', schema) 