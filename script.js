var encodeButton = document.querySelector(".encode");
var decodeButton = document.querySelector(".decode");
var gif = document.querySelector(".gif");
var ocultarh3 = document.querySelector(".ocultarh3")
var ocultarp = document.querySelector(".ocultarp")
var areaTexto = document.querySelector(".textarearight");
var resultado = document.querySelector(".result");
var ocultarBotonCopiar = document.querySelector (".copy")

encodeButton.onclick = encode;
decodeButton.onclick = decode;

function showCopyButton(){
    var copyButton = document.querySelector(".copybutton");
    copyButton.style.display = "flex";
}

function encode(){
    hide();
    var textboxleft = text()
    resultado.textContent = usuarioEncriptacion(textboxleft);
    showCopyButton();
}

function decode(){
    hide();
    var textboxleft = text()
    resultado.textContent = desencriptacionDelTexto(textboxleft);
    showCopyButton();
}

function text(){
    var textboxleft = document.querySelector(".textboxleft")
    return textboxleft.value
}

function hide(){
    gif.classList.add("hide");
    ocultarh3.classList.add("hide");
    ocultarp.classList.add("hide");
}

function usuarioEncriptacion(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptacionDelTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const copyButton = document.querySelector(".copy"); 
    copyButton.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".result").textContent;
    navigator.clipboard.writeText(contenido); 
});