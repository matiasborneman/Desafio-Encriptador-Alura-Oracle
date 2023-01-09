

function encriptar(){
    var frase;
    var fraseEncriptada;
    frase=document.querySelector("input").value;
    fraseEncriptada=document.getElementById("text-salida");
    fraseEncriptada.style.visibility="hidden";
    if(frase!="" && !contieneMayuscula(frase) && !contieneNumero(frase))
    {
        document.getElementById("frame5").style.visibility="hidden";
        document.getElementById("muñeco").style.visibility="hidden";      
        fraseEncriptada.innerText=frase.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
        fraseEncriptada.style.visibility="visible";        
    }  
    else
    {   
        if(frase=="")
        {
            document.getElementById("frame5").style.visibility="visible";
            document.getElementById("muñeco").style.visibility="visible";
        }
        else alert("Error, El mensaje contiene Mayuscula, Numeros o acentos");
    }
}
function desencriptar(){
    var frase;
    var parrafo;
    frase=document.querySelector("input").value;
    parrafo=document.getElementById("text-salida");
    parrafo.style.visibility="hidden";
    if(frase!="" && !contieneMayuscula(frase) && !contieneNumero(frase))
    {
        document.getElementById("frame5").style.visibility="hidden";
        document.getElementById("muñeco").style.visibility="hidden";
        parrafo.innerText=frase.replace(/enter/g,'e').replace(/ai/g,'a').replace(/imes/g,'i').replace(/ufat/g,'u').replace(/ober/g,'o');
        parrafo.style.visibility="visible";        
    }  
    else
    {if(frase=="")
    {
        document.getElementById("frame5").style.visibility="visible";
        document.getElementById("muñeco").style.visibility="visible";
    }
    else 
        alert("Error, El mensaje contiene Mayuscula, Numeros o acentos");
    }
}
function copiar()
{
     limpiarTextos();
     document.getElementById("muñeco").style.visibility="visible";
}
function limpiarTextos(){
    document.querySelector("p").innerText="";
    document.querySelector("input").value="";
}
function contieneMayuscula(frase)
{
    var palabra= frase.split(' ');
    for(var i=0;i<palabra.length;i++)
    {
        for(var j=0;j<palabra[i].length;j++){
            if(palabra[i][j]==palabra[i][j].toUpperCase())return true;
        }
        
    }
}
function contieneNumero(frase)
{
    var palabra= frase.split(' ');
    for(var i=0;i<palabra.length;i++)
    {
        for(var j=0;j<palabra[i].length; j++)
        {
            if(typeof palabra[i][j] =='number')return true;
        }
    }
}