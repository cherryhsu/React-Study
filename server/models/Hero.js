const mongoose = require("mongoose") //用于创建Schema和实例化一个model
const schema = new mongoose.Schema({
    // parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },//关联model
    name: { type: String },
    avatar: { type: String },
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],//多个分类
    scores: {//评分对象：难度、技能、攻击、生存 
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survive: { type: Number },
    },
    skills: [{
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        tips: { type: String }
    }],
    items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],//多个顺风装备
    items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],//多个逆风装备
    usageTips: { type: String },
    battleTips: { type: String },
    teamTips: { type: String },
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
        description: { type: String }
    }]

})
module.exports = mongoose.model('Hero', schema) 