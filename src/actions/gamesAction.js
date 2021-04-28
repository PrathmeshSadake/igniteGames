import axios from "axios";

import { popularGamesURL } from "../api";

/* async(dispatch)=> add this after arrow function as we are using thunk
for async call or use axios(with then and catch) instead of async await. */
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  console.log(popularData);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
