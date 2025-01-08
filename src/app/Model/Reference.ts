export class Reference {
    id: number = 0;
    name : string = "";
    authors : string = "";
    journal : string = "";
    year : number = 0;

    constructor(id: number, name: string, authors: string, journal: string, year: number) {
        this.id = id;
        this.name = name;
        this.authors = authors;
        this.journal = journal;
        this.year = year;
    }

}