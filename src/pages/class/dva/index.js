import { Component } from 'react'
import Search from './search'
import Lists from './lists'
import { connect } from 'dva'
class Dva extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Search {...this.props}></Search>
        <Lists {...this.props}></Lists>
      </div>
    )
  }
}
export default connect(({ search }) => ({
  search
}))(Dva)