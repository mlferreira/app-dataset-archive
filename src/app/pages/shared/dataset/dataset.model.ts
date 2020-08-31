export class Dataset {

    public id: Number;
    public name: string;
    public alias: string;
    public status: string;
    public description: string;
    public tags: string[];
    public contributionQuestion: string;

    public downloadLink?: string;
    public datasetFile?: File;
    public creationDate?: Date;
    public updateDate?: Date;
    public author?: string;

    constructor (
        id: Number,
        name: string, 
        alias: string, 
        status: string, 
        description: string,
        tags: string[], 
        contributionQuestion: string, 
        updateDate: Date,
        datasetFile?: File
        ){
            this.id = id;
            this.name = name;
            this.alias = alias;
            this.status = status;
            this.description = description;
            this.tags = tags;
            this.contributionQuestion = contributionQuestion;
            this.updateDate = updateDate;
            this.datasetFile = datasetFile;
        }

}