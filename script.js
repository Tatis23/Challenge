function btnEncriptar() {
    const textArea = document.querySelector('.text-area');
    const mensaje = document.querySelector('.mensaje');

    let texto = textArea.value;
    let textoEncriptado = encriptarTexto(texto);

    mensaje.value = textoEncriptado;
    verificarTexto(mensaje);
}

// Función para desencriptar el texto
function btnDesencriptar() {
    const textArea = document.querySelector('.text-area');
    const mensaje = document.querySelector('.mensaje');

    let texto = textArea.value;
    let textoDesencriptado = desencriptarTexto(texto);

    mensaje.value = textoDesencriptado;
    verificarTexto(mensaje);
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    return textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const mensaje = document.querySelector('.mensaje');
    mensaje.select();
    document.execCommand('copy');
}

// Verificar si el textarea contiene texto
function verificarTexto(textArea) {
    if (textArea.value.trim() !== '') {
        textArea.classList.add('texto-presente'); // Añade la clase que elimina la imagen
    } else {
        textArea.classList.remove('texto-presente'); // Remueve la clase si no hay texto
    }
}

// Event listeners
document.querySelector('.copiar').addEventListener('click', copiarTexto);
document.querySelector('.mensaje').addEventListener('input', function () {
    verificarTexto(this); // Llama a verificarTexto cada vez que se escribe en el textarea
});