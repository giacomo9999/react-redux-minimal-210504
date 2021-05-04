import { ADD_BOOK } from "../types";

const initialState = {
  booksData: [{ title: "The Eyes Of The Overworld", author: "Jack Vance" }],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, booksData: [...state.booksData, action.newBook] };
    default:
      return state;
  }
};

export default appReducer;
