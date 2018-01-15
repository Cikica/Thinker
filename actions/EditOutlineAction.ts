export type IEditOutlineActionType = "EditOutline";

export interface IEditOutlineAction {
    type: IEditOutlineActionType;
    outlinePointIndex: number;
}

export const EditOutlineAction = (outlinePointIndex:number): IEditOutlineAction => {
    return {
        type: "EditOutline",
        outlinePointIndex
    };
}