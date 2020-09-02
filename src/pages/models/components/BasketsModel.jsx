import React from "react";
import { ActivityIndicator, Modal, View, List, Flex, WhiteSpace, SwipeAction, Button, Radio } from 'antd-mobile';
import { ShoppingOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeModelMethod, } from '../store/actions';
import { closeModelMethod, } from '../store/actions';
import {
    cencelSendBasketToDB, fetchingBasketsMethod, deleteBasketsMethod,
    sendBasketToDB, selectedBasketMethod, addItemToBasket, all_selectedBasketsMethod, fetchingBasketByIDMethod
} from './../store/actions/index';
import './_style.css';
const RadioItem = Radio.RadioItem;


class BasketsModel extends React.Component {
    componentDidMount() {
        console.log(this.props.user.data);
        if (this.props.user.data.username.length > 0)
            this.props.fetchingBasket(this.props.user.data.username, this.props.user.password);
    }
    selectBasket = (val) => {
        this.props.fetchingBasketByIDMethod(this.props.user.data.username, this.props.user.password,val.id)
        this.props.selectedBasketMethod(val)
    }
    render() {
        return (
            <View>
                <Modal
                    popup
                    visible={this.props.ActiveModel.model.name === 'BuyerListMode' && this.props.ActiveModel.action}
                    onClose={() => this.props.closeModelMethod(this.props.modelList[1])}
                    animationType="slide-up"
                    transparent
                    maskClosable={true}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <List
                        style={{ direction: "rtl", backgroundColor: 'white' }}
                        renderHeader={() =>
                            <View>
                                أختر سلة  ( {this.props.activeProduct.product.name} - {this.props.activeProduct.options.value})
                            </View>}
                        className="picker-list">
                        {
                            this.props.baskets.fetched ?
                                this.props.baskets.baskets.map((i, index) => (
                                    <SwipeAction
                                        style={{ backgroundColor: '#fff' }}
                                        autoClose
                                        right={[
                                            {
                                                text: 'تحديث',
                                                onPress: () => {
                                                    this.selectBasket(i);
                                                    this.props.activeModelMethod(this.props.modelList[3])
                                                },
                                                style: { backgroundColor: '#cbbeb5', color: "black" },
                                            },
                                            {
                                                text: 'الغاء التثبيت',
                                                onPress: () => {
                                                    this.props.cencelSendBasketToDB(this.props.user.data.username, this.props.user.password, i.id);
                                                    all_selectedBasketsMethod(i, false);
                                                }
                                                // style: { backgroundColor: '#525266', color: 'white' },
                                            },
                                            {
                                                text: 'حذف',
                                                onPress: () => {
                                                    this.props.deleteBasketsMethod(this.props.user.data.username, this.props.user.password, i.id);
                                                    all_selectedBasketsMethod(i, false);

                                                },
                                                style: { backgroundColor: '#ff6666', color: 'white' },

                                            },
                                        ]}
                                        left={[
                                            {
                                                text: 'تثبيت الطلب',
                                                onPress: () => {

                                                    this.selectBasket(i);
                                                    this.props.activeModelMethod(this.props.modelList[5])

                                                },
                                                style: { backgroundColor: '#108ee9', color: 'white' },

                                            }, {
                                                text: 'عرض',
                                                onPress: () => this.props.activeModelMethod(this.props.modelList[5])
                                                ,
                                                style: { backgroundColor: '#525266', color: 'white' },
                                            },

                                        ]}
                                    > <RadioItem key={index}
                                        checked={this.props.selectedBasket.id === i.id} onChange={() => { this.selectBasket(i) }}
                                        disabled={i.status==='2'}
                                    >
                                            <Flex>
                                                <span style={{ marginLeft: "35px", marginRight: "35px" }}> {i.customer_name} - {i.customer_phone} - {i.city} - {i.total_price} </span>
                                            </Flex>
                                        </RadioItem>
                                    </SwipeAction>
                                )) :
                                <View style={{ width: '100%', height: document.documentElement.clientHeight * 0.1, display: 'flex', justifyContent: 'center' }}>
                                    <ActivityIndicator size="large" />
                                </View>
                        }
                        <List.Item>

                            <Button type="ghost" onClick={() => this.props.activeModelMethod(this.props.modelList[2])} style={{ fontSize: '16px' }}> <PlusCircleOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} /> اضافة سلة جديدة</Button><WhiteSpace />

                            <Button
                                type="primary" style={{ fontSize: '16px' }}
                                onClick={() => this.props.addItemToBasket(
                                    this.props.user.data.username, this.props.user.password,
                                    this.props.activeProduct.product.id, this.props.selectedBasket.id,this.props.activeProduct.product.attribute[0].id)
                                }
                            ><ShoppingOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} /> شراء  </Button>
                        </List.Item>
                    </List>

                </Modal>

            </View >
        )
    }
};

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        baskets: state.baskets,
        user: state.user.user,
        selectedBasket: state.selectedBasket,
        activeProduct: state.activeProduct,
        all_selectedBaskets: state.all_selectedBaskets,

    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchingBasketsMethod: dispatch(fetchingBasketsMethod()),
            fetchingBasket: fetchingBasketsMethod,
            activeModelMethod: activeModelMethod,
            deleteBasketsMethod: deleteBasketsMethod,
            closeModelMethod: closeModelMethod,
            sendBasketToDB: sendBasketToDB,
            cencelSendBasketToDB: cencelSendBasketToDB,
            selectedBasketMethod: selectedBasketMethod,
            addItemToBasket: addItemToBasket,
            all_selectedBasketsMethod: all_selectedBasketsMethod,
            fetchingBasketByIDMethod:fetchingBasketByIDMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(BasketsModel);
