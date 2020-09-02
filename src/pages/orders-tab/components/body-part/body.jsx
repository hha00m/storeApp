import React,{useEffect}from 'react';
import { List, WingBlank } from 'antd-mobile';
import Card from './components/OrderCard'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchingOrdersMethods} from '../../store/actions/index';
const OrdersTab = (props) => {
useEffect(() => {
    props.fetchingOrdersMethods(props.user.data.username, props.user.password)
}, [])
    
    return (
        <WingBlank >
            <List className="my-list">
                {
                    props.orders.orders.map((order, i) => (
                        <Card order={order} index={i} />
                    ))
                }
            </List>
        </WingBlank>
    )
}

function mapStateToProps(state) {
    return {

        orders: state.orders,
        user: state.user.user,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchingOrdersMethods:fetchingOrdersMethods
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(OrdersTab);
