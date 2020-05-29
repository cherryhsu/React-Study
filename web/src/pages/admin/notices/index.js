import React from 'react'
import { Card, List, Avatar, Button, Popconfirm, Upload } from 'antd';
const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
export default function Notices() {
    return (
        <Card title="通知中心"  extra={<Button type="primary">全部已读</Button>}>
            <List
                itemLayout="horizontal"
                dataSource={data}            
                renderItem={item => (
                    <List.Item extra={<Button>标记为已读</Button>}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </Card>
    )
}