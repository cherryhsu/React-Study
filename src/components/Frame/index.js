import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from './logo.jpg'
import { adminRoutes } from '../../routes'
import { withRouter } from 'react-router-dom'
import Icon from '@ant-design/icons';

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;
//只筛选isShow为true的路由
const routes = adminRoutes.filter(route => route.isShow)
//<Icon type={route.icon} />
function Index(props) {
    return (

        <Layout>
            <Header className="header">
                <div className="logo" >
                    <img style={{ width: 100 }} src={logo} alt="logo" />
                </div>

            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        
                        {routes.map(route => {
                            return (<Menu.Item key={route.key}  onClick={p => props.history.push(p.key)}><Icon type={route.icon} />{route.title}</Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(Index)
