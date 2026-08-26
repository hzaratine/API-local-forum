# Fórum Local - Plataforma de Comunicação

Este projeto consiste em um protótipo funcional de uma plataforma de comunicação baseada na arquitetura cliente-servidor, desenvolvido como projeto pessoal para estudo e demonstração técnica. O sistema implementa um feed global com operações de cadastro de usuários, autenticação e persistência de publicações com upload de arquivos de imagem em ambiente local.

## Requisitos e Evidências de Instalação

O ambiente foi configurado localmente utilizando o gerenciador de pacotes do Node.js. Instale os módulos necessários executando o comando abaixo no terminal:

```bash
npm install express multer cors
```

## Tecnologias e Bibliotecas Utilizadas

- **Ambiente de Execução:** Node.js
- **Servidor HTTP:** Express.js
- **Manipulação de Uploads de Mídia:** Multer
- **Controle de Acesso de Origens:** CORS
- **Interface do Usuário:** HTML5, CSS3 e JavaScript Assíncrono (Fetch API)
- **Framework de Ícones:** Font Awesome via CDN

## Estrutura do Diretório do Projeto

```text
├── public/                 # Interface do Usuário (Front-end)
│   ├── css/                # Estilização da página principal (Feed)
│   ├── css-paginas/        # Estilização das páginas de acesso (Login/Cadastro)
│   ├── js/                 # Lógica de consumo da API do Feed
│   ├── js-paginas/         # Lógica de cadastro e login
│   ├── index.html          # Página principal (Feed Global Público)
│   ├── cadastro.html       # Formulário de registro de usuário
│   └── login.html          # Formulário de autenticação
├── server.js               # Servidor Back-end e definição dos Endpoints
├── package.json            # Manifesto de configuração e dependências do Node.js
└── .gitignore              # Filtro de arquivos omitidos no controle de versão
```

## Instruções para Execução Local e Inicialização

### 1. Execução do Servidor
Após a instalação das dependências, o script do servidor back-end deve ser inicializado pelo comando de execução do Node.js:

```bash
node server.js
```

O servidor iniciará escutando requisições na porta 3000.

## Evidências de Interface e Testes do Sistema

### Tela de Login

A tela de login permite que usuários cadastrados realizem a autenticação utilizando suas credenciais.

<img width="884" height="609" alt="captura1" src="https://github.com/user-attachments/assets/55120ed2-2279-46a1-b32e-13ebdedd9662" />

### Tela de Cadastro

A tela de cadastro permite o registro de novos usuários na plataforma através do preenchimento dos dados solicitados.

<img width="832" height="517" alt="captura2" src="https://github.com/user-attachments/assets/aad212df-d85b-4768-8af6-086092de8a9a" />

### Tela Inicial

A tela inicial apresenta o acesso às principais funcionalidades da plataforma, incluindo o feed e os botões de cadastro.

<img width="832" height="517" alt="captura3" src="https://github.com/user-attachments/assets/fa2bd922-8d2a-4edc-840b-2914cd793b18" />

### Tela de Postagem

A tela de postagem permite criar uma publicação contendo texto e uma imagem enviada através de upload.

<img width="897" height="597" alt="captura4" src="https://github.com/user-attachments/assets/545ed41b-96e5-4177-a2c6-e26f114e1f50" />

### Linha do Tempo e Feed Global

A tela principal apresenta o feed global da plataforma, exibindo as publicações armazenadas, o autor da publicação, carimbo de data/hora, corpo do texto e a respectiva imagem anexada via upload.

<img width="897" height="597" alt="captura5" src="https://github.com/user-attachments/assets/c697e37b-f8d3-4e75-b505-b913c06b6422" />

## Endpoints Desenvolvidos na API

- **POST `/api/cadastro`**: Recebe nome, e-mail e senha. Realiza a verificação de duplicidade de registros e armazena os dados.
- **POST `/api/login`**: Valida as credenciais enviadas em relação aos registros persistidos para autorização de acesso.
- **POST `/api/posts`**: Processa strings de texto e arquivos binários de imagem (`multipart/form-data`), salvando os arquivos no diretório de uploads.
- **GET `/api/feed`**: Retorna a coleção completa de publicações armazenadas para renderização em ordem cronológica inversa.
