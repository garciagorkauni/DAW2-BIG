// Constructor de Estudiante en ES5
class Estudiante {
    constructor(nombre, edad, ...asignaturas){
        this.nombre = nombre;
        this.edad = edad;
        this.asignaturas = asignaturas;
    }
}

// Añadir un método para saludar
Estudiante.prototype.saludar = () => console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// Añadir un método para listar las asignaturas
Estudiante.prototype.listarAsignaturas = (asignaturas) => console.log(`Mis asignaturas son: ${asignaturas.join(', ')}`);

// Zergatik nombre eta edad hartzen du baina asignaturas, ez??
//Estudiante.prototype.listarAsignaturas = () => console.log(`Mis asignaturas son: ${asignaturas.join(', ')}`);

// Crear un nuevo estudiante
let estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
    
// Destructuring manual para extraer nombre y edad
const {nombre, edad, asignaturas} = estudiante1;
    
// Mostrar datos del estudiante
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
    
// Mostrar saludo y asignaturas
estudiante1.saludar();
estudiante1.listarAsignaturas(asignaturas);
    
// Función en ES5 para sumar notas
function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma / arguments.length;
}

// Calcular promedio de notas
let promedio = calcularPromedio(85, 90, 78, 92);
console.log(`El promedio es: ${promedio}`);