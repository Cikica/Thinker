export type IBookActionEditOutlineType = "EditOutline";

export interface IBookActionEditOutline {
    type: IBookActionEditOutlineType;
    outlinePointIndex: number;
}

export const BookActionEditOutline = (outlinePointIndex:number): IBookActionEditOutline => {
    return {
        type: "EditOutline",
        outlinePointIndex
    };
}