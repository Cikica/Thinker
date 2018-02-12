import { assoc } from "ramda";

import BookState from "./BookState";
import { IBookActionEditOutline } from "./BookActionEditOutline";
import { IDoneEditingOutlineAction } from "../actions/DoneEditingOutlineAction";

export type TCurrentBookReducerAction =
    IBookActionEditOutline
    |IDoneEditingOutlineAction
;

export default function BookReducer(
    state: BookState = new BookState(),
    action: TCurrentBookReducerAction
): BookState {
    switch(action.type) {
        case "EditOutline":
            return editOutlineMutator(action, state);  
        default: 
            return state;
    }
}

const editOutlineMutator = (action:IBookActionEditOutline, state:BookState): BookState => {
    return assoc(
        "outlineInEdit", 
        action.outlinePointIndex, 
        state
    );
}