# Fórum Local - Plataforma de Comunicação

Este projeto consiste em um protótipo funcional de uma plataforma de comunicação baseada na arquitetura cliente-servidor, desenvolvido como projeto pessoal para estudo e demonstração técnica. O sistema implementa um feed global com operações de cadastro de usuários, autenticação e persistência de publicações com upload de arquivos de imagem em ambiente local.

## Tecnologias e Bibliotecas Utilizadas

- **Ambiente de Execução:** Node.js
- **Servidor HTTP:** Express.js
- **Manipulação de Uploads de Mídia:** Multer
- **Controle de Acesso de Origens:** CORS
- **Interface do Usuário:** HTML5, CSS3 e JavaScript Assíncrono (Fetch API)
- **Framework de Ícones:** Font Awesome via CDN

## Estrutura do Diretório do Projeto

```text
├── public/
│   ├── css/
│   ├── css-paginas/
│   ├── js/
│   ├── js-paginas/
│   ├── index.html
│   ├── cadastro.html
│   └── login.html
├── server.js
├── package.json
└── .gitignore
```

## Evidências de Interface e Testes do Sistema

### Linha do Tempo e Feed Global

A tela principal apresenta o feed global da plataforma, exibindo as publicações armazenadas, o autor da publicação, carimbo de data/hora, corpo do texto e a respectiva imagem anexada via upload.

<img width="897" height="597" alt="Feed global" src="image_V96Sve.png">

### Tela de Postagem

A tela de postagem permite criar uma publicação contendo texto e uma imagem enviada através de upload.

<img width="897" height="597" alt="Tela de postagem" src="image_zZGrbg.png">

### Tela Inicial

A tela inicial apresenta o acesso às principais funcionalidades da plataforma, incluindo o feed e os botões de cadastro.

<img width="832" height="517" alt="Tela inicial" src="image_3mtmou.png">

### Tela de Cadastro

A tela de cadastro permite o registro de novos usuários na plataforma através do preenchimento dos dados solicitados.

<img width="832" height="517" alt="Tela de cadastro" src="image_zAVfe-.png">

### Tela de Login

A tela de login permite que usuários cadastrados realizem a autenticação utilizando suas credenciais.

<img width="884" height="609" alt="Tela de login" src="image_19ZY4F.png">

## Endpoints Desenvolvidos na API

- **POST `/api/cadastro`**: Recebe nome, e-mail e senha. Realiza a verificação de duplicidade de registros e armazena os dados.
- **POST `/api/login`**: Valida as credenciais enviadas em relação aos registros persistidos para autorização de acesso.
- **POST `/api/posts`**: Processa strings de texto e arquivos binários de imagem (`multipart/form-data`), salvando os arquivos no diretório de uploads.
- **GET `/api/feed`**: Retorna a coleção completa de publicações armazenadas para renderização em ordem cronológica inversa.
