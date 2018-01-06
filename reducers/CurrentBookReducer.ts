
import { CurrentBookState } from "./CurrentBookState";

export function CurrentBookReducer(
    state: CurrentBookState = new CurrentBookState(),
    action: any
): any {
    switch(action.type) {
        default: 
            return state;
    }
}