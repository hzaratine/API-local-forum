# Forum Local - Plataforma de Comunicacao

Este projeto consiste em um prototipo funcional de uma plataforma de comunicacao baseada na arquitetura cliente-servidor, desenvolvido como projeto pessoal para estudo e demonstracao tecnica. O sistema implementa um feed global com operacoes de cadastro de usuarios, autenticacao e persistencia de publicacoes com upload de arquivos de imagem em ambiente local.

## Requisitos e Evidencias de Instalacao

O ambiente foi configurado localmente utilizando o gerenciador de pacotes do Node.js. Abaixo consta o registro em terminal da instalacao dos modulos de terceiros necessarios para a execucao da API (Express, Multer e CORS):


## Tecnologias e Bibliotecas Utilizadas

- Ambiente de Execucao: Node.js
- Servidor HTTP: Express.js
- Manipulacao de Uploads de Midia: Multer
- Controle de Acesso de Origens: CORS
- Interface do Usuario: HTML5, CSS3 e JavaScript Assincrono (Fetch API)
- Framework de Icones: Font Awesome via CDN

## Estrutura do Diretorio do Projeto

```text
├── public/                 # Interface do Usuario (Front-end)
│   ├── css/                # Estilizacao da pagina principal (Feed)
│   ├── css-paginas/        # Estilizacao das paginas de acesso (Login/Cadastro)
│   ├── js/                 # Logica de consumo da API do Feed
│   ├── js-paginas/         # Logica de cadastro e login
│   ├── index.html          # Pagina principal (Feed Global Publico)
│   ├── cadastro.html       # Formulario de registro de usuario
│   └── login.html          # Formulario de autenticacao
├── server.js               # Servidor Back-end e definicao dos Endpoints
├── package.json            # Manifesto de configuracao e dependencias do Node.js
└── .gitignore              # Filtro de arquivos omitidos no controle de versao
```

## Instrucoes para Execucao Local e Inicializacao

### 1. Execucao do Servidor
Apos a instalacao das dependencias, o script do servidor back-end deve ser inicializado pelo comando de execucao do Node.js. A imagem abaixo evidencia o correto funcionamento do listener HTTP na porta 3000:


## Evidencias de Interface e Testes do Sistema

### Tela de Login
A tela de login permite que usuarios cadastrados realizem a autenticacao utilizando suas credenciais.

<img width="884" height="609" alt="captura1" src="https://github.com" />

### Tela de Cadastro
A tela de cadastro permite o registro de novos usuarios na plataforma atraves do preenchimento dos dados solicitados.

<img width="832" height="517" alt="captura2" src="https://github.com" />

### Tela Inicial
A tela inicial apresenta o acesso as principais funcionalidades da plataforma, incluindo o feed e os botoes de cadastro.

<img width="832" height="517" alt="captura3" src="https://github.com" />

### Tela de Postagem
A tela de postagem permite criar uma publicacao contendo texto e uma imagem enviada atraves de upload.

<img width="897" height="597" alt="captura4" src="https://github.com" />

### Linha do Tempo e Feed Global
A tela principal apresenta o feed global da plataforma, exibindo as publicacoes armazenadas, o autor da publicacao, carimbo de data/hora, corpo do texto e a respectiva imagem anexada via upload.

<img width="897" height="597" alt="captura5" src="https://github.com" />

## Endpoints Desenvolvidos na API

- POST `/api/cadastro`: Recebe nome, e-mail e senha. Realiza a verificacao de duplicidade de registros e armazena os dados.
- POST `/api/login`: Valida as credenciais enviadas em relacao aos registros persistidos para autorizacao de acesso.
- POST `/api/posts`: Processa strings de texto e arquivos binarios de imagem (multipart/form-data), salvando os arquivos no diretorio de uploads.
- GET `/api/feed`: Retorna a colecao completa de publicacoes armazenadas para renderizacao em ordem cronologica inversa.
