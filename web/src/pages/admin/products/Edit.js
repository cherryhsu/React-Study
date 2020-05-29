import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Button, Popconfirm, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import http from '../../../utils/request'


const onFinishFailed = errorInfo => {
    console.log('提交失败:', errorInfo);
};
const priceValid = (rule, value) => {
    //antd V4无callback 用Promise代替
    if (value > 100) {
        return Promise.reject('价格不能大于100');
    } else {
        return Promise.resolve();
    }
}

export default function Edit(props) {
    const paramsId = props.match.params.id
    const [form] = Form.useForm();
    const [currentData, setCurrentData] = useState({})
    const [loading, setLoading] = useState(false)

    //组件初始化时获取数据
    useEffect(() => {
        //props.match.params.id存在的话表示修改，否则为新增
        if (props.match.params.id) {
            http.get(`rest/items/${props.match.params.id}`).then((res) => {
                // console.log(res.data.name)
                setCurrentData(res.data)
                form.setFieldsValue(res.data);
            })
        }
        // paramsId && getInfo()
        // function getInfo() {
        //     http.get(`rest/items/${paramsId}`).then((res) => {
        //         setCurrentData(res.data)
        //     })
        // };
    }, []);
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            setLoading(false)
            setCurrentData({ icon: info.file.response.url })
            // getBase64(info.file.originFileObj, imageUrl =>
            //     this.setState({
            //         imageUrl,
            //         loading: false,
            //     }),
            // );
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    const onFinish = values => {
        values.icon = currentData.icon
        if (paramsId) {
            http.post(`rest/items/${paramsId}`, values).then((res) => {
                props.history.push('/admin/products')
            })

        } else {
            http.post('rest/items', values).then((res) => {
                props.history.push('/admin/products')
            })
        }

    };
    return <Card title={"商品" + (paramsId ? "编辑" : "新增")}>
        <Form form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
                label="名称"
                name="name"
                rules={[{ required: true, message: '请输入商品名称!' }]}

            >
                <Input placeholder="请输入商品名称" />
            </Form.Item>
            {/* <Form.Item
                label="价格"
                name="icon"
                rules={[
                    {
                        required: false,
                        message: '请输入商品价格',
                    },
                    { validator: priceValid }
                ]}
            >
                <Input placeholder="请输入商品价格" />
            </Form.Item> */}
            <Form.Item
                label="图标"
                name="icon"
            >
                <Upload
                    name="file"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    headers={{ Authorization: `Bearer ${sessionStorage.token || ''}` }}
                    action={http.defaults.baseURL + '/upload'}
                    onChange={(info) => handleChange(info)}
                >
                    {currentData.icon ? <img src={currentData.icon} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    保存
                </Button>
            </Form.Item>
        </Form>
    </Card >
}