export type IBookActionSaveOutlineEditType = "SaveOutline";

export interface IBookActionSaveOutlineEdit {
    type: IBookActionSaveOutlineEditType;
}

export const BookActionSaveOutlineEdit = (): IBookActionSaveOutlineEdit => {
    return {
        type: "SaveOutline"
    };
}