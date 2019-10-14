//Boolean
let muted: boolean = true;
muted = false;

//Numeros
let numerador: number = 42;
let denominador = 6;
let resultado = numerador / denominador;

//string
let nombre: string = 'Andres'
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel","Raul","Andres"]

let peopleAndNumbers: Array< string | number>
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(900);

//Enum
enum Color{
    Rojo,
    Verde,
    Azul
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi Color favorito es ${colorFavorito}`);//Mi color favorito es 1

//Any
let comodin: any = "Joker";
comodin = {type:'WildCard'}

//functions
function add(a: number, b: number): number{
    return a + b;
}

const sum = add(7,6);

function createAdder(a: number): (number) => number {
    return function(b:number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//argumentos no obligatorios
function fullName(firstName: string, lastName?: string): string {
    return `${firstName}${lastName}`;
}

const richard = fullName('Andres');

//interfaces
interface Rectangulo{
    ancho: number;
    alto: number;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6
}

function area(r:Rectangulo): number{
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

