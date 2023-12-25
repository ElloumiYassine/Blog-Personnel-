export class Skills {
    id?:number;
    Domaine!: String;
    Competance!: String;
    source!:String;
    date?:Date;
    constructor(Domaine: String,
        Competance: String,
        source:String,

        ) {
            this.Domaine=Domaine;
            this.Competance=Competance;
            this.source=source;
            this.date=new Date();
            
    }
}