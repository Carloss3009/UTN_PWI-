// 1. Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
//     Si cuenta con un https:// decir por consola "La url ingresada cuenta con certificación ssl" 
//     Si no lo tiene pero si tiene http:// decir "La url ingresada no cuenta con certificación ssl"
//     Si no posee ninguna decir "No has ingresado una URL válida"


/* function UrlConCertificacionSSL(url){
    if(url.includes("https://")){
        console.log("La URL ingresada cuenta con certificación SSL");
    }
    else if(url.includes("http://")){
        console.log("La URL ingresada no cuenta con certificación SSL");
    }
    else{
        console.log("No has ingresado una URL válida.");
    }
}
UrlConCertificacionSSL("https://google.com")
UrlConCertificacionSSL("http://google.com")
UrlConCertificacionSSL("google.com"); */



// 2. Dados los siguientes textos:
// "Hola%20como%20estas%20,%20todo%20bien?"
// "No%20me%20siento%20bien"
// "que%20mal"

// descifrar el código y mostrarlo por consola: "El código descifrado es: " + codigoDescifrado
// Averiguar la cantidad de caracteres y en base al número de caracteres mostrar:

// "El mensaje es corto" 1 a 8 caracteres   
// "El mensaje es mediano" 9 a 18 caracteres
// "El mensaje es largo" mas de 18 caracteres

// Ademas si el mensaje cuenta con: ",", "@", "-" deberá decir: "El mensaje es complejo", sino decir "El mensaje no es complejo"


/* function codigoDescifrado(codigo){
        let codigoReemplazado = codigo.replaceAll("%20", " ")
    console.log(`El código descifrado es: ${codigoReemplazado}`);
    if(codigo.length >= 1 && codigo.length <= 8){
        console.log("El mensaje es corto");
    }
    else if(codigo.length >= 9 && codigo.length <= 18){
        console.log("El mensaje es mediano");
    }
    else if(codigo.length > 18){
        console.log("El mensaje es largo");
    }
    if(codigo.includes(",") || codigo.includes("@") || codigo.includes("-")){
        console.log("El mensaje es complejo");
    }
    else{
        console.log("El mensaje no es complejo");
    }
} */

/* codigoDescifrado("Hola%20como%20estas%20,%20todo%20bien?")
codigoDescifrado("No%20me%20siento%20bien")
codigoDescifrado("que%20mal") */


// 3. Solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo con el algoritmo anterior.


/* let mensajeDescifrado = "Hola, todo bien?😛"

function codigoCifrado(codigo){
    let codigoReemplazadoCifrado = codigo.replaceAll(" ", "%20")
    console.log(`El codigo cifrado es ${codigoReemplazadoCifrado}`);
}
codigoCifrado(mensajeDescifrado)
codigoDescifrado(mensajeDescifrado) */


// 4. Solicitar al usuario una palabra y decir en consola "tiene mayúscula", en el caso de que tenga una mayúscula, sino decir "tiene minúscula":


/* function palabraMayuscula(cadena){
    if(cadena !== cadena.toLowerCase()){
        console.log("La palabra tiene mayúscula.");
    }
    else{
        console.log("La palabra tiene minúscula.");
    }
}

palabraMayuscula("cArlos");
palabraMayuscula("dominguez") */


// 5. Dada una cadena de texto, imprimir "La cadena es mayor a 10 caracteres", si la longitud de la cadena es mayor a 10, caso contrario imprimir "La cadena es menor o igual a 10 caracteres".


/* function cadenaDeTexto(cadena){
    if(cadena.length > 10){
        console.log("La cadena es mayor a 10 caracteres.");
    }
    else{
        console.log("La cadena es menor o igual a 10.");
    }
}

cadenaDeTexto("Rosario")
cadenaDeTexto("Matemáticas")
 */


// 6. Dada una cadena de texto, imprimir "la cadena tiene la letra 'a'", si la cadena tiene la letra 'a', caso contrario imprimir "la cadena no tiene la letra 'a'".


/* function cadenaContieneA(cadena){
    if(cadena.includes("a")){
        console.log("La cadena tiene la letra 'a'.");
    }
    else{
        console.log("La cadena no tiene la letra 'a'.");
    }
}

cadenaContieneA("Argentina")
cadenaContieneA("River") */


// 7. Dada una cadena de texto, reemplazar la letra 'a' por la letra 'x', y luego imprimir la cadena por consola.


/* function reemplazarLetraAporX(cadena){
    let cadenaReemplazada = cadena.replaceAll("a", "x");
    return cadenaReemplazada
}

console.log(reemplazarLetraAporX("Alaska"));
console.log(reemplazarLetraAporX("Trigo")); */


// 8. Dada una cadena de texto, imprimir "La cadena es un número" si la cadena es un número válido, de lo contrario imprimir "La cadena no es un número".


/* function cadenaNumerica(cadena){
    if(!isNaN(cadena)){
        console.log("La cadena es un número.");
    }
    else{
        console.log("La cadena no es un número.");
    }
}

cadenaNumerica(98)
cadenaNumerica("ramon") */


// 9. Dada una cadena de texto, imprimir "La cadena es una dirección de correo electrónico válida" si la cadena es una dirección de correo electrónico válida, de lo contrario imprimir "La cadena no es una dirección de correo electrónico válida".


/* function direccionDeCorreo(cadena){
    if(cadena.includes("@") && cadena.includes(".com")){
        console.log("La cadena es una dirección de correo electrónico válida.");
    }
    else{
        console.log("La cadena no es una dirección de correo electrónico válida.");
    }
}
direccionDeCorreo("ccdsx55@gmail.com")
direccionDeCorreo("gooogle.com") */