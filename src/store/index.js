import { combineReducers } from "redux";
import activeCityReducer from "./baskets/reducer/reducer-active-city";
import activeTownReducer from "./baskets/reducer/reducer-active-town";
import citiesReducer from "./baskets/reducer/cities-reducer";
 import basketsList from "../pages/models/store/reducer/Baskets";
import productsList from "../pages/product-tab/store/reducer/products-reducer";
import NewFlagList from "../pages/models/store/reducer/NewFlagList";
import ModelList from "../pages/models/store/reducer/ModelList";
import ActiveModelReducer from "../pages/models/store/reducer/actions-model-reducer";
import ActiveProductReducer from "../pages/models/store/reducer/active-product-reducer";
import selectedBasket from "../pages/models/store/reducer/active-basket-reducer";
import all_selectedBaskets from "../pages/models/store/reducer/allSelectedBaskets";
import userLogin from './../user/store-singin/reducers/singin-reducer'
import actionsOnBaskets from '../pages/models/store/reducer/actions-model-reducer'
const allReducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer,
  activeTown: activeTownReducer,
  baskets: basketsList,
  products: productsList,
  modelList: ModelList,
  newFlagList: NewFlagList,
  ActiveModel: ActiveModelReducer,
  activeProduct: ActiveProductReducer,
  selectedBasket:selectedBasket,
  all_selectedBaskets:all_selectedBaskets,
  user:userLogin,
  actionsBasket:actionsOnBaskets,
});
export default allReducers;
