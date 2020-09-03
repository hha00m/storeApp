import React from 'react';
import { List, Button, InputItem, TextareaItem, View, Modal } from 'antd-mobile';
import { ContactsOutlined } from '@ant-design/icons';
import './_style.css';
import { bindActionCreators } from 'redux';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { createNewBasket, closeModelMethod,fetchingBasketsMethod } from './../store/actions';
import CityModel from './CitiesModels';
//----------------------------------------------------


class UpdateBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state }
  }
  onUpdate = () => {
    this.props.fetchingBasketsMethod(this.props.user.username, this.props.user.password, true)
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      value['city'] = this.props.activeCity.value;
      value['town'] = this.props.activeTown.value;
      if (value.city && value.town && value.phone) {
        this.props.createNewBasket(this.props.user.user.data.username, this.props.user.user.password, value);
      }

    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <View>
        <Modal
          popup
          visible={this.props.ActiveModel.model.name === 'EditBasketModel' && this.props.ActiveModel.action}
          onClose={() => { this.onUpdate(); this.props.closeModelMethod(this.props.modelList[3]) }}
          animationType="slide-up"
        >
          <List className="my-list"
            style={{ direction: "rtl", textAlign: "center" }}
            renderHeader={() => 'أدخل معلومات المشتري'}>
            <InputItem
              clear
              defaultValue={this.props.selectedBasket.customer_name}
              ref={el => this.autoFocusInst = el}
              {...getFieldProps('name')}


            >
              الاسم :</InputItem>
            <InputItem
              type="phone"
              placeholder="07x xxx xxxx"
              defaultValue={this.props.selectedBasket.customer_phone}
              {...getFieldProps('phone')}
              style={{ direction: "ltr", paddingLeft: "8px", paddingRight: "8px" }}
            >الموبايل:
          </InputItem>
            <CityModel city={this.props.selectedBasket.city_id} town={this.props.selectedBasket.town_id}/>
            <TextareaItem
              {...getFieldProps('address')}
              title={"العنوان:"}
              rows={2}
              defaultValue={this.props.selectedBasket.address?this.props.selectedBasket.address:''}
              count={100}
            />

            <TextareaItem
              {...getFieldProps('note')}
              title={"ملاحظة:"}
              rows={2}
              count={100}

            />
            <List.Item>
              <Button type="warning" onClick={this.submit} >  <ContactsOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} />تحديث</Button>
            </List.Item>
          </List>
        </Modal>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
    activeTown: state.activeTown,
    modelList: state.modelList,
    ActiveModel: state.ActiveModel,
    user: state.user,
    selectedBasket:state.selectedBasket

  }

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createNewBasket: createNewBasket,
      closeModelMethod: closeModelMethod,
      fetchingBasketsMethod:fetchingBasketsMethod
    }, dispatch);
}
const BasicInputExampleWrapper = createForm()(UpdateBasket);
export default connect(mapStateToProps, matchDispatchToProps)(BasicInputExampleWrapper)