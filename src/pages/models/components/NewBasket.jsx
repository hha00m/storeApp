import React from 'react';
import { List, Button, InputItem, TextareaItem, View, Modal } from 'antd-mobile';
import { ContactsOutlined } from '@ant-design/icons';
import './_style.css';
import { bindActionCreators } from 'redux';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import {  createNewBasket } from './../store/actions';
import {closeModelMethod} from './../store/actions/index'
import CityModel from './CitiesModels';
//----------------------------------------------------


class NewBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state }
  }
  // componentDidMount() {
  //    this.autoFocusInst.focus();
  // }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      value['city']=this.props.activeCity.value;
      value['town']=this.props.activeTown.value;
      if(value.city && value.town &&value.phone){
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
          visible={this.props.ActiveModel.model.name === 'AddNewCustomer' && this.props.ActiveModel.action}
          onClose={() => this.props.closeModelMethod(this.props.modelList[2])}
          animationType="slide-up"
        >
          <List className="my-list"
            style={{ direction: "rtl", textAlign: "center" }}
            renderHeader={() => 'أدخل معلومات المشتري'}>
            <InputItem
              clear
              ref={el => this.autoFocusInst = el}
              {...getFieldProps('name')}

            >
              الاسم :</InputItem>
            <InputItem
              type="phone"
              placeholder="07x xxx xxxx"
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
              style={{border:' #ccc 1px solid'}}
            />

            <TextareaItem
              {...getFieldProps('note')}
              title={"ملاحظة:"}
              rows={2}
              count={100}
              className='am-textarea-label'
              style={{border:' #ccc 1px solid', textAlign:'right'}}

            />
            <List.Item>
              <Button type="warning" onClick={this.submit} >أنشاء  <ContactsOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} /></Button>
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
    user:state.user,

  }

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
      {
        closeModelMethod:closeModelMethod,
         createNewBasket: createNewBasket,
      }, dispatch);
}
const BasicInputExampleWrapper = createForm()(NewBasket);
export default connect(mapStateToProps,matchDispatchToProps)(BasicInputExampleWrapper)