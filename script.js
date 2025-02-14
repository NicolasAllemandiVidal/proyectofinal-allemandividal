
//Start-Funciones//

function fetchVideos(){
    fetch('./videos.json') 
    .then(response => response.json())
    .then(data => videos.push(data)) 
    .catch(error => console.error('Error al obtener JSON:', error));
}
fetchVideos();

const videos = [];
const alumnos = [];

function crearDiv(idName, element) {
    newDiv = document.createElement(element);
    body.appendChild(newDiv);
    newDiv.classList.add("order");
    newDiv.setAttribute("id", idName);
}

function crearB(parent,id,texto) {
    const crearB = document.createElement("button");
    parent.appendChild(crearB);
    crearB.innerText = texto;
    crearB.classList.add("botones");
    crearB.setAttribute("type", "button");
    crearB.setAttribute("id", id);
}

function crearHome(){
    const addVideo = document.createElement("video");
    buttons.appendChild(addVideo);
    addVideo.setAttribute("alt", "Video Dj");
    addVideo.setAttribute("src", videos[0].url);
    addVideo.setAttribute("loop",true);
    addVideo.setAttribute("autoplay",true);
    addVideo.setAttribute("type", "video/mp4");
    const hi = document.createElement("h2");
    logo.appendChild(hi);
    hi.innerText = "Bienvenido " + usuarioAlmacenado;
    hi.classList.add("message");
    const removeCrear = document.getElementById("crear");
    removeCrear.remove();
    const removeLogin = document.getElementById("login");
    removeLogin.remove();
    crearB(buttons,"cerrar","Cerrar Sesion");
    const buttonCerrar = document.getElementById("cerrar");
    buttonCerrar.addEventListener("click", function cerrar() {
        addVideo.remove();
        hi.remove();
        removeCrear.remove();
        removeLogin.remove();
        buttonCerrar.remove();
        localStorage.clear();
        createButton();
    })

}
function createButton(){
    crearB(buttons,"crear","Crear Usuario");
    const buttonCrear = document.getElementById("crear");
    buttonCrear.addEventListener("click", function crearPerfil(nombre, clave) {
        nombre = prompt("Ingrese su nombre");
        clave = prompt("Ingrese su clave");
        alumnos.push({nombre : nombre, clave: clave});
        Swal.fire({
            title: "Usuario creado con exito",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
    });
    crearB(buttons,"login","Ingresar con Usuario");
    const buttonsLogin = document.getElementById("login");
    buttonsLogin.addEventListener("click", function login(usuario, clave) {
        usuario = prompt("Ingrese su Usuario");
        localStorage.setItem('alumnoUsuario', JSON.stringify(alumnos[0].nombre));
        usuarioAlmacenado = JSON.parse(localStorage.getItem('alumnoUsuario'));
        clave = prompt("Ingrese su clave");
        for (let i = 0; i < alumnos.length; i++) {
        if (usuario = alumnos.find(alumno =>alumno.nombre === usuario && alumno.clave===clave)){  
        crearHome();
        localStorage.setItem('alumnoUsuario', usuario);
        }else {
            Swal.fire({
                title: "Usuario o contraseña incorrecto",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
              });
    }};
    });};
//End-Funciones//

//Start-Crear Body//
let body = document.body;
localStorage.clear();
crearDiv("logo", "div");
crearDiv("buttons", "div");
crearDiv("socials", "div");
createButton();

const addImg = document.createElement("img");
logo.appendChild(addImg);
addImg.setAttribute("alt", "logo");
addImg.setAttribute("src", "./Files/version vertical - amarillo.png");

const socialIconsW = document.createElement("a");
socials.appendChild(socialIconsW);
socialIconsW.setAttribute("type", "button");
socialIconsW.setAttribute("target", "blank");
socialIconsW.setAttribute("href", "https://wa.me/5492994684258/?text=Hola,%20como%20estas?%20Quiero%20más%20informacion%20sobre%20Industria%20Local.%20Muchas%20gracias!");
socialIconsW.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`

const socialIconsI = document.createElement("a");
socials.appendChild(socialIconsI);
socialIconsI.setAttribute("type","button");
socialIconsI.setAttribute("target", "blank");
socialIconsI.setAttribute("href", "https://www.instagram.com/industrialocal.cba/");
socialIconsI.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>`


document.getElementById("socials");
socials.classList.add("socials");
socials.classList.remove("order");

//End-Crear Body//

