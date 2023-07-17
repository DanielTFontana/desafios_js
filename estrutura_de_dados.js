class Alunos {
    constructor (nome, idade,sexo){
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo,
        this.arrayAlunos = []
    }


    addAluno(nome, idade, sexo){
        //metodo de adicionar o aluno
        let objAluno = {}
        objAluno.nome = nome
        objAluno.idade = idade
        objAluno.sexo = sexo
        this.arrayAlunos.push(objAluno)
        return objAluno
    }

    addAlunoPosicao(posicao, excluir, aluno){
        excluir = 0
        if(posicao < 0 || posicao > this.arrayAlunos.length){
            console.log("Posicao invalida")
            return
        }
        this.arrayAlunos.splice(posicao, excluir,aluno)
    }

    rmvAluno(nome){//metodo remover aluno
        for (let i = 0; i <this.arrayAlunos.length; i++ ){
            if(this.arrayAlunos[i].nome == nome){
                this.arrayAlunos.splice(this.arrayAlunos[i],1)
            }
        }
    } 
    exibirAlunos(){
        console.log(this.arrayAlunos)
    }
    contemAluno(nome){
        //metodo que pesquisa se há o aluno na lista
        let alunoEncontrado = false
        for (let i = 0; i <this.arrayAlunos.length; i++ ){
            if(this.arrayAlunos[i].nome == nome){
                console.log(this.arrayAlunos[i])
                alunoEncontrado = true
                break
            }
        }
        if(!alunoEncontrado){
            console.log('erro') 
        }
    }
    quantiAlunos(){//metodo que verifica a quantidade de alunos
        console.log(this.arrayAlunos.length)
    }
   


}


const funcoesAlunos = new Alunos();
funcoesAlunos.addAluno("Daniel", 30,"M")
funcoesAlunos.addAluno("maju", 30,"f")
funcoesAlunos.addAluno("fabio", 37,"M")
funcoesAlunos.addAluno("Daniela", 19,"f")
funcoesAlunos.addAluno("Gabriel", 32,"M")
funcoesAlunos.addAluno("Roberta", 32,"f")
funcoesAlunos.addAluno("Sara", 29,"f")



funcoesAlunos.exibirAlunos()
let aluno1 = {
    nome: "Gaguinho",
    idade: 20,
    sexo:'M'
}
funcoesAlunos.addAlunoPosicao(20, 0, aluno1)

funcoesAlunos.exibirAlunos()
