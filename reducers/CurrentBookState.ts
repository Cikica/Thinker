export class CurrentBookState {
    title: string = "";
    chapters: Array<IBookChapter> = [];
}

export interface IBookChapter {
    title: string;
    text: Array<string>;
}