import React from "react";
import { View, Flex, SearchBar, WingBlank } from "antd-mobile";
const Header = () => {
    return (
        <View>
            <SearchBar placeholder="بحث" maxLength={8} />
            <WingBlank>
            <Flex style={{ direction: 'rtl', height: '50px' }}>
                <Flex.Item style={{ flex: '2' }}>رقم  </Flex.Item>
                <Flex.Item style={{ flex: '4' }}>{"اسم "} </Flex.Item>
                <Flex.Item style={{ flex: '2' }}>سعر</Flex.Item>
                <Flex.Item style={{ flex: '2' }}>حالة الطلب</Flex.Item>

            </Flex>
            </WingBlank>
        </View>
    )
};


export default Header;


