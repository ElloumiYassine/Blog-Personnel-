export class personne {
    id?:number;
    nom!: String;
    prenom!: String;
    naissance!: String;
    classe!:String;
    specialite!:String;
    phone!:Number
    constructor(nom: String,
        prenom: String,
        naissance: String,
        classe:String,
        specialite:String,
        phone:Number

        ) {
            this.nom=nom
            this.prenom=prenom
            this.naissance=naissance
            this.classe=classe
            this.specialite=specialite
            this.phone=phone
    }
}