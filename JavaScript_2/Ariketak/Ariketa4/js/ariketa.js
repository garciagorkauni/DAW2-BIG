// Constructor de Estudiante en ES5
class Estudiante {
    constructor(nombre, edad, ...asignaturas){
        this.nombre = nombre;
        this.edad = edad;
        this.asignaturas = asignaturas;
    }

    // Añadir un método para saludar
    saludar = () => console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);

    listarAsignaturas = () => console.log(`Mis asignaturas son: ${this.asignaturas.join(', ')}`);
}

// Crear un nuevo estudiante
const estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
    
// Destructuring manual para extraer nombre y edad
const {nombre, edad} = estudiante1;
    
// Mostrar datos del estudiante
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
    
// Mostrar saludo y asignaturas
estudiante1.saludar();
estudiante1.listarAsignaturas();
    
// Función en ES5 para sumar notas
// function calcularPromedio() {
//     let suma = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     return suma / arguments.length;
// }

const calcularPromedio = (...notas) => {
    const suma = notas.reduce((total, nota) => total + nota, 0)
    return suma / notas.length
}

// Era oraingo laburragoa
// const calcularPromedio = (...notas) => notas.reduce((suma, nota) => suma + nota, 0) / notas.length

// Calcular promedio de notas
let promedio = calcularPromedio(85, 90, 78, 92);
console.log(`El promedio es: ${promedio}`);