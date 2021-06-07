import axios from "axios";

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchedGameUrl,
} from "../api";

/* async(dispatch)=> add this after arrow function as we are using thunk
for async call or use axios(with then and catch) instead of async await. */
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};

export const fetchedSearch = (gameName) => async (dispatch) => {
  const searchedGame = await axios.get(searchedGameUrl(gameName));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGame.data.results,
    },
  });
};
