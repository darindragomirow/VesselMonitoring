export interface ITag {
    id: string;
    browseName: string;
    dataType: string;
}

export interface ITagValue {
    value: any;
    dataType: any;
    isGood: boolean;
    time: string;
    errorMessage: string;
}
