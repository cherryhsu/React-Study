import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

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
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '', list: [] };
//   }

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   }

//   handleAdd = () => {
//     var { value, list } = this.state
//     list.push(value)
//     console.log(list)
//     this.setState({ list })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World</h1>
//         <label>
//           <Input type="text" style={{ width: 300 }} value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <Button type="primary" onClick={this.handleAdd}>添加</Button>
//         <ul>
//           <li>
//             {this.state.list.map((item) => {
//               return <li>{item}</li>
//             })}
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
export default function DashBoard() {
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

