export type IBookActionTypeOutlineTextType = "TypeOutlineText";

export interface IBookActionTypeOutlineText {
    type: IBookActionTypeOutlineTextType;
    text: string;
}

export const BookActionTypeOutlineText = (text:string): IBookActionTypeOutlineText => {
    console.log("new text ", text)
    return {
        type: "TypeOutlineText",
        text,
    };
}