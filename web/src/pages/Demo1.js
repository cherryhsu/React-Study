import React from 'react';
import './App.scss';
import { Button, Input } from 'antd';

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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', list: [] };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleAdd = () => {
    var { value, list } = this.state
    list.push(value)
    console.log(list)
    this.setState({ list })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <label>
          <Input type="text" style={{ width: 300 }} value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button type="primary" onClick={this.handleAdd}>添加</Button>
        <ul>
          <li>
            {this.state.list.map((item) => {
              return <li>{item}</li>
            })}
          </li>
        </ul>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello WOrld</h1>
//       <Input type="text" style={{ width: 300 }}></Input>
//       <Button type="primary">添加</Button>
//     </div>
//   );
// }

export default App;
