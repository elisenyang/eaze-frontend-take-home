const reducer = (state={gifsArray:[], searchText:''}, action) => {
  const newState = Object.assign({},state);
  switch(action.type) {
    case 'RENDER_GIFS':
      newState.gifsArray = action.array
      console.log(newState)
      return newState
    case 'SET_SEARCH':
      newState.searchText = action.search;
      console.log("NEW STATE", newState)
      return newState;
    default: return state;
  }
}

export default reducer;
