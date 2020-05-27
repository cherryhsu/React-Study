import React from 'react';
import { Card, Form, Input, Button, Popconfirm } from 'antd';
const onFinish = values => {
    console.log('提交成功:', values);
};

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
export default function Edit() {

    return <Card title="商品编辑">
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
                label="名称"
                name="name"
                rules={[{ required: true, message: '请输入商品名称!' }]}
            >
                <Input placeholder="请输入商品名称" />
            </Form.Item>
            <Form.Item
                label="价格"
                name="price"
                rules={[
                    {
                        required: true,
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