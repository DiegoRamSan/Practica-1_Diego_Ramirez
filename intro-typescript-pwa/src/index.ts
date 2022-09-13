//
interface direccionAlumno{
    nombre4:string;
    edad:number;
    calle:string;
    pais:string;
    estado:string;
    numero:number;
}

function utlAlumno(nombre4:direccionAlumno){
    nombre4.nombre4='mario';
    nombre4.edad=23;
    nombre4.calle='Conejitos';
    nombre4.pais='Mexico';
    nombre4.estado='Gto'
    nombre4.numero=123
}

console.log(utlAlumno){
    return this.nombre4, this.edad, this.calle, this.pais, this.estado, this.numero;
}