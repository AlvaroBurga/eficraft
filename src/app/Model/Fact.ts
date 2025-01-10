import { Reference } from "./Reference";

export class Fact {
    id: number ;
    fact : string;
    topic : string ;
    reference : Reference;

    constructor(id: number, fact: string, topic: string, reference: Reference) {
        this.id = id;
        this.fact = fact;
        this.topic = topic;
        this.reference = reference;
    }

}