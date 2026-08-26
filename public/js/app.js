const API_URL = "http://localhost:3000/api";
let usuarioLogado = null;

function verificarSessao() {
    const sessao = localStorage.getItem('usuarioLogado');
    if (sessao) {
        usuarioLogado = JSON.parse(sessao);
        document.getElementById('user-display-name').innerText = usuarioLogado.nome;
        document.getElementById('nav-actions').classList.add('hidden');
        document.getElementById('nav-user').classList.remove('hidden');
        document.getElementById('publish-section').classList.remove('hidden');
    } else {
        usuarioLogado = null;
        document.getElementById('nav-actions').classList.remove('hidden');
        document.getElementById('nav-user').classList.add('hidden');
        document.getElementById('publish-section').classList.add('hidden');
    }
}

function deslogar() {
    localStorage.removeItem('usuarioLogado');
    verificarSessao();
}

async function publicar() {
    if (!usuarioLogado) return;

    const texto = document.getElementById('post-text').value;
    const imagemInput = document.getElementById('post-image');

    const formData = new FormData();
    formData.append('usuarioId', usuarioLogado.id);
    formData.append('texto', texto);
    
    if (imagemInput.files.length > 0) {
        formData.append('imagem', imagemInput.files[0]);
    }

    const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: formData
    });

    if (res.ok) {
        document.getElementById('post-text').value = '';
        document.getElementById('post-image').value = '';
        carregarFeed();
    }
}

async function carregarFeed() {
    const res = await fetch(`${API_URL}/feed`);
    const posts = await res.json();
    const feedDiv = document.getElementById('feed-posts');
    feedDiv.innerHTML = '';

    posts.forEach(post => {
        let imgHtml = post.imagemUrl ? `<img src="http://localhost:3000${post.imagemUrl}">` : '';
        feedDiv.innerHTML += `
            <div class="post">
                <div class="post-meta">
                    <span class="post-user">${post.autor}</span>
                    <span>${post.data}</span>
                </div>
                <p>${post.texto}</p>
                ${imgHtml}
            </div>
        `;
    });
}

verificarSessao();
setInterval(carregarFeed, 3000);
carregarFeed();
