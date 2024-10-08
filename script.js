class heroi{

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(ataque){
        if(this.tipo === "mago"){
            ataque = "magia de fogo"
        }else if(this.tipo === "guerreiro"){
            ataque = "a espada da luz"
        }else if(this.tipo === "monge"){
            ataque = "artes marciais"
        }else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

}

let aventura = new heroi("joe", 18, "mago")
aventura.atacar()
let aventuraTerrasAltas = new heroi("jason", 15, "ninja")
aventuraTerrasAltas.atacar()
let aventuraNoGelo = new heroi("michael", 15, "guerreiro")
aventuraNoGelo.atacar()
let aventuraNaFloresta = new heroi("freddy", 20, "monge")
aventuraNaFloresta.atacar()