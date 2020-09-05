import React from 'react';
import { List, Button, InputItem, TextareaItem, View, Modal } from 'antd-mobile';
import { ContactsOutlined } from '@ant-design/icons';
import './_style.css';
import { bindActionCreators } from 'redux';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { updateBasket, closeModelMethod, fetchingBasketsMethod } from './../store/actions';
import CityModel from './CitiesModels';
//----------------------------------------------------


const UpdateBasket = (props) => {


  const submit = () => {
    props.form.validateFields((error, value) => {
      value['city'] = props.activeCity.value;
      value['town'] = props.activeTown.value;
      value['id']=props.selectedBasket.id;
      if (value.city && value.town && value.phone) {
        props.updateBasket(props.user.user.data.username, props.user.user.password, value);
      }

    });
  }

  const { getFieldProps } = props.form;

  return (
    <View>
      <Modal
        popup
        closable={true}
        visible={props.ActiveModel.model.name === 'EditBasketModel' && props.ActiveModel.action}
        onClose={() => {
          props.fetchingBasketsMethod(props.user.username, props.user.password, true)
          props.closeModelMethod(props.modelList[3]);
        }}
        animationType="slide-up"
      >
        <List className="my-list"
          style={{ direction: "rtl", textAlign: "center" }}
          renderHeader={() => 'أدخل معلومات المشتري'}>
          <InputItem
            {...getFieldProps('name')}
            defaultValue={props.selectedBasket.customer_name}

          >
            الاسم :</InputItem>
          <InputItem
            type="phone"
            placeholder="07x xxx xxxx"
            defaultValue={props.selectedBasket.customer_phone}
            {...getFieldProps('phone')}
            style={{ direction: "ltr", paddingLeft: "8px", paddingRight: "8px" }}
          >الموبايل:
          </InputItem>
          <CityModel />
          <TextareaItem
            {...getFieldProps('address')}
            title={"العنوان:"}
            rows={2}
            count={100}
          />

          <TextareaItem
            {...getFieldProps('note')}
            title={"ملاحظة:"}
            rows={2}
            count={100}

          />
          <List.Item>
            <Button type="warning" onClick={submit} >  <ContactsOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} />تحديث</Button>
          </List.Item>
        </List>
      </Modal>
    </View>
  );

}
function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
    activeTown: state.activeTown,
    modelList: state.modelList,
    ActiveModel: state.ActiveModel,
    user: state.user,
    selectedBasket: state.selectedBasket,

  }

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateBasket: updateBasket,
      closeModelMethod: closeModelMethod,
      fetchingBasketsMethod: fetchingBasketsMethod

    }, dispatch);
}
const InputWrapper = createForm()(UpdateBasket);
export default connect(mapStateToProps, matchDispatchToProps)(InputWrapper)