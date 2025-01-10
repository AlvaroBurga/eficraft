export class Reference {
    id: number;
    name : string;
    authors : string;
    journal : string;
    year : number;

    constructor(id: number, name: string, authors: string, journal: string, year: number) {
        this.id = id;
        this.name = name;
        this.authors = authors;
        this.journal = journal;
        this.year = year;
    }

}