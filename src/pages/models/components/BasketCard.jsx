import React from 'react';
import { Card, Flex, Stepper, InputItem ,Modal} from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
     addItemToBasket, all_selectedBasketsMethod,closeModelMethod
} from './../store/actions/index';

const BasketCard = (props) => {

    return (
        <Modal
            visible={props.ActiveModel.model.name === 'sendBasketModel' && props.ActiveModel.action}
            transparent
            maskClosable
            onClose={() => props.closeModelMethod(props.modelList[5])}
            footer={[{
                text: 'تأكيد',
                onPress: () => {
                    props.sendBasketToDB(props.user.data.username, props.user.password, props.selectedBasket.id);
                   props.all_selectedBasketsMethod(props.selectedBasket, true);
      
                }
            }]}
        >
            <Card >
                <Card.Header
                    title={<div><span>{props.selectedBasket.city} - </span>
                        <span>{props.selectedBasket.town}  </span></div>}
                    extra={
                        <span>{props.selectedBasket.customer_name} </span>
                    }
                />
                <Card.Body className='am-flexbox'>
                    <div>
                        {props.selectedBasket.items ?
                            props.selectedBasket.items.map((value, index) => {
                                return (
                                    <Flex key={index} style={{ direction: "rtl" }} justify="between">
                                        <span>  {value.sub_name}  </span>
                                        <Stepper style={{ Width: '20px' }} showNumber size="small" defaultValue={1} />
                                    </Flex>
                                )
                            }) : <div>loading</div>

                        }
                    </div>
                </Card.Body>
                <Card.Footer
                    content={
                        <span >{props.selectedBasket.total_price}</span>
                    }

                    extra={
                        <div style={{ border: "1px solid #ccc" }}>
                            <InputItem
                                type={'money'}
                                placeholder=" خصم ان وجد"
                                clear
                                onChange={(v) => { console.log('onChange', v); }}
                                onBlur={(v) => { console.log('onBlur', v); }}
                            />
                        </div>
                    }
                />

            </Card>
        </Modal>
    );
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        user: state.user.user,
        selectedBasket: state.selectedBasket,
        all_selectedBaskets: state.all_selectedBaskets,

    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addItemToBasket: addItemToBasket,
            closeModelMethod:closeModelMethod,
            all_selectedBasketsMethod:all_selectedBasketsMethod
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(BasketCard);
