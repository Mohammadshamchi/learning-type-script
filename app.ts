enum Color {
    RED, 
    BLUE,
    GREEN,
}

const product = {
    title: 'test',
    discount: ["yalda","Saleno"],
    price: 100,
    color: Color.BLUE,
}

if (product.color === Color.BLUE) {
    console.log('We sold out blue color');
}
