export class Reference {
    id: number;
    name : string;
    authors : string;
    journal : string;
    year : number;
    file?: File;

    constructor(id?: number, name?: string, authors?: string, journal?: string, year?: number,file? : File) {
        this.id = id ?? 0;                
        this.name = name ?? "Unknown";    
        this.authors = authors ?? "Anonymous";
        this.journal = journal ?? "N/A";   
        this.year = year ?? new Date().getFullYear(); 
        this.file = file; 
    }
}