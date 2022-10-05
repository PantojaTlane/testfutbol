const btnRespuesta1 = document.querySelector('#btnRespuesta1');//<button>
const respuesta1 =  document.querySelector('#respuesta1');//<b>

const btnRespuesta2 = document.querySelector('#btnRespuesta2');//<button>
const respuesta2 =  document.querySelector('#respuesta2');//<b>

const btnRespuesta3 = document.querySelector('#btnRespuesta3');//<button>
const respuesta3 =  document.querySelector('#respuesta3');//<b>

const btnRespuesta4 = document.querySelector('#btnRespuesta4');//<button>
const respuesta4 =  document.querySelector('#respuesta4');//<b>

const btnRespuesta5 = document.querySelector('#btnRespuesta5');//<button>
const respuesta5 =  document.querySelector('#respuesta5');//<b>

const btnRespuesta6 = document.querySelector('#btnRespuesta6');//<button>
const respuesta6 =  document.querySelector('#respuesta6');//<b>

const btnRespuesta7 = document.querySelector('#btnRespuesta7');//<button>
const respuesta7 =  document.querySelector('#respuesta7');//<b>


const modalReprobado =  document.querySelector('#reprobado');
const modalPasaste =  document.querySelector('#pasaste');
const modalCrack =  document.querySelector('#crack');

const btnEnviar = document.querySelector('#btnEnviar');
const options = document.querySelectorAll('.option');
const contenedores = document.querySelectorAll('.contenedor');
const explains = document.querySelectorAll('.explain');

const reiniciarBtn =  document.querySelector('#reiniciarBtn');

let respuestasCorrectas = [
    {id: 1,answer: "1930"},
    {id: 2, answer:"miroslavklose"},
    {id: 3,answer:"lobo"},
    {id: 4,answer:"toptip"},
    {id: 5,answer:"ricardoquaresma"},
    {id:6,answer:"quatar"},
    {id:7,answer:"falso"}
];

let respuestasUser = [];

btnEnviar.addEventListener('click',()=>{
    respuestasUser = [];
    let radio = 
    options.forEach(option => {
        if(option.checked){
            respuestasUser.push(option.value);
        }
        option.disabled = true;//Deshabilitamos los radios
    });

    verificarResultados(respuestasUser);
    
    btnEnviar.classList.add('hide-btn');//Ocultamos el boton de enviar
    reiniciarBtn.classList.remove('hide-modal');
});


function verificarResultados(respuestasUser){
    let correcto = 0;
    let i = 0;
    let atinados = [];
    let fallados = [];
    respuestasCorrectas.forEach(res => {
        if(res.answer === respuestasUser[i]){
            correcto++;
            atinados.push(res.id);
        }else{
            fallados.push(res.id);
        }
        i++;
    });


    pintarAtinados(atinados);
    pintarFallados(fallados);

    let calificacion = ((correcto*10)/7).toPrecision(2);
    let porcentaje = ((correcto*100)/7).toPrecision(3);

    if(calificacion==10){
        modalCrack.classList.remove('hide-modal');
        modalCrack.innerHTML = `
        <div class="resultado">
            <h1>Resultados</h1>
            <img src="./img/great.svg" alt="sad">
            <div class="description">
            <span id="comparacion">${correcto}/7</span>
            <p>Calicación: <span>${calificacion}</span></p>
            <p>Porcentaje: <span>${porcentaje}%</span></p>
            </div>
            <p>¡Ufff, Eres un crack!</p>
        </div>`;
    }else if(calificacion >= 6){
        modalPasaste.classList.remove('hide-modal');
        modalPasaste.innerHTML = `
        <div class="resultado">
            <h1>Resultados</h1>
            <img src="./img/happy.svg" alt="sad">
            <div class="description">
            <span id="comparacion">${correcto}/7</span>
            <p>Calicación: <span>${calificacion}</span></p>
            <p>Porcentaje: <span>${porcentaje}%</span></p>
            </div>
            <p>¡Ufff, Sabes futbol!</p>
        </div>
        `;
    }else{
        modalReprobado.classList.remove('hide-modal');
        modalReprobado.innerHTML = `
        <div class="resultado">
            <h1>Resultados</h1>
            <img src="./img/sad.svg" alt="sad">
            <div class="description">
            <span id="comparacion">${correcto}/7</span>
            <p>Calicación: <span>${calificacion}</span></p>
            <p>Porcentaje: <span>${porcentaje}%</span></p>
            </div>
            <p>¡Ufff, Debes aprender mas sobre futbol!</p>
        </div>
        `;
    }
    
    console.log("Respuestas correctas: " + correcto);//Numero respuestas correctas
    console.log(atinados);//Id de los atinados
    console.log(fallados);//Id de los fallados
}


function pintarAtinados(atinados) {
    contenedores.forEach(item => {
        for(let i = 0; i < atinados.length; i++){
            if(item.getAttribute("id") == atinados[i]){
                if(item.classList.contains('incorrecto')){
                    item.classList.remove('incorrecto');
                }
                if(!item.classList.contains('correcto')){
                    item.classList.add('correcto');
                }
                item.childNodes[11].classList.remove('hide-explain');
            }
        }
    });
}

function pintarFallados(fallados) {
    contenedores.forEach(item => {
        for(let i = 0; i < fallados.length; i++){
            if(item.getAttribute("id") == fallados[i]){
                if(item.classList.contains('correcto')){
                    item.classList.remove('correcto');
                }
                if(!item.classList.contains('incorrecto')){
                    item.classList.add('incorrecto');
                }
                item.childNodes[13].classList.remove('hide-btn-ver');
            }
        }
    });
}



btnRespuesta1.addEventListener('click',e=>{
    respuesta1.classList.remove('hide-res');
});
btnRespuesta2.addEventListener('click',e=>{
    respuesta2.classList.remove('hide-res');
});
btnRespuesta3.addEventListener('click',e=>{
    respuesta3.classList.remove('hide-res');
});
btnRespuesta4.addEventListener('click',e=>{
    respuesta4.classList.remove('hide-res');
});
btnRespuesta5.addEventListener('click',e=>{
    respuesta5.classList.remove('hide-res');
});
btnRespuesta6.addEventListener('click',e=>{
    respuesta6.classList.remove('hide-res');
});
btnRespuesta7.addEventListener('click',e=>{
    respuesta7.classList.remove('hide-res');
});


modalReprobado.addEventListener('click',e=>{
    if(!e.target.classList.contains('description')){
        modalReprobado.classList.add('hide-modal');
    }
});

modalPasaste.addEventListener('click',e=>{
    if(!e.target.classList.contains('description')){
        modalPasaste.classList.add('hide-modal');
    }
});

modalCrack.addEventListener('click',e=>{
    if(!e.target.classList.contains('description')){
        modalCrack.classList.add('hide-modal');
    }
});