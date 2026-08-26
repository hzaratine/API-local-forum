# Projeto de Conclusao de Curso - Sistema de Forum Local

Este projeto consiste em um prototipo funcional de uma plataforma de comunicacao baseada na arquitetura cliente-servidor. O sistema implementa um feed global com operacoes de cadastro de usuarios, autenticacao e persistencia de publicacoes com upload de arquivos de imagem em ambiente local, aplicando a identidade visual Frutiger Aero.

## Requisitos e Evidencias de Instalacao

O ambiente foi configurado localmente utilizando o gerenciador de pacotes do Node.js. Abaixo consta o registro em terminal da instalacao dos modulos de terceiros necessarios para a execucao da API (Express, Multer e CORS):


## Tecnologias e Bibliotecas Utilizadas

- Ambiente de Execucao: Node.js
- Servidor HTTP: Express.js
- Manipulacao de Uploads de Midia: Multer
- Controle de Acesso de Origens: CORS
- Interface do Usuario: HTML5, CSS3 (Estetica Glassmorphism / Frutiger Aero) e JavaScript Assincrono (Fetch API)
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

### Tela de Autenticacao (Cadastro e Acesso)
Abaixo consta o registro visual da interface de gerenciamento de contas, estruturada de forma dividida com blocos de texto institucionais e painel lateral para a insercao de credenciais:


### Linha do Tempo e Feed Global
A imagem abaixo demonstra o carregamento dinamico das postagens armazenadas localmente, exibindo o autor da publicacao, carimbo de data/hora, corpo do texto e a respectiva imagem anexada via upload:


## Endpoints Desenvolvidos na API

- POST `/api/cadastro`: Recebe nome, e-mail e senha. Realiza a verificacao de duplicidade de registros e armazena os dados.
- POST `/api/login`: Valida as credenciais enviadas em relacao aos registros persistidos para autorizacao de acesso.
- POST `/api/posts`: Processa strings de texto e arquivos binarios de imagem (Multipart Form-Data), salvando os arquivos no diretorio de uploads.
- GET `/api/feed`: Retorna a colecao completa de publicacoes armazenadas para renderizacao em ordem cronologica inversa.
<img width="897" height="597" alt="captura5" src="https://github.com/user-attachments/assets/9125313a-fc75-4232-82c5-9ede6c99b330" />
<img width="897" height="597" alt="captura4" src="https://github.com/user-attachments/assets/a4a4cca4-c565-4b31-9620-9141149cb08c" />
<img width="832" height="517" alt="captura3" src="https://github.com/user-attachments/assets/6c70ddc1-d940-4b15-9867-09958651985a" />
<img width="832" height="517" alt="captura2" src="https://github.com/user-attachments/assets/c1d88888-46b1-4af5-9154-722e6e313a3f" />
<img width="884" height="609" alt="captura1" src="https://github.com/user-attachments/assets/2302ec8a-b897-4a76-b948-85c892adcca0" />
