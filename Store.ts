import { createStore, Store } from "redux";

import { IState, MakeRootReducer } from "./reducers/RootReducer";

export function MakeStore():Store<IState> {
    return createStore(
        MakeRootReducer()
    );
}