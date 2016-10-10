var names = ['Rooney', 'Pogba', 'Rashford'];

// names.map(function(name) {
//     console.log('function ' + name);
// });
//
// names.map((name) => {
//     console.log('arrow function ' + name);
// });
//
// names.map((name) => console.log('arrow function (expression) ' + name));

// var person = {
//     name: 'Yilson',
//     greet: function() {
//         names.map(function(name) {
//             console.log(this.name + ' say hi to ' + name);
//         });
//     }
// }
//
// person.greet();

// var person = {
//     name: 'Yilson',
//     greet: function() {
//         names.map((name) => {
//             console.log(this.name + ' say hi to ' + name);
//         });
//     }
// }
//
// person.greet();

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(3, 4));

var addExpression = (a, b) => a + b;

console.log(addExpression(1, 1));
