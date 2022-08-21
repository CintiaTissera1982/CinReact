/* const productos = [
    { 
        id: '1', 
        name: 'VINO TORO BLANCO 12 X 1000 CC', 
        price: 3200, 
        category: 'VINOS', 
        img:'../images/20.jpg', 
        stock: 25, 
        description:'Vino de Mesa Blanco con finas uvas de los campos mendocinos'
    },
    {
        id:'2',
        name:'VINO TORO TINTO 12 X 1000 CC',
        price:4000,
        category:'VINOS',
        img:'../images/22.jpg',
        stock:16,
        description:'Vino de Mesa TINTO con finas uvas de los campos mendocinos'
     },

     {
        id:'3',
        name:'JUGO BAGGIO 8 X 1000 CC DURAZNO',
        price:400,
        category:'JUGOS',
        img:'../images/107.jpg',
        stock:16,
        description:'Jugo de frutas naturales. sabores varios: durazno, pera, naranja, manzana, multifrutales'
     },
     {
        id:'4',
        name:'PURE DE TOMATE LA HUERTA X 500 GR',
        price:100,
        category:'COMESTIBLES',
        img:'../images/189.jpg',
        stock:14,
        description:'Riquisimo pure de tomates. Especial para salsas'
     },
     {
        id:'5',
        name:'MERMELADA DURAZNO ORIETA X 500 GR',
        price:80,
        category:'COMESTIBLES',
        img:'../images/338.jpg',
        stock:14,
        description:'Mermelada de ricos sabores. Durazno, pera, naranja'
     },{
        id:'6',
        name:'VODKA SMIRNOFF X 750 CC',
        price:80,
        category:'BEBIDAS BLANCAS',
        img:'../images/1124.jpg',
        stock:14,
        description:'Bebida blanca de diferentes sabores'
     }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductosById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
} */