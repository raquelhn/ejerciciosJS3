//un algoritmo que lea los nombres y las edades de diez alumnos, y que los datos se almacenen en dos vectores, y con base en esto se determine el nombre del alumno con la edad mayor del arreglo.
console.log('ejercicio 5.6')


let edad = [1,2,3,4,5,6,7,8,9,10]
let nombres = ['ale','lola','liz','luca','lele','peter','pedro','juan','keli','lui']
 
function adultoMayor(arregloNom, arregloEd){
    let maximo = parseFloat(Math.max(...arregloEd))
    let j = arregloEd.indexOf(maximo)
    if(arregloNom.length == arregloEd.length){
        console.log(`el estudiante mayor es ${nombres[j]}`)
    }
}

adultoMayor(nombres, edad)


// 5.8Realice un algoritmo que lea un vector y a partir de él forme un segundo vector, 
//de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así sucesivamente. 
//Represéntelo mediante un diagrama de flujo.

console.log('ejercicio 5.8')


let ciudades = ['Lima', 'Arequipa', 'Ayacucho', 'Trujillo', 'Cusco']

let ultimaCityNumber = ciudades.length - 1;
let ultimaCity = ciudades[ultimaCityNumber]

ciudades.splice(0, 0, ultimaCity)

console.log(ciudades)

for(let i=0; i<ciudades.length;i++){
    console.log(`la posicion ${i}: es de la ciudad ${ciudades[i]}`)
}

//5.9 Realice un algoritmo que lea dos vectores de cienelementos y que calcule la suma de éstos guardando su resultado en otro vector, 
//el cual se debe presentar en forma impresa.

console.log('ejercicio 5.9')

const array1 = Array(100).fill().map((e,i)=>i+1);
const array2 =Array(100).fill().map((e,i)=>(i+3)*2);
//console.log(array1)
//console.log(array2)

let sum = []
for(var i = 0; i < array1.length; i++){
    sum.push(array1[i] + array2[i]); 
 }

 console.log('la suma de los dos vectores es')
 console.log(sum)


 /**
  5.13 Se tiene en un arreglo cien elementos representando calificaciones
  de los estudiantes de una escuela. Realice un algoritmo que lea el
   arreglo y calcule la calificación promedio del grupo, además, que
   cuente los estudiantes que obtuvieron calificaciones arriba del promedio del grupo.
 */

console.log('ejercicio 5.13')
const notas =Array(100).fill().map((e,i)=>(Math.floor(Math.random() * 20) + 1));
console.log(notas)

let suma = notas.reduce((a, b)=> b+=a);
let promedio = suma/notas.length;
console.log(`el promedio es ${promedio}`)
let aprobados=0;

for(let i=0; i<notas.length;i++){
    if(notas[i]>promedio){
      aprobados+=1
    }  
}

console.log(`la cantidade alumnos aprobados es ${aprobados}`)


//Una compañía de transporte cuenta con cinco choferes, de los cuales se conoce: 
//nombre, horas trabajadas cada día de la semana (seis días) y sueldo por hora. Realice un algoritmo que:
//aCalcule el total de horas trabajadas a la semana para cada trabaja- dor.
//bCalcule el sueldo semanal para cada uno de ellos.
//Calcule el total que pagará la empresa.
//Indique el nombre del trabajador que labora más horas el día lunes
//Imprima un reporte con todos los datos anteriores.

console.log("ejercicio 5.17")
choferes=["juanita","lupita","carmencita","rosita","chabelita"]
horasTrabajadasSemanal = [50,55,52,50,45]
sueldoPorHora =[11,10,10.5,15,12]
let sueldoSemanal=[]
let pagoTotal=0

console.log('las horas semanales por chofer son las siguientes:')
for(let i=0;i<choferes.length;i++){
   console.log(`${choferes[i]}:${horasTrabajadasSemanal[i]} horas`);
   sueldo=horasTrabajadasSemanal[i]*sueldoPorHora[i]
   sueldoSemanal.push(sueldo);
  // console.log(`el sueldo de ${choferes[i]} es de ${sueldo}`);
   pagoTotal+=sueldo;
}

console.log('A continuacion los sueldos semanales de cada chofer, respectivamente')
console.log(sueldoSemanal)
console.log(`la compania pagara en total ${pagoTotal}`)

function choferMax(arregloChof, arregloHor){
    let top = parseFloat(Math.max(...arregloHor))
    let j = arregloHor.indexOf(top)
    if(arregloChof.length == arregloHor.length){
        console.log(`el chofer que trabaja mas es ${choferes[j]}`)
    }
}

choferMax(choferes, horasTrabajadasSemanal)




