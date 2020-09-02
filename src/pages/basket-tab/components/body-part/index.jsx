import React from 'react';
import { List, WingBlank } from 'antd-mobile';
// import Card from './components/OrderCard'
import CardBasket from './components/BasketCard'
const Orders = () => {

    const d =
    {
        "code": 200,
        "message": 1,
        "success": "1",
        "data": [
            {
                "id": "1",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0648\u0631\u062f\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0648\u0631\u062f\u064a \u0645\u0646 \u0645\u0627\u0631\u0643\u0629 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/1/5f1162a6a5ef9.jpg"
            },
            {
                "id": "2",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0627\u0633\u0648\u062f",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0627\u0633\u0648\u062f \u0645\u0646 \u0645\u0627\u0631\u0643\u0629 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/2/5f11632ca30cc.jpg"
            },
            {
                "id": "3",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0646\u064a\u0644\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0646\u064a\u0644\u064a \u0645\u0646 \u0645\u0627\u0631\u0643\u0629 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/3/5f1163b0c94fa.jpg"
            },
            {
                "id": "4",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0632\u064a\u062a\u0648\u0646\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0632\u064a\u062a\u0648\u0646\u064a \u0645\u0646 \u0645\u0627\u0631\u0643\u0629 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/4/5f11641a6ddaa.jpg"
            },
            {
                "id": "5",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0628\u0646\u0641\u0633\u062c\u064a ",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0628\u0646\u0641\u0633\u062c\u064a \u0645\u0646 \u0645\u0627\u0631\u0643\u0629 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/5/5f1164f289a0a.jpg"
            },
            {
                "id": "6",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0633\u0645\u0627\u0626\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u062e\u0631\u0632 \u0628\u0646\u0637\u0631\u0648\u0646 \u0648\u0633\u062a\u0631\u0629 \u0633\u0645\u0627\u0626\u064a \u0645\u0646 \u0645\u0627\u0631\u0643\u0629 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/6/5f1165857ee8b.jpg"
            },
            {
                "id": "7",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0627\u0633\u0648\u062f \u0645\u0646 \u0645\u0633\u0641\u0627\u0644\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0627\u0633\u0648\u062f \u0645\u0646 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/7/5f116adac6009.jpg"
            },
            {
                "id": "8",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0648\u0631\u062f\u064a  ",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0627\u0633\u0648\u062f \u0645\u0646 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/8/5f116b285a1ad.jpg"
            },
            {
                "id": "9",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0628\u0646\u0641\u0633\u062c\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0628\u0646\u0641\u0633\u062c\u064a \u0645\u0646 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/9/5f116b7c9770b.jpg"
            },
            {
                "id": "10",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u062c\u0648\u064a\u062a\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u062c\u0648\u064a\u062a\u064a",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/10/5f116bc474a6a.jpg"
            },
            {
                "id": "11",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0648\u0631\u062f\u064a  ",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0627\u0633\u0648\u062f \u0645\u0646 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/8/5f116b285a1ad.jpg"
            },
            {
                "id": "12",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0628\u0646\u0641\u0633\u062c\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u0628\u0646\u0641\u0633\u062c\u064a \u0645\u0646 \u0645\u0633\u0641\u0627\u0644\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0645\u0646 \u0663\u0668 \u0627\u0644\u0649 \u0665\u0662",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/9/5f116b7c9770b.jpg"
            },
            {
                "id": "13",
                "name": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u062c\u0648\u064a\u062a\u064a",
                "type": "2",
                "des": "",
                "category_id": "11",
                "simple_des": "\u0643\u0648\u0633\u062a\u0645 \u0627\u0628\u0648 \u0627\u0644\u0643\u0644\u0627\u062f\u0629 \u062c\u0648\u064a\u062a\u064a",
                "store_id": "1",
                "category_name": "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064a",
                "store_name": "\u0641\u064a\u0633 \u0634\u0648\u0628 ",
                "img": "http://alnahr.net/alnahr-store/img/product/10/5f116bc474a6a.jpg"
            }
        ],
        "pages": 5,
        "page": 1
    };
    return (
        <WingBlank >
            <List className="my-list">
                {
                    d.data.map((order, i) => (
                        // <Card order={order} index={i}/>
                        <CardBasket />
                    ))
                }
            </List>
        </WingBlank>

    )
}
export default Orders;