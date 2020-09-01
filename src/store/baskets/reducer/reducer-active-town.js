export default function (state = {}, action) {
  switch (action.type) {
    case "SELECTED_TOWN":{
      return action.payload.towns.find(
        (town_) => town_.label === action.payload.town.label
      );
    }
      default:return state;
  }
}
