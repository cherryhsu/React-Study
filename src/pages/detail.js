import React from 'react'
import { Button } from 'antd';
import { Link, useParams, useHistory } from 'react-router-dom'
import 'antd/dist/antd.css'


export default function Detail() {
    const params = useParams()
    const history = useHistory()
    return <div class="container">
        <h1>this is detail</h1>
        <p>当前的参数id为：{params.id}</p>
        <Button type="primary" onClick={() => {
            history.push('/')
        }}>跳转登录</Button>
    </div>
}
//有状态组件可以去到this作用域
// export default class App extends React.Component {
//     jump = () => {
//         this.props.history.push('/login')
//     }
//     render() {
//         return <div className="container">
//             <h1>welcome detail</h1>
//             <p>当前的参数id为：{this.props.match.params.id}</p>
//             <Button type="primary" onClick={this.jump}>跳转登录</Button>
//         </div>
//     }
// }