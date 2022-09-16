interface Detalles{
    autor:string;
    anio:number;
}

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles:Detalles
}

const reproductor:Reproductor={
    volumen:90,
    segundo:60,
    cancion:'Mañanitas',
    detalles:{
        autor:'Cepillin',
        anio:1900,
    }
}

const{cancion,volumen,segundo,detalles}=reproductor;

const{autor,anio}=detalles;

console.table('el nombre de la cancion: '+ cancion)
console.table('el volumen actual: '+ volumen)
console.table('el segundo: '+ segundo)
console.table('el nombre de la cancion: '+ autor)

const dbz:string[]=['Goku','Vegeta','Krillin','Yamcha'];

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 1:', dbz[1]);
console.log('Personaje 1:', dbz[2]);
console.log('Personaje 1:', dbz[3]);

const[p1,p2,p3,p4]=dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 1:', p2);
console.log('Personaje 1:', p3);
console.log('Personaje 1:', p4);

