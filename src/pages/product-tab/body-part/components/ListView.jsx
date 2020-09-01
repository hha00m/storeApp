/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from "react";
import ReactDOM from "react-dom";
import { ListView,ActivityIndicator,View } from "antd-mobile";
import { fetchingProductsMethod } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
let pageIndex = 1;


class Body extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isLoading: true,
      height: (document.documentElement.clientHeight * 3) / 4
    };
  }
  _data = [];
  _onDataArrived(newData) {

    if (this._data.length !== newData.length) {
      const hei =
        document.documentElement.clientHeight -
        ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
      this._data = newData;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this._data),
        isLoading: false,
        height: hei

      });
    }
  }
  componentDidUpdate() {
    console.log(this.props.products.products);
    if (this.props.products.fetched) {
      this._onDataArrived(this.props.products.products);
    }
  }

  onEndReached = event => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    ++pageIndex;
    this.props.fetchingProducts(this.props.user.user.data.username, this.props.user.user.password,pageIndex, this._data);

    console.log("reach end", event);
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 10,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, rowID) => {
      return (
        <ProductCard rowID={rowID} obj={rowData} />
      )
    };

    return (
      <ListView
        ref={el => (this.lv = el)}
        dataSource={this.state.dataSource}
        renderFooter={() => (
          <View style={{ width: '100%', height: document.documentElement.clientHeight * 0.1, display: 'flex', justifyContent: 'center' }}>
            {this.state.isLoading ? <ActivityIndicator size="large" /> : "Loaded"}
          </View>
        )}
        renderRow={row}
        style={{
          height: this.state.height,
          overflow: "auto"
        }}
        renderSeparator={separator}

        pageSize={4}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

function mapStateToProps(state) {
  return {

    products: state.products,
    user:state.user,

  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchingProductsMethod: dispatch(fetchingProductsMethod()),
      fetchingProducts: fetchingProductsMethod,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Body);