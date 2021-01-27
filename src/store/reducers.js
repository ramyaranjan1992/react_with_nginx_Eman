import { combineReducers } from "redux";

//All reducers----

import entitiesReducers from "./entities";

export default combineReducers({
  entities: entitiesReducers,
});
