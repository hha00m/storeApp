import { combineReducers } from "redux";
import activeCityReducer from "./baskets/reducer/reducer-active-city";
import activeTownReducer from "./baskets/reducer/reducer-active-town";
import citiesReducer from "./baskets/reducer/cities-reducer";
 import basketsList from "../pages/models/store/reducer/Baskets";
 import newBasket from "../pages/models/store/reducer/create-new-basket-reducer";
 import basketById from "../pages/models/store/reducer/FetchBasketById_reducer";
import productsList from "../pages/product-tab/store/reducer/products-reducer";
import NewFlagList from "../pages/models/store/reducer/NewFlagList";
import ModelList from "../pages/models/store/reducer/ModelList";
import ActiveModelReducer from "../pages/models/store/reducer/actions-model-reducer";
import ActiveProductReducer from "../pages/models/store/reducer/active-product-reducer";
import selectedBasket from "../pages/models/store/reducer/active-basket-reducer";
import all_selectedBaskets from "../pages/models/store/reducer/allSelectedBaskets";
import userLogin from './../user/store-singin/reducers/singin-reducer'
import actionsOnBaskets from '../pages/models/store/reducer/actions-model-reducer'
import orders from '../pages/orders-tab/store/reducer/orders'
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
  user:userLogin,
  actionsBasket:actionsOnBaskets,
  basketById:basketById,
  orders:orders,
  newBasket:newBasket,
  // create_update_basket:create_update_basket,
});
export default allReducers;
