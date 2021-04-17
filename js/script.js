document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nomeUsuaria").value!= "" && document.getElementById("emailUsuaria").value!= "" && document.getElementById("telefoneUsuaria").value!= "" ){   
    alert("Prontinho! " + document.getElementById("nomeUsuaria").value + ", você informou que seu telefone é: " + document.getElementById("telefoneUsuaria").value + ". Em breve você receberá as novidades por e-mail, em: " + document.getElementById("emailUsuaria").value + " .")
  }else{
    alert("Por favor, preencha todos os campos.")
  }
}

