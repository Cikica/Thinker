import { assoc, pipe } from "ramda";

import BookState from "./BookState";
import { IBookActionEditOutline } from "./BookActionEditOutline";
import { IDoneEditingOutlineAction } from "../actions/DoneEditingOutlineAction";
import { IBookActionTypeOutlineText } from "./BookActionTypeOutlineText";

export type TCurrentBookReducerAction =
    IBookActionEditOutline
    |IBookActionTypeOutlineText
    |IDoneEditingOutlineAction
;

export default function BookReducer(
    state: BookState = new BookState(),
    action: TCurrentBookReducerAction
): BookState {
    switch(action.type) {
        case "EditOutline":
            return editOutlineMutator(action, state);  
        case "TypeOutlineText":
        return typeOutlinetext(action, state);
        default: 
            return state;
    }
}

const editOutlineMutator = (action:IBookActionEditOutline, state:BookState): BookState => {
    return pipe(
        assoc(
            "outlineInEdit", 
            action.outlinePointIndex
        ),
        assoc(
            "outlineInEditText",
            state.outline[action.outlinePointIndex]
        ),
    )(state);
}

const typeOutlinetext = (action:IBookActionTypeOutlineText, state:BookState): BookState => {
    return assoc(
        "outlineInEditText",
        action.text,
        state
    );
}