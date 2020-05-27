import React from 'react';
import { Card, Table, Button, Popconfirm } from 'antd';
import http from '../../../utils/request'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       val: '',
//       list: []
//     }
//   }
//   handleChange = (event) => {
//     let val = event.target.value
//     this.setState = ({
//       val
//     })

//   }
//   handleAdd = () => {
//     const { val, list } = this.state
//     list.push(val)
//     this.setState = ({
//       list
//     })

//   }
//   render() {
//     const { val, list } = this.state
//     const LiItem = list.map((item) => {
//       return <li>{item}</li>
//     })

//     return (< div  >
//       <h1>Hello WOrld</h1>
//       <Input type="text" style={{ width: 300 }} onChange={this.handleChange} />
//       <Input type="text" value={val} style={{ width: 300 }} onChange={this.handleChange}></Input>
//       <Button type="primary" onClick={this.handleAdd}>添加</Button>
//       <ul>
//         {LiItem}
//       </ul>
//     </div >)
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello WOrld</h1>
//       <Input type="text" style={{ width: 300 }}></Input>
//       <Button type="primary">添加</Button>
//     </div>
//   );
// }

export default function List(props) {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      price: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      price: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '序号',
      key: 'id',
      width: 80,
      render: (text, record, index) => index + 1
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '操作',
      render: (text, record, index) => {
        return <div>
          <Button type="primary" size="small">修改</Button>
          <Popconfirm
            title="确定删除此项?"
            onConfirm={() => { console.log("用户确认删除") }}
            onCancel={() => { console.log("用户取消删除") }}
            okText="确认"
            cancelText="取消"
          >
            <Button style={{ margin: "0 1rem" }} type="danger" size="small">删除</Button></Popconfirm>
        </div>
      }
    },
  ];
  return <Card title="商品列表" extra={<Button type='primary' size="small" onClick={()=>props.history.push('/admin/products/edit')}>新增</Button>}>
    <Table dataSource={dataSource} columns={columns} />


  </Card>
};
