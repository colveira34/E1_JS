
/*PRIMER EJERCICIO*/


console.log('============PRIMER EJERCICIO==============')

function num(numero) {
  if (numero%2 == 0) {
    console.log(`El numero ${numero} es par`)
    
  } else {
    console.log(`El numero ${numero} es impar`)
  }
}

let resnum =   parseInt(prompt('Ingrese numero'))

num(resnum)



/*
SEGUNDO EJERCICIO
*/

console.log('============SEGUNDO EJERCICIO==============')

function MayMenor(num1, num2){

  if(num1>num2){
    console.log(`El numero ${num1} es mayor que ${num2}`)
  }else 
     if(num1<num2){
       console.log(`El numero ${num2} es mayor que ${num1} `)
     }else{
      console.log(`El numero ${num1} es igual al numero ${num2}`)
     }
 }


let n1 = parseInt(prompt('Ingrese el primer numero'))

let n2 = parseInt(prompt('Ingrese el segundo numero'))

MayMenor(n1,n2)

/*TERCER EJERCICIO*/

console.log('============TERCER EJERCICIO==============')

function Multi5(num){
  if(num%5===0){
    num = `El numero ${num} ingresado es multiplo de 5`
  }else{
    num = `El numero ${num} ingresado no es multiplo de 5`
  }

  return num
}


let numero = parseInt(prompt('Ingrese numero'))

console.log(Multi5(numero))


/*CUARTO EJERCICIO*/


console.log('============CUARTO EJERCICIO==============')
const numeros = (num)=>{
  for(let i=0; i<=num; i++){
    console.log(`Esta es la vuelta ${i}`)
    console.log(i)
    console.log('===============')
  }
}

let num2 = parseInt(prompt('Ingrese numero'))

numeros(num2)



/*QUINTO EJERCICIO***/

console.log('============QUINTO EJERCICIO==============')

const palabras = (palabra, num)=>{
   
  for(let i=0; i<num; i++){
    console.log(palabra)
  }
}

const respalabra = prompt('Ingrese palabra')
const resnumtest = parseInt(prompt('Ingrese numero'))

palabras(respalabra,resnumtest)



/*SEXTO EJERCICIO*/

console.log('============SEXTO EJERCICIO==============')

function reciboArray(array){
  for(let i=0; i<array.length; i++){
     console.log(array[i])
  }
}

const array = [10, 20,30, "PERRO"]

reciboArray(array)


/*SEPTIMO EJERCICIO*/

console.log('============SEPTIMO EJERCICIO==============')

function recibArray2(arr){
  for(let i=0; i<arr.length; i++){
    
    if(i===5){
      continue
    }

    console.log(arr[i])
  }
}


const arr2=[10,20,30,40,50,60,70,80,90,100]

recibArray2(arr2)


/*OCTAVO EJERCICIO*/


console.log('============OCTAVO EJERCICIO==============')

function recibArray3(arr,num){
  for(let i=0; i<arr.length; i++){
    
    console.log(arr[i]*num)
  }
}


const arr=[10,20,30,40,50,60,70,80,90,100]

recibArray3(arr,2)










