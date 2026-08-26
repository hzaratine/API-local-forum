const API_URL = "http://localhost:3000/api";

async function cadastrar() {
    const nome = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const senha = document.getElementById('reg-password').value;

    if(!nome || !email || !senha) {
        alert("Preencha todos os campos");
        return;
    }

    const res = await fetch(`${API_URL}/cadastro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha })
    });
    const dados = await res.json();
    
    if (dados.erro) {
        alert(dados.erro);
    } else {
        alert(dados.mensagem);
        window.location.href = "login.html";
    }
}
