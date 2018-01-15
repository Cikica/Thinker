
import { CurrentBookState } from "./CurrentBookState";
import { IEditOutlineAction } from "../actions/EditOutlineAction";
import { IDoneEditingOutlineAction } from "../actions/DoneEditingOutlineAction";

export type TCurrentBookReducerAction =
    IEditOutlineAction
    |IDoneEditingOutlineAction
;

export function CurrentBookReducer(
    state: CurrentBookState = new CurrentBookState(),
    action: TCurrentBookReducerAction
): any {
    switch(action.type) {
        case "EditOutline":
            return state;
        default: 
            return state;
    }
}