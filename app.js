var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color || (Color = {}));
var product = {
    title: 'test',
    discount: ["yalda", "Saleno"],
    price: 100,
    color: Color.BLUE,
};
if (product.color === Color.BLUE) {
    console.log('We sold out blue color');
}
