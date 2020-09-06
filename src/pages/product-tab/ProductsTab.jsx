import React from "react";
import Header from './header-part/Header';
import Body from './body-part/Body';
import { View } from "antd-mobile";
import {API} from '../../config.js'
const ProductsTab = () => {
    return (
        <View>
            <Header />
            <Body />
        
        </View>
    )
};


export default ProductsTab;
