

let alunos = [];  

class Aluno {
    constructor (matricula, nome, cpf, dataNascimento, sexo, nomeMae, endereco) {
        this._matricula = matricula;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._sexo = sexo;
        this._nomeMae = nomeMae;
        this._endereco = endereco;
        this._nomePai = '';
        this._email = '';
        this._telefone = '';

        alunos.push(this);
    }

    set matricula(string) {
        this._matricula = string
    }

    get matricula() {
        return this._matricula;
    }

    set nome(string) {
        this._nome = string
    }

    get nome() {
        return this._nome;
    }  

    set cpf(string) {
        this._cpf = string
    }

    get cpf() {
        return this._cpf;
    }

    set dataNascimento(string) {
        this._dataNascimento = string
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    set sexo(string) {
        this._sexo = string
    }

    get sexo() {
        return this._sexo;
    }

    set nomeMae(string) {
        this._nomeMae = string
    }

    get nomeMae() {
        return this._nomeMae;
    }
    
    set endereco(string) {
        this._endereco = string
    }

    get endereco() {
        return this._endereco;
    }

    set nomePai(string) {
        this._nomePai = string
    }

    get nomePai() {
        return this._nomePai;
    }

    set email(string) {
        this._email = string
    }

    get email() {
        return this._email;
    }

    set telefone(string) {
        this._telefone = string
    }

    get telefone() {
        return this._telefone;
    }

}

class Turma {
    constructor (codigo, nome, descricao, turno) {
        this._codigo = codigo;
        this._nome = nome;
        this._descricao = descricao;
        this._turno = turno;
        this._alunosMatriculados = [];
    }

    matricularAluno(matricula) {
        for ( let i = 0; i < alunos.length; i++) {
            if (alunos[i]._matricula == matricula) {
                console.log(`${alunos[i]._nome} foi matriculado(a) na turma de ${this._nome}.`);
                this._alunosMatriculados.push(alunos[i]);
            }
        }
    }

    removerAluno(matricula) {
        for ( let i = 0; i < this._alunosMatriculados.length; i++) {
            if (matricula == this._alunosMatriculados[i]._matricula) {
                console.log(`${this._alunosMatriculados[i]._nome} foi removido(a) da turma ${this._nome}.`);
                this._alunosMatriculados.push(alunos[i]);
            }
        }
    }
}

let turmaASD = new Turma ('01ASD', 'Análise e Desenvolvimento de Sistemas', 'Análise e Desenvolvimento de Sistemas se enquadra como um curso tecnológico da área de Informação e Comunicação.', 'Noturno');
console.log(turmaASD._nome);

function cadastraAluno(){
    Aluno.nome = document.querySelector('#nomeAluno').value;
    Aluno.cpf = document.querySelector('#nomeAluno').value;
    Aluno.dataNascimento = document.querySelector('#nomeAluno').value;
    Aluno.sexo = document.querySelector('#nomeAluno').value;
    Aluno.nomeMae = document.querySelector('#nomeAluno').value;
    Aluno.nome = document.querySelector('#nomeAluno').value;
    Aluno.nome = document.querySelector('#nomeAluno').value;
    Aluno.nome = document.querySelector('#nomeAluno').value;
    Aluno.nome = document.querySelector('#nomeAluno').value;
}

$(document).ready(function(){
    $('#cpfAluno').mask('000.000.000-00');
    $('#telefoneAluno').mask('(00) 0000-0000');
});