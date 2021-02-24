import React from 'react'
import defaultImg from '../assets/33.jpg';
import RecieImg from '../assets/44.jpg';
import { connect } from 'react-redux';


class Girl extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.status ? RecieImg : defaultImg} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
  //从store传来的最新的数据 5
}
export default connect(mapStateToProps)(Girl)