// Imports: Dependencies
import { combineReducers } from 'redux';
export const SET_MOV = 'SET_MOV'
export const SET_FAV = 'SET_FAV'

const initialState = []

const movieItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV:
      let tempFav = [];
      const { id, fav } = action.payload;
      console.log('state', state)
      state.map((item) => {
        console.log('item.id', item.id + ' ' + id)
        if (item.id !== id) {
          tempFav.push({
            ...item,
          })
        } else {
          console.log('buldu')
          item.isFav = fav;
          tempFav.push({
            ...item,
          })
        }
      })
      state = tempFav
      return [...state]
    case SET_MOV:
      let temp = [];
      action.payload.map((item) => {
        temp.push({
          ...item,
          isFav: false,
        })
      })
      state = temp
      return [...state]
  }
  return state
}

// Redux: Root Reducer
const rootReducer = combineReducers({
    movieItemsReducer: movieItemsReducer,
});
  // Exports
export default rootReducer;
