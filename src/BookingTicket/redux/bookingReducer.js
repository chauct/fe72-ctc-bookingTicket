const initialState = {
  listSeat: [],
};

const reducer = function (currentState = initialState, action) {
  switch (action.type) {
    case "DAT_GHE": {
      let cloneListSeat = [...currentState.listSeat];
      let index = cloneListSeat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        cloneListSeat.splice(index, 1);
      } else {
        cloneListSeat.push(action.ghe);
      }
      currentState.listSeat = cloneListSeat;
      return { ...currentState };
    }
    case "HUY_GHE": {
      let cloneListSeat = [...currentState.listSeat];
      let index = cloneListSeat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        cloneListSeat.splice(index, 1);
      }
      currentState.listSeat = cloneListSeat;
      return { ...currentState };
    }
    default:
      return { ...currentState };
  }
};
export default reducer;
