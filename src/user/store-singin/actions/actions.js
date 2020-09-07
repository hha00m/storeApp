import axios from "axios";
import { Toast } from "antd-mobile";
import { API } from "../../../config";
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
    let url = `${API}/_login.php?username=${username}&password=${password}`;
    if (username || user) {
      if(!user) {
          axios
            .get(url)
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
                dispatch({ type: "SINGIN_WITH_DB_REJECTED", payload: "err" });
              }
            })
            .catch((err) => {
              dispatch({ type: "SINGIN_WITH_DB_REJECTED", payload: err });
            });
      }else{
          user = JSON.parse(user);
          dispatch({
            type: "SINGIN_WITH_DB_FULFILLED",
            payload: user,
          });
      }
    }else
    dispatch({ type: "SINGIN_WITH_DB_REJECTED", payload: "err" });

    
  };
}
