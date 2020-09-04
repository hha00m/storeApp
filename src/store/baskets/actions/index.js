import axios from "axios";
export const activeCityMethod = (city_, cities_) => {
  return {
    type: "SELECTED_CITY",
    payload: {
      city: city_,
      cities: cities_,
    },
  };
};

export const activeTownMethod = (town_) => {
  return {
    type: "SELECTED_TOWN",
    payload: town_,
  };
};

export function fetchingCitiesMethod(username, password) {
  return function (dispatch) {
    let citiesAndTowns = localStorage.getItem(
      "CitiesAndTownsListForLocalUseOnly"
    );

    switch (citiesAndTowns) {
      case null: {
        axios
          .get(`https://albarqexpress.com/store/api/_getCitiesAndTowns.php?username=${username}&password=${password}`)
          .then((response) => {
            citiesAndTowns = response.data.data;
            localStorage.setItem("CitiesAndTownsListForLocalUseOnly", JSON.stringify(citiesAndTowns));
            dispatch({ type: "FETCH_CITIES_FULFILLED", payload: citiesAndTowns });
          })
          .catch((err) => {
            dispatch({ type: "FETCH_CITIES_REJECTED", payload: err });
          });
        break;
      }
      default: {
        citiesAndTowns = JSON.parse(citiesAndTowns);
        dispatch({ type: "FETCH_CITIES_FULFILLED", payload: citiesAndTowns });
      }
    }
  };
}

export function fetchingBasketsMethod(username, password) {
  return function (dispatch) {
    // let citiesAndTowns = sessionStorage.getItem(
    //   "myBasketInThis_SessionStoreage"
    // );
    
    axios.get(`https://albarqexpress.com/store/api/_getBaskets.php?username=${username}&password=${password}`)
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


