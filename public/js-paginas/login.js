const API_URL = "http://localhost:3000/api";

async function logar() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-password').value;

    if(!email || !senha) {
        alert("Preencha todos os campos");
        return;
    }

    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    });
    const dados = await res.json();

    if (dados.erro) {
        alert(dados.erro);
    } else {
        localStorage.setItem('usuarioLogado', JSON.stringify(dados.usuario));
        window.location.href = "index.html";
    }
}
