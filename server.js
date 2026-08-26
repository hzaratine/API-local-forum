const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const BANCO_FILE = path.join(__dirname, 'banco.json');

function lerBanco() {
    if (!fs.existsSync(BANCO_FILE) || fs.readFileSync(BANCO_FILE, 'utf-8').trim() === "") {
        fs.writeFileSync(BANCO_FILE, JSON.stringify({ usuarios: [], posts: [] }, null, 2));
    }
    const dados = fs.readFileSync(BANCO_FILE, 'utf-8');
    return JSON.parse(dados);
}

function salvarBanco(dados) {
    fs.writeFileSync(BANCO_FILE, JSON.stringify(dados, null, 2));
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    const banco = lerBanco();

    if (banco.usuarios.find(u => u.email === email)) {
        return res.status(400).json({ erro: "Este e-mail ja esta cadastrado!" });
    }

    const novoUsuario = { id: Date.now(), nome, email, senha };
    banco.usuarios.push(novoUsuario);
    salvarBanco(banco);

    res.status(201).json({ mensagem: "Cadastro realizado com sucesso!" });
});

app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    const banco = lerBanco();

    const usuario = banco.usuarios.find(u => u.email === email && u.senha === senha);
    if (!usuario) {
        return res.status(401).json({ erro: "E-mail ou senha invalidos!" });
    }

    res.json({ mensagem: "Login autorizado!", usuario: { id: usuario.id, nome: usuario.nome } });
});

app.post('/api/posts', upload.single('imagem'), (req, res) => {
    const { usuarioId, texto } = req.body;
    const banco = lerBanco();

    const usuario = banco.usuarios.find(u => u.id == usuarioId);
    if (!usuario) {
        return res.status(404).json({ erro: "Usuario nao encontrado!" });
    }

    const novoPost = {
        id: Date.now(),
        autor: usuario.nome,
        texto: texto || "",
        imagemUrl: req.file ? `/uploads/${req.file.filename}` : null,
        data: new Date().toLocaleString('pt-BR')
    };

    banco.posts.unshift(novoPost);
    salvarBanco(banco);

    res.status(201).json(novoPost);
});

app.get('/api/feed', (req, res) => {
    const banco = lerBanco();
    res.json(banco.posts);
});

app.listen(3000, () => {
    console.log("Servidor rodando em: http://localhost:3000");
});
