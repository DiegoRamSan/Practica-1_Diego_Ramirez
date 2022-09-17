class tablita{
    private numero:number;
    private numeroSumar:number=5;

    setNumerito(a:number){
        this.numero=a;
    }
    calcularSumatoria():void{
        for(let i=0; i<11; ++i){
            console.log(`${this.numero} + ${this.numero} + ${this.numero} + ${this.numero} + ${this.numero} = ${this.numeroSumar*this.numero}`);
        } 
    }
}

let tablita1=new tablita();
tablita1.setNumerito(5)
console.log(tablita1.calcularSumatoria());
tablita1.setNumerito(3)
console.log(tablita1.calcularSumatoria());
tablita1.setNumerito(7)
console.log(tablita1.calcularSumatoria());