// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import App from './pages/app'
// import Login from './pages/admin/login'
// import Home from './pages/home'
// import Detail from './pages/detail'
// import NoMatch from './pages/admin/404'
// export default function IRouter() {
//     return <Router>
//         <Route exact path="/" component={App}></Route>
//         <Route path="/login" component={Login}></Route>
//         <Route path="/home" component={Home}>
//             <Redirect to="/login"></Redirect>
//         </Route>
//         <Route path="/detail/:id" component={Detail}></Route>
//         <Route path="*" component={NoMatch}></Route>
//     </Router>
// }
import Login from "./pages/login"
import Index from "./pages/admin/dashboard/index"
import ProductList from "./pages/admin/products/List"
import ProductEdit from "./pages/admin/products/Edit"
import PageNotFind from "./pages/404"
export const mainRoutes = [{
    path: "/login",
    component: Login
}, {
    path: "/404",
    component: PageNotFind
}]

export const adminRoutes = [{
    path: '/admin/dashboard',
    component: Index
}, {
    path: '/admin/products',
    component: ProductList,
    exact: true
}, {
    path: '/admin/products/edit/:id',
    component: ProductEdit
}]