const formulario = document.getElementById("formulario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const mensagem = document.getElementById("mensagem")
const mostrarSenha = document.getElementById("mostrarSenha")

mostrarSenha.addEventListener("change",() => {
    senha.type = mostrarSenha.checked ? "text" : "password"
})


formulario.addEventListener("submit" , function(event){
    event.preventDefault();

    if(email.value === "" || senha.value === ""){
        mensagem.textContent = "Preencha todos os campos!"
        mensagem.style.color = "red"
       return
    } else {
        mensagem.textContent = "Email ou senha incorretos!"
        mensagem.style.color = "red"
}})