const formCadastro = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

formCadastro.addEventListener("submit", function(event){
    event.preventDefault();

    if(nome.value === "" || email.value === "" || senha.value === ""){
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
})