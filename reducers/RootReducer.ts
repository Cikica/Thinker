import { combineReducers, Reducer } from "redux";

import { CurrentBookState } from "./CurrentBookState";
import { CurrentBookReducer } from "./CurrentBookReducer";

export interface IState {
    CurrentBook: CurrentBookState
}

export function MakeRootReducer(): Reducer<IState> {
    return combineReducers<IState>({
        CurrentBook: CurrentBookReducer
    });
}
