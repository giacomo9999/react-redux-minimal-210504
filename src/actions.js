import { ADD_BOOK } from "./types";

export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    newBook,
  };
};
