import axios from "axios";
import { Toast } from "antd-mobile";
export function logoutMethod(state) {
  return function (dispatch) {
    if (state) {
      localStorage.removeItem("user");
    }
    dispatch({
      type: "SINOUT_FULFILLED",
      payload: {
        isLogout: state,
      },
    });
  };
}
export function singinWithServer(username = "", password = "") {
  return function (dispatch) {
    let user = localStorage.getItem("user");
    if (username || user) {
      switch (user) {
        case null: {
          axios
            .get(
              `https://albarqexpress.com/store/api/_login.php?username=${username}&password=${password}`
            )
            .then((response) => {
              if (response.data.data) {
                let obj = { data: response.data.data, password: password };
                localStorage.setItem("user", JSON.stringify(obj));
                dispatch({
                  type: "SINGIN_WITH_DB_FULFILLED",
                  payload: obj,
                });
              } else {
                Toast.fail("خطاء حصل");
                dispatch({ type: "SINGIN_WITH_DB_REJECTED", payload: 'err' });
              }
            })
            .catch((err) => {
              dispatch({ type: "SINGIN_WITH_DB_REJECTED", payload: err });
            });
          break;
        }
        default: {
          user = JSON.parse(user);
          dispatch({
            type: "SINGIN_WITH_DB_FULFILLED",
            payload: user,
          });
        }
      }
    }
  };
}
