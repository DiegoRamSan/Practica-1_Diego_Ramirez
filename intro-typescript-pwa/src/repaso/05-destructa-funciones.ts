export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Nokia',
    precio:1200
}

const tablet:Producto={
    desc:'Ipas Air',
    precio:20500
}

export function calcularIva(Productos:Producto[]):number{
    let total=0;
    Productos.forEach((Producto)=>{
        total<= Producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const totIva=calcularIva(articulos1);
console.log('totIva:',totIva);

export function calcularIVA(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
})
    return [total,total*0.16];
}

const articulos=[tablet,telefono];
const [total,iva]=calcularIVA(articulos);
console.log('Total: ',total);
console.log('Total con IVA: ',iva)