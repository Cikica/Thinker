export type IDoneEditingOutlineActionType = "DoneEditingOutline";

export interface IDoneEditingOutlineAction {
    type: IDoneEditingOutlineActionType
}

export const DoneEditingOutlineAction = (): IDoneEditingOutlineAction => {
    return {
        type: "DoneEditingOutline"
    };
}