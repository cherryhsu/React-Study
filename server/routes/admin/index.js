module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../../models/AdminUser')
    app.set('secret', 'i2kkdadasdsa223')
    const router = express.Router({
        mergeParams: true//合并url参数
    })
    //登录校验
    const authMiddleware = require("../../middleware/auth")
    const resourceMiddleware = require("../../middleware/resource")
    //const Category = require('../../models/Category')
    //创建
    router.post('/', authMiddleware(), async (req, res) => {
        const model = await req.Model.create(req.body)//创建
        res.send(model)//将结果发送到前端
    })
    //查询
    router.post('/:id', authMiddleware(), async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)//更新
        res.send(model)//将结果发送到前端
    })
    //删除
    router.delete('/:id', authMiddleware(), async (req, res) => {

        await req.Model.findByIdAndDelete(req.params.id)//删除
        res.send({
            success: true
        })//将结果发送到前端
    })

    router.get('/', authMiddleware(), async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const data = await req.Model.find().setOptions(queryOptions).limit(10)//查询,限制10条,populate关联字段对象
        // const data = await req.Model.find().populate('parent').limit(10)//查询,限制10条,populate关联字段对象
        res.send(data)//将结果发送到前端
    })

    //资源详情
    router.get('/:id', authMiddleware(), async (req, res) => {
        const data = await req.Model.findById(req.params.id)//查询根据id
        res.send(data)//将结果发送到前端
    })
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

    const multer = require('multer')//将上传文件的数据赋值到req上
    const upload = multer({ dest: __dirname + '/../../uploads' })//当前文件所在文件夹
    app.post('/admin/api/upload',  authMiddleware(),upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)

    })

    app.post('/admin/api/login', upload.single('file'), async (req, res) => {
        const { username, password } = req.body
        //1.根据用户名找用户

        const user = await (await AdminUser.findOne({ username }).select('+password'))
        assert(user, 422, '用户不存在')
        // if (!user) {
        //     return res.status(422).send({
        //         message: '用户不存在'
        //     })
        // }
        //2.校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误'
        //     })
        // }
        //3.返回token npm i jsonwebtoken
        //const jwt = require('jsonwebtoken')
        const token = jwt.sign({ id: user._id }, app.get('secret'))//获取配置
        res.send({ token })

    })
    //错误处理函数(必须有next)
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}