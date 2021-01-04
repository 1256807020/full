import { Component } from 'react'
export default class ListItem2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}