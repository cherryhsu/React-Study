import React, { useEffect, useState } from 'react';
import { Tabs, Form, Input, Button, Popconfirm, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import http from '../../../utils/request'
import './hero.scss'

const { TabPane } = Tabs;

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
            http.get(`rest/heros/${props.match.params.id}`).then((res) => {
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
    return <div className="card-container">
        <Tabs type="card">
            <TabPane tab="基础信息" key="1">
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
            </TabPane>
            <TabPane tab="技能" key="2">
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
            </TabPane>

        </Tabs>
    </div>
}