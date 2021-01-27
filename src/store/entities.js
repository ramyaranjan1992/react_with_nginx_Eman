import { combineReducers } from "redux";

//All reducers----
import selectedViewReducer from "./selectedView";
import onlineEmandateReducer from "./onlineEmandate";
import emandateListFilterReducer from "./emandateList"

export default combineReducers({
  selectedView: selectedViewReducer,
  onlineEmandate: onlineEmandateReducer,
  emandateFilterList: emandateListFilterReducer,
});
