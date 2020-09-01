import axios from "axios";
export function singinWithServer(username = "", password = "") {
  return function (dispatch) {
      let user = localStorage.getItem("user");
      if (username||user) {
        switch (user) {
        case null: {
          axios
            .get(
              `https://albarqexpress.com/store/api/_login.php?username=${username}&password=${password}`
            )
            .then((response) => {
              let obj = {data:response.data.data,password:password};
              localStorage.setItem("user", JSON.stringify(obj));

              dispatch({
                type: "SINGIN_WITH_DB_FULFILLED",
                payload:  obj,
              });
            })
            .catch((err) => {
              dispatch({ type: "SINGIN_WITH_DB_REJECTED", payload: err });
            });
          break;
        }
        default: {
          user=JSON.parse(user);
          dispatch({
            type: "SINGIN_WITH_DB_FULFILLED",
            payload: user,
          });
        }
      }
    }
  };
}
