document.addEventListener('DOMContentLoaded', () => {

    const capa = document.createElement('div');
    document.body.appendChild(capa);

    const boton = document.createElement('button');
    document.body.appendChild(boton);


const negrita = document.getElementsByClassName('text-container');
document.body.appendChild(negrita);

document.addEventListener('mouseover', () => {
  negrita.style.fontWeight = 'bold' ;
  negrita.style.backgrondColor = 'deeppink';
});

  
//negrita.addEventListener("mouseover", () =>{   
   
    //style.fontWeight = "bold";

//});


});