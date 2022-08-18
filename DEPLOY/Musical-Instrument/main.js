console.log('Hola mundo');
const myName='Aranza';

let myAge=18;
let x=18;
let y=15;

var likesMusic=true;

console.log('myName',myName)
console.log('myAge',myAge)
console.log('x',x)
console.log('y',y)
console.log('likesMusic', likesMusic)

//myName='Roxanne';

console.log('myName',typeof myName)
console.log('myAge',typeof myAge);
console.log('x',typeof x);
console.log('y',typeof y);
console.log('likesMusic',typeof likesMusic);

let z=x+y;

console.log(z)
z=x-y;
console.log(z)
z=x/y;
console.log(z)
z=x*y;
console.log(z)

console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

if (likesMusic===true){
console.log('Me gusta la musica');
}
else {
  console.log('No me gusta la musica')
}

let compraRealizada=false;
let pisoBarrido=true;
let dinero;

if (compraRealizada===true|| pisoBarrido===true){
  dinero=10
}else{
  dinero=5
}

console.log('El dinero de mi hermanito es:',dinero);

let compraRealizada2=true;
let pisoBarrido2=true;
let dinero2;

if (compraRealizada2===true&& pisoBarrido2===true){
  dinero2=20
}else{
  dinero2=0
}

console.log('El dinero de mi hermanito es:',dinero2);

let yearOrBirth=2006

const d = new Date();

let currentYear=2022


for (let year = yearOrBirth; year <= currentYear; year++) {
 
  if (currentYear==yearOrBirth){
 console.log('Yo naci en', yearOrBirth);
 }
 else if(year-yearOrBirth){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==2){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==3){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==4){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==5){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==6){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==7){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==8){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==9){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==10){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==11){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==12){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==13){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==14){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==15){
  console.log('En ' + year + ' yo tenía ' + (year -yearOrBirth ) + ' año');
 }
 else if(year-yearOrBirth==16){
  console.log('En ' + year + ' yo complire ' + (year -yearOrBirth ) + ' año');
 }
}

let year = yearOrBirth;

while(year<=currentYear){
    let age = year-yearOrBirth;
    if (year == yearOrBirth) {
        console.log('En ' + year + ' yo nací');
      }
      else if(age==1){
        console.log('En ' + year + ' yo tenía ' + age + ' año');
      }
       else if (age==2) {
        console.log('En el ' + year + ' yo tenia' + age + ' años');
      } else if (age==3){
        console.log('En ' + year + ' yo tenía ' + age + ' años');
      }
      year++;
    }

const aCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(aCelsius(100));

const tocarNota = ()=> {
  
}

function playNote(key){
  //Obtener la nota
  const noteAudio=document.getElementById(key.dataset.note);
  //resetear la ejecución de una nota
  noteAudio.currentTime=0;
  //Utilizar método play()de la nota
  noteAudio.play();
  // Añadimos clase active
  key.classList.add('active');
  // Agregamos un event listener al estado ended del evento keydown
  noteAudio.addEventListener('ended', () => {
    // Cuando termine de reproducirse el sonido, removemos clase active
    key.classList.remove('active');
  });
}

const WHITE_KEYS=['z','x','c','v','b','n','m'];
const BLACK_KEYS=['s','d','g','h','j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const nameElement=document.querySelector('#name')
const ageElement=document.querySelector('#age')
const likesMusicElement=document.querySelector('#likesMusic')

console.log('nameElement', nameElement);
console.log('ageElement', ageElement);
console.log('likesMusicElement', likesMusicElement);

nameElement.textContent=myName;
ageElement.textContent=myAge;

if(likesMusic===true){
  likesMusicElement.textContent='me gusta la musica';
} else{
  likesMusicElement.textContent='no me gusta la musica';
}

const body=document.querySelector('body');
const text=document.createElement('p');
text.textContent='Hola mundo desde el DOM!';
body.appendChild(text);
body.removeChild(text);

document.addEventListener('keydown',(e)=>{
if (e.repeat) return;
const key = e.key;
const whiteKeyIndex = WHITE_KEYS.indexOf(key);
const blackKeyIndex = BLACK_KEYS.indexOf(key);
console.log(whiteKeys[whiteKeyIndex]);
if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

const key=document.querySelectorAll('.key');

keys.forEach((key)=>{
  key.addEventListener('click',()=>playNote(key));
});

const personaAH = {
  nombre: {
    primerNombre: 'Aranza Naomi',
    apellidoPaterno: 'Hernández',
    apellidoMaterno: 'Pool',
  },
  edad: 18,
  bio: function(){
    console.log(this.nombre.primerNombre+' Tiene '+this.edad+' años');
  },
  presentarseArrowFn: ()=>{console.log(this.nombre.primerNombre)},
  presentarse: function(){
    console.log('Hola! Mi nombre es '+this.nombre.primerNombre);
  }
};

const frutas = ['Manzana', 'Mango', 'Melon', 'Sandia', 'Durazno'];
frutas[5] = 'Piña';
frutas[0] = 'Higo';
frutas.push('Frambuesa');
frutas.shift();
console.log(frutas);

const calificaciones = [10, 6, 5, 8, 8, 7, 5, 10, 9, 9];
const reprobados = calificaciones.find ((calificacion) => calificacion <= 5);
const mayorA8 = calificaciones.map ((calificacion) => calificacion >= 8);
const aprobados = calificaciones.filter ((calificacion)=> calificacion > 5 );
const sumatoria = calificaciones.reduce (
  (valorAnterior, valorActual) => valorAnterior + valorActual,
  0
);

const promedio = sumatoria / calificaciones.length;
console.log('reprobados', reprobados);
console.log('aprobados', aprobados);
console.log('Mayor a 8', mayorA8);

console.log('El promedio general de la escuela es de :' + promedio);

const getGuessedAge = async () => {
  const response = await fetch('https://api.agify.io?name=Aranza');
  const data = await response.json();
  return data.age;
}

const displayGuessedAge = async () => {
  const guessedAgeSpan= document.getElementById("guessedAge");
  const guessedAge = await getGuessedAge();
  guessedAgeSpan.textContent = guessedAge;
}

displayGuessedAge();


