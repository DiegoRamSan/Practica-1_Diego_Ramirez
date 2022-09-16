class Valores{
    public a:number;
    public b:number;
    public c:number;
}

let Numeros:Valores
Numeros.a=2;
Numeros.b=5;
Numeros.c=12

const Menos:number=-1*Numeros.b;
const DOSa:number=2*Numeros.a;
const Bcuadrada:number=Numeros.b*Numeros.b;
const CUATROac:number=4*(Numeros.a*Numeros.c);
const RestaRaiz:number=Bcuadrada-CUATROac;
const Raiz:number=RestaRaiz/2;
const Superior:number=Menos+Raiz;
const RaizCompleta:number=Superior/DOSa;

console.log('El resultado para la Raiz con valores a=2, b=5, c=12 es: ',RaizCompleta);