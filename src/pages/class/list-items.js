import { Component } from 'react'
import PropTypes from 'prop-types'
export default class ListItems extends Component {
  static defaultProps = {
    name: 'item1'
  }
  static propTypes = {
    name: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClick = () => {
    this.props.handleItem('item1')
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item1-{this.props.name}</h1>
      </div>
    )
  }
}