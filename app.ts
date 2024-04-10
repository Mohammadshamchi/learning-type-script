function add(input1: number | string, input2: number | string,resultType: 'is-number' | 'is-string' ) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||resultType === 'is-number') {
        result = +input1 + +input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
}

console.log(add(5, 3,'is-number'));
console.log(add('5', '3','is-number'));
console.log(add("Book1", "Book2",'is-string'));
