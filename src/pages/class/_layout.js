import { Component } from 'react'
export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="head">head</div>
        {this.props.children}
      </div>
    )
  }
}