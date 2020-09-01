import axios from "axios";
import {Toast} from 'antd-mobile'
export const activeModelMethod = (val) => {
  return {
    type: "ACTIVE_MODEL",
    payload: val,
  };
};
//-------------------------------------------------------------
export const closeModelMethod = (val) => {
  return {
    type: "CLOSE_MODEL",
    payload: val,
  };
};
//-------------------------------------------------------------
export function fetchingBasketsMethod(username = "", password = "") {
  return function (dispatch) {
    // let url = `http://localhost:8050/api/myBasket/getBasket?username=&password=12345678`;
    let url = `https://albarqexpress.com/store/api/_getBaskets.php?username=${username}&password=${password}`;
    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          dispatch({
            type: "FETCH_BASKETS_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "FETCH_BASKETS_REJECTED", payload: err });
        });
  };
}

export function deleteBasketsMethod(username = "", password = "", basketId) {
  return function (dispatch) {
    // let url = `http://localhost:8050/api/myBasket/getBasket?username=&password=12345678`;
    let url = `https://albarqexpress.com/store/api/_deleteBasket.php?username=${username}&password=${password}&id=${basketId}`;
    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          Toast.success(' تم ', 2, null, false);

          dispatch({
            type: "REMOVE_BASKET_FROM_DB_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "REMOVE_BASKET_FROM_DB_REJECTED", payload: err });
        });
  };
}
export function createNewBasket(username = "", password = "", basket) {
  return function (dispatch) {
    // let url = `http://localhost:8050/api/myBasket/getBasket?username=&password=12345678`;
    if (basket && username.length > 0) {
      let url = `https://albarqexpress.com/store/api/_createBasket.php/?username=${username}&password=${password}&town=${basket.town}&address=${basket.address}&note=${basket.note}&phone=${basket.phone}&name=${basket.name}&city=${basket.city}`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          Toast.success(' تم ', 2, null, false);
          dispatch({
            type: "CREATE_NEW_BASKET_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_NEW_BASKET_REJECTED", payload: err });
        });
    }
  };
}

//-------------------------------------------------------------
export function addItemToBasket(username, password, product, basket) {
  return function (dispatch) {
    if (product && basket) {
      const url = `https://albarqexpress.com/store/api/_addToBasket.php?username=${username}&password=${password}&product_id=${product.product.id}&option[]=${product.options.id}&basket=${basket.id}`;
      console.log(url);
      axios.get(url).then((response) => {
        Toast.success(' تم ', 2, null, false);
        dispatch({
          type: "ADD_ITEM_FROM_BASKET_FULFILLED",
          payload: response.data.data,
        });
      }).catch((err) => {
        dispatch({ type: "REMOVE_ITEM_FROM_BASKET_REJECTED", payload: err });
      });
    }
  };
}

export function removeItemFromBasket() {
  return function (dispatch) {
    let url = `https://albarqexpress.com/store/api/_removeItemFromBasket.php?username=07822816693&password=12345678`;
    // let url = `https://albarqexpress.com/store/api/_getBaskets.php?username=07822816693&password=12345678`;
    axios
      .get(url)
      .then((response) => {
        Toast.success(' تم ', 2, null, false);
        dispatch({
          type: "ADD_ITEM_FROM_BASKET_FULFILLED",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "ADD_ITEM_FROM_BASKET_REJECTED", payload: err });
      });
  };
}

export function clearBasketFromItems() {
  return function (dispatch) {
    let url = `http://localhost:8050/api/myBasket/getBasket?username=07822816693&password=12345678`;
    // let url = `https://albarqexpress.com/store/api/_getBaskets.php?username=07822816693&password=12345678`;
    axios
      .get(url)
      .then((response) => {
        Toast.success(' تم ', 2, null, false);
        dispatch({
          type: "CLEAR_BASKET_FROM_ITEMS_FULFILLED",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "CLEAR_BASKET_FROM_ITEMS_REJECTED", payload: err });
      });
  };
}
export function AddTheFlagToListMethod(username, password, selectedFlag) {
  return function (dispatch) {
    const url = `ttps://albarqexpress.com/store/api/favourite/createList/?username=${username}&password=${password}&listname=${selectedFlag.listname}&bg_color=${selectedFlag.bg_color}&font_color=${selectedFlag.font_color}`;

    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          Toast.success(' تم ', 2, null, false);
          dispatch({
            type: "ADD_NEW_FLAG_TO_LIST_FULFILLED",
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "ADD_NEW_FLAG_TO_LIST_REJECTED", payload: err });
        });
  };
}

//-------------------------------------------------------------
export function sendBasketToDB(username = "", password = "", basketId) {
  return function (dispatch) {
    let url = `https://albarqexpress.com/store/api/_sendBasket.php?username=${username}&password=${password}&id=${basketId}`;
    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          Toast.success(' تم ', 2, null, false);
          dispatch({
            type: "SEND_BASKET_TO_DB_FULFILLED",
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "SEND_BASKET_TO_DB_REJECTED", payload: err });
        });
  };
}
export function cencelSendBasketToDB(username = "", password = "", basketId) {
  if (username) {
    return function (dispatch) {
      // let url = `http://localhost:8050/api/myBasket/getBasket?username=&password=12345678`;
      let url = `https://albarqexpress.com/store/api/_cancelBasket.php?username=${username}&password=${password}&id=${basketId}`;
      if (username.length > 0)
        axios
          .get(url)
          .then((response) => {
            Toast.success(' تم ', 2, null, false);
            dispatch({
              type: "CENCEL_SEND_BASKET_TO_DB_FULFILLED",
              payload: response.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: "CENCEL_SEND_BASKET_TO_DB_REJECTED",
              payload: err,
            });
          });
    };
  }
}
//---------------------------------------------
export const selectedFlag = (val) => {
  return {
    type: "SELECTED_FLAG",
    payload: val,
  };
};
export const selectedNewFlag = (val) => {
  return {
    type: "SELECTED_NEW_FLAG",
    payload: val,
  };
};

//-------------------------------------------
export const selectedBasketMethod = (val) => {
  return {
    type: "SELECTED_BASKET",
    payload: val,
  };
};

//-------------------------------------------
let selectedBaskets = [];
export const all_selectedBasketsMethod = (val, addingState) => {
  if (val && addingState) 
    selectedBaskets.push(val.id);
  else {
    const newList = selectedBaskets.filter((item) => item !== val.id);
    selectedBaskets = newList;
  }
  return {
    type: "ALL_SELECTED_BASKETS",
    payload: selectedBaskets,
  };
};
//-------------------------------------------
export const selectedOptionsMethods = (val) => {
  return {
    type: "SELECTED_OPTIONS",
    payload: val,
  };
};

export const activeProductMethod = (obj = {}, option = {}) => {
  return {
    type: "ACTIVE_PRODUCT",
    payload: {
      product: obj,
      options: option,
    },
  };
};
