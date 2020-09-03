import React, { useState, useEffect } from 'react';
import { Flex, ActivityIndicator, View, Button, InputItem, Modal, List, Toast } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModelMethod, } from '../../models/store/actions/index';

const MyAccountModel = (props) => {
   
    return (
        <Modal
            visible={props.ActiveModel.model.name === 'MyAccountModel' && props.ActiveModel.action}
            transparent
            maskClosable
            closable={true}
            popup
            animationType="slide-down"
            onClose={() => {
                props.closeModelMethod(props.modelList[11]);
            }}

        >

            <List
                style={{ direction: "rtl", textAlign: "center" }}
                renderHeader={() => 'معلومات حول حسابي'
                }>
<List.Item>


</List.Item>


            </List>
        </Modal>
    );
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        user: state.user.user,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            closeModelMethod: closeModelMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyAccountModel);
