import React from "react";
import {  View } from 'antd-mobile';
import FlagsModel from './components/FlagsModel'
import NewFlagsModel from './components/NewFlagsModel'
import BasketsModel from './components/BasketsModel'
import NewBasket from './components/NewBasket';
import UpdateBasket from './components/UpdateBasket'
import BasketCard from './components/BasketCard'
import MyAccount from './components/MyAccountModel'


class Models extends React.Component {
    render() {
        return (
            <View>
                <FlagsModel/>
                <NewFlagsModel/>
                <BasketsModel/>
                <NewBasket/>
                <UpdateBasket/>
                <BasketCard/>
                <MyAccount/>

            </View >
        )
    }
};


export default Models;
