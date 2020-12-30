export interface ITag {
    id: string,
    name: string
}

export interface ITagValue {
    value: any
    dataType: any
    isGood: boolean,
    time: Date,
    errorMessage: string
}