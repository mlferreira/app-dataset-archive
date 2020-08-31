import { Dataset } from '../dataset/dataset.model';
import { Contributor } from '../contributor/contributor.model';

export class Entry {

    public id: Number;
    public name: string;
    public status: string;
    public description: string;
    public tags: string[];
    public contributionAnswer: string;
    public dataset: Dataset; 
    public downloadLink?: string;
    public file?: File;
    public creationDate?: Date;
    public updateDate?: Date;
    public contributor?: Contributor;
    


    constructor (
        id: Number,
        name: string, 
        dataset: Dataset, 
        status: string, 
        description: string,
        tags: string[], 
        contributionAnswer: string, 
        updateDate: Date,
        downloadLink: string
        ){
            this.id = id;
            this.name = name;
            this.dataset = dataset;
            this.status = status;
            this.description = description;
            this.tags = tags;
            this.contributionAnswer = contributionAnswer;
            this.updateDate = updateDate;
            this.downloadLink = downloadLink
        }

}