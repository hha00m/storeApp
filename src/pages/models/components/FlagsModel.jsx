import React from "react";
import { Modal, View, List, Flex, Button, WhiteSpace } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeModelMethod, } from '../store/actions';
import { closeModelMethod } from '../store/actions';
import { PlusCircleOutlined } from '@ant-design/icons'

const RadioItem = List;

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

const onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
        e.preventDefault();
    }
}

class FlagsModels extends React.Component {

    onClickButton = (key) => {
        this.props.activeModelMethod(this.props.modelList[key]);
    }

    render() {
        return (
            <View>
                <Modal
                    visible={this.props.ActiveModel.model.name === 'FavorteMode' && this.props.ActiveModel.action}
                    transparent
                    maskClosable
                    onClose={() => this.props.closeModelMethod(this.props.modelList[0])}
                    footer={[{
                        text: 'تأكيد', 
                        onPress: () => this.props.closeModelMethod(this.props.modelList[0])
                        // add_flag_to_product(selectedBasket.id, selectedFlag.id)
                    }]}
                    wrapProps={{ onTouchStart: onWrapTouchStart }}
                >
                    <List style={{ direction: "rtl", backgroundColor: "#fff" }} renderHeader={() => <div>أختر شعار</div>}>
                        {this.props.newFlagList.map((i, index) => (
                            <RadioItem
                                key={index}
                            // checked={selectedFlag.bg_color === i.bg_color} 
                            // onChange={() => onChangeFlag(i)}
                            >
                                <Flex>
                                    <View
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: `#${i.bg_color}`,
                                            borderRadius: 2,
                                            color: `#${i.font_color}`,
                                            marginLeft: "35px",
                                            marginRight: "35px",
                                            marginTop: '5px',
                                            marginBottom: '5px',
                                        }}
                                    />        <span style={{ marginLeft: "35px", marginRight: "35px" }}> {i.listname}</span>
                                </Flex>
                            </RadioItem>
                        ))}
                        <Button inline size="small" onClick={() => this.onClickButton(6)} style={{ fontSize: '16px', marginTop: "5px" }}> اضافة شعار <PlusCircleOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} /></Button><WhiteSpace />
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
        activeProduct: state.activeProduct,
        newFlagList: state.newFlagList,

    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            activeModelMethod:activeModelMethod,
            closeModelMethod: closeModelMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(FlagsModels);
