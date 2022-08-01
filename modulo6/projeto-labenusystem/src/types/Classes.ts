export class Turma {

    constructor(
        public id: string,
        public nome: string,
        public modulo: number
    ){}

}

class Usuario {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: string
    ){}
}

export class Estudante extends Usuario{
    public hobbies: string[]

    constructor(id:string, nome:string, email:string, data_nasc:string, turma_id:string, hobbies:string[]
    ){
        super(id, nome, email, data_nasc,turma_id),
        this.hobbies = hobbies
    }
}

export class Docente extends Usuario{
    public especialidades: string[]

    constructor(id:string, nome:string, email:string, data_nasc:string, turma_id:string, especialidades:string[]
    ){
        super(id, nome, email, data_nasc,turma_id),
        this.especialidades = especialidades
    }
}