import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Button, Popconfirm } from 'antd';
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
    const [currentData, setCurrentData] = useState({})

    //组件初始化时获取数据
    useEffect(() => {
        //props.match.params.id存在的话表示修改，否则为新增
        if (props.match.params.id) {
            http.get(`rest/items/${props.match.params.id}`).then((res) => {
                console.log(res.data)
                setCurrentData(res.data)
            })
        }
        console.log(currentData)
        // paramsId && getInfo()
        // function getInfo() {
        //     http.get(`rest/items/${paramsId}`).then((res) => {
        //         setCurrentData(res.data)
        //     })
        // };
    }, []);

    const onFinish = values => {
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
    return <Card title="商品编辑">
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed} initialValues={{ name: currentData.name }}>
            <Form.Item
                label="名称"
                name="name"
                rules={[{ required: true, message: '请输入商品名称!' }]}

            >
                <Input placeholder="请输入商品名称" />
            </Form.Item>
            <Form.Item
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
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    保存
                </Button>
            </Form.Item>
        </Form>
    </Card >
}