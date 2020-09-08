import React from 'react';
import utf8 from 'utf8';
import { List, Button, InputItem, TextareaItem, View, Modal } from 'antd-mobile';
import { ContactsOutlined } from '@ant-design/icons';
import './_style.css';
import { bindActionCreators } from 'redux';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { updateBasketMethod, closeModelMethod, fetchingBasketsMethod } from './../store/actions';
import CityModel from './CitiesModels';
import UpdateCard from './UpdateCard';

const UpdateBasket = (props) => {
  return (
    <View>
      <Modal
        popup
        closable={true}
        visible={props.ActiveModel.model.name === 'EditBasketModel' && props.ActiveModel.action}
        onClose={() => {
          props.fetchingBasketsMethod(props.user.user.user.data.username, props.user.user.user.password, true)
          props.closeModelMethod(props.modelList[3]);
        }}
        animationType="slide-up"
      >
        <UpdateCard />
      </Modal>
    </View>
  );

}
function mapStateToProps(state) {
  return {

    modelList: state.modelList,
    ActiveModel: state.ActiveModel,
    user: state.user,

  }

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeModelMethod: closeModelMethod,
      fetchingBasketsMethod: fetchingBasketsMethod

    }, dispatch);
}
const InputWrapper = createForm()(UpdateBasket);
export default connect(mapStateToProps, matchDispatchToProps)(InputWrapper)