import React, { useState, useEffect } from 'react'
import { adminRoutes } from './routes';
import Frame from './components/Frame/index'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'


export default function App() {
    return (

        <Frame>
            \
            <Switch>
                {adminRoutes.map(route => {
                    return <Route key={route.path} path={route.path} exact={route.exact} render={
                        routeProps => {
                            return <route.component {...routeProps} />
                        }
                    } />
                })}
            </Switch>
            {/* <Switch>
                {adminRoutes.map(route => {
                    return (
                        <Route key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={routeProps => {
                                return <route.component {...routeProps} />
                            }}
                        />)

                })}

            </Switch>
            <Redirect to="/404"></Redirect> */}

        </Frame>
    )
}
// export default function App() {
//     const [count, setCount] = useState(10)
//     useEffect(() => {
//         console.log("执行了useEffect")
//     }, [])//[]只执行一次
//     return <div class="container">
//         <h1>welcome</h1>
//         <Link to="/login">点击跳转到登录页面</Link>
//         <br />
//         <Link to="/home">点击跳转到首页</Link>
//         <br />
//         <p>当前count次数：{count}</p>
//         <Button onClick={() => setCount(count + 1)}>更新次数</Button>
//     </div>
// }

// export default function App() {
//     return <div class="container">
//         <h1>welcome</h1>
//         <Link to="/login">点击跳转到登录页面</Link>
//         <br />
//         <Link to="/home">点击跳转到首页</Link>
//         <br />
//     </div>
// }
//有状态组件可以去到this作用域
// export default class App extends React.Component {
//     jump = () => {
//         this.props.history.push('/login')
//     }
//     render() {
//         return <div className="container">
//             <h1>welcome</h1>
//             <Link to="/login">点击跳转到登录页面</Link>
//             <br />
//             <Link to="/home">点击跳转到首页</Link>
//             <br />
//             <Button type="primary" onClick={this.jump}>跳转登录</Button>
//         </div>
//     }
// }