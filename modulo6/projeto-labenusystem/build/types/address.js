"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = exports.Estudante = exports.Turma = void 0;
class Turma {
    constructor(id, nome, modulo) {
        this.id = id;
        this.nome = nome;
        this.modulo = modulo;
    }
}
exports.Turma = Turma;
class Usuario {
    constructor(id, nome, email, data_nasc, turma_id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
    }
}
class Estudante extends Usuario {
    constructor(id, nome, email, data_nasc, turma_id, hobbies) {
        super(id, nome, email, data_nasc, turma_id),
            this.hobbies = hobbies;
    }
}
exports.Estudante = Estudante;
class Docente extends Usuario {
    constructor(id, nome, email, data_nasc, turma_id, especialidades) {
        super(id, nome, email, data_nasc, turma_id),
            this.especialidades = especialidades;
    }
}
exports.Docente = Docente;