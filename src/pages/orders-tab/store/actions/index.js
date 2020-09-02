import axios from 'axios';

export function fetchingOrdersMethods(username = "", password = "") {
    return function (dispatch) {
      let url = `https://albarqexpress.com/store/api/_getOrders.php?username=${username}&password=${password}`;
      if (username.length > 0)
        axios
          .get(url)
          .then((response) => {
            dispatch({
              type: "FETCH_ORDERS_FULFILLED",
              payload: response.data.data,
            });
          })
          .catch((err) => {
            dispatch({ type: "FETCH_ORDERS_REJECTED", payload: err });
          });
    };
  }