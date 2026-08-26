# Sistema de cadastro - Protótipo Funcional

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

## Prints de Demostração 

### Feed Global

A tela principal apresenta o feed global da plataforma, exibindo as publicações armazenadas, o autor da publicação, carimbo de data/hora, corpo do texto e a respectiva imagem anexada via upload.

<img width="884" height="609" alt="captura1" src="https://github.com/user-attachments/assets/fc52f4f6-b63d-4bd2-a311-fbdc8c8accdd" />

### Tela de Postagem

A tela de postagem permite criar uma publicação contendo texto e uma imagem enviada através de upload.

<img width="832" height="517" alt="captura2" src="https://github.com/user-attachments/assets/61b94115-9d3f-4d7c-836f-cacd543a8c36" />

### Tela Inicial

A tela inicial apresenta o acesso às principais funcionalidades da plataforma, incluindo o feed e os botões de cadastro.

<img width="832" height="517" alt="captura3" src="https://github.com/user-attachments/assets/966d843c-5657-4374-9997-15a935aa9ffd" />

### Tela de Cadastro

A tela de cadastro permite o registro de novos usuários na plataforma através do preenchimento dos dados solicitados.

<img width="897" height="597" alt="captura4" src="https://github.com/user-attachments/assets/f22f64c3-f0e5-4bff-8f66-f39c77a25e65" />

### Tela de Login

A tela de login permite que usuários cadastrados realizem a autenticação utilizando suas credenciais.

<img width="897" height="597" alt="captura5" src="https://github.com/user-attachments/assets/6f2ed24b-15cd-485d-9cae-5743842bd692" />
## Endpoints Desenvolvidos na API

- **POST `/api/cadastro`**: Recebe nome, e-mail e senha. Realiza a verificação de duplicidade de registros e armazena os dados.
- **POST `/api/login`**: Valida as credenciais enviadas em relação aos registros persistidos para autorização de acesso.
- **POST `/api/posts`**: Processa strings de texto e arquivos binários de imagem (`multipart/form-data`), salvando os arquivos no diretório de uploads.
- **GET `/api/feed`**: Retorna a coleção completa de publicações armazenadas para renderização em ordem cronológica inversa.

