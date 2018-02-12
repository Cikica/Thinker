import { combineReducers, Reducer } from "redux";

import BookState from "./../screenBook/BookState";
import BookReducer from "./../screenBook/BookReducer";

export interface IState {
    CurrentBook: BookState
}

export function MakeRootReducer(): Reducer<IState> {
    return combineReducers<IState>({
        CurrentBook: BookReducer
    });
}
