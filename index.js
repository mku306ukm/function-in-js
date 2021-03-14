
if(1){
var i = 12345;
console.log(i)
}
console.log(i);
function ui(name)
{
    let i = 9;
    console.log(i);
    return `this is a ${name} ui`;
}

console.log(ui("harry"),i)

function greet(name,thank='thank you'){
    console.log(`happy birthday ${name} I wish I could write your name on the sky to let the world know how special  you are to me. Here’s me wishing you a very happy birthday. ${thank}!`);


}

let name = 'umesh';
let name2 = 'samod';

greet(name,'thanks a lot');

const myobj = {
    name:"kumar",
    game: function(){
        return "umesh";
    }
}
console.log(myobj.game())

arr = ['fruit', 'vegetables', 'furniture'];

arr.forEach(function(element, index, array){
    console.log(element, array, index)
});

