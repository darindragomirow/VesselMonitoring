import { ITag, ITagValue } from 'src/app/models/tagModels';

export declare interface IDataWidget {
    tag: ITag;
    tagData: ITagValue;
    tagChange(selectedTag: ITag): void;
    subscribeForTagValue(): void;
    getTagValue(): void;
    updateInstrumentData(): void;
}
