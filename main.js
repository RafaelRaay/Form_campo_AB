const form = document.getElementById("formAB");
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    
    const mensagemSucesso = `Formulário validado com sucesso!`;
    
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA)
    {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";
    
        campoA.value = ("");
        campoB.value = ("");
    }
    else 
    {
        campoA.style.border = "1px solid red";
        campoB.style.border = "1px solid red";
        document.querySelector(".error-a").style.display = "block";
        document.querySelector(".error-b").style.display = "block";
    }       
})

campoA.addEventListener("keyup", function(e)
{
    console.log(e.target.value);

    valorA = parseFloat(campoA.value);
    valorB = parseFloat(campoB.value);

    if (valorB <= valorA)
    {
        campoA.classList.add("error");
        campoB.classList.add("error");
        document.querySelector(".error-a").style.display = "block";
        document.querySelector(".error-b").style.display = "block";
    }
    else 
    {
        campoA.classList.remove("error");
        campoB.classList.remove("error");
        document.querySelector(".error-a").style.display = "none";
        document.querySelector(".error-b").style.display = "none";
    }  
})

campoB.addEventListener("keyup", function(e)
{
    console.log(e.target.value);

    valorA = parseFloat(campoA.value);
    valorB = parseFloat(campoB.value);

    if (valorB <= valorA)
    {
        campoA.classList.add("error");
        campoB.classList.add("error");
        document.querySelector(".error-a").style.display = "block";
        document.querySelector(".error-b").style.display = "block";
    }
    else 
    {
        campoA.classList.remove("error");
        campoB.classList.remove("error");
        document.querySelector(".error-a").style.display = "none";
        document.querySelector(".error-b").style.display = "none";
    }  
})
