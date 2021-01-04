import { Component } from 'react'
import ListItems from './list-items'
import ListItem2 from './list-item2'
export default class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'item-name2'
    }
  }
  handleChild = (msg) => {
    this.setState({
      name: msg
    })
  }
  render() {
    return (
      <div>
        <ListItems name={'item1'} handleItem={this.handleChild}></ListItems>
        <ListItem2 name={this.state.name}></ListItem2>
      </div>
    )
  }
}