import React from 'react';
import { List, Flex } from 'antd-mobile';

const Item = List.Item;
const Card = (props) => {
    let order = props.order;
    let index = props.index;

    return (
        <div >
            <Item key={index} wrap>
                <Flex style={{ direction: 'rtl', height: '50px' }}>
                    <Flex.Item style={{ flex: '1', fontSize: '13px' }}>{order.id} </Flex.Item>
                    <Flex.Item style={{ flex: '3', fontSize: '13px' }}>{order.name} </Flex.Item>
                    <Flex.Item style={{ flex: '2', fontSize: '13px' }}>{order.price}</Flex.Item>
                    <Flex.Item style={{ flex: '2', fontSize: '13px' }}>{order.state}</Flex.Item>

                </Flex>
            </Item>
        </div>

    )
}
export default Card;