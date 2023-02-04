// const e = "enter";
// const i = "imes";
// const a = "ai";
// const o = "ober";
// const u = "ufat";




// function encriptar() {
//     let textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();

//     let textoEncriptado = textoIngresado.replace(/e/img, "enter");
//     textoEncriptado = textoEncriptado.replace(/i/img, "imes");
//     textoEncriptado = textoEncriptado.replace(/a/img, "ai");
//     textoEncriptado = textoEncriptado.replace(/o/img, "ober");
//     textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

//     document.getElementById("vista").innerHTML = textoEncriptado;
// }

// // let btn = document.querySelector("btnEncrip")
// // btn.addEventListener("click", encriptar);
// function desencriptar() {
//     let textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();

//     let textoDesencriptado = textoIngresado.replace(/enter/img, "e");
//     textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
//     textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
//     textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
//     textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

//     document.getElementById("vista").innerHTML = textoDesencriptado;
// }
const botonEncrip = document.getElementById("btnEncrip");
const botonDesencrip = document.getElementById("btnDesencrip");
const textoIngresado = document.getElementById("textoIngresado");


function encriptar() {
    
    let textoEncriptado = textoIngresado.value.toLowerCase().replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    console.log(textoEncriptado)
    document.getElementById("vista").innerHTML = textoEncriptado;
}

function desencriptar() {

    let textoDesencriptado = textoIngresado.value.toLowerCase().replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
    document.getElementById("vista").innerHTML = textoDesencriptado;
}

botonEncrip.addEventListener ("click", () => encriptar(textoIngresado))
botonDesencrip.addEventListener("click", () => desencriptar(textoIngresado))
