

//objetos

let amaterno:string|number;

amaterno='sanchez';
amaterno=100;


let mascotas=['perro','gato',100,true];

let tem2:(boolean|number|string)[]=['rata',100];

tem2.push(200);

let acciones:string[]=['dormir','comer','volar']

interface Alumno{
    matricula:number|string,
    nombre2:string,
    apaterno2:string,
    acciones?:string[],
    email:string
}


const alumno:Alumno={
    matricula:1234,
    nombre2:'Mario',
    apaterno2:'lopez',
    email:'xxxx@gmail.com'
}

alumno.nombre2='Dario';

console.table(alumno);