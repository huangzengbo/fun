
const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case "FETCH_STOCK_SUCCESS":
      const stockSetSum = state.stockSet.concat({
        time: new Date(),
        stock: action.payload
      });
      return {
        ...state, stockSet: stockSetSum.sort((a: iStockSet,b: iStockSet) => b.time.getTime() - a.time.getTime())
      };
    case "FETCH_STOCK_FAIL":
      console.log('ERROR API CALL:', action.payload)
        return {
          ...state
        };
    default:
      return state;
  }
}

export default reducer;