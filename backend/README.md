<div>
  <a target="_blank" maring-right="10">
    <img height="70" src="https://i.postimg.cc/Hczvc0Tn/javascript.png" alt="javascript"/>
  </a>
  <a target="_blank">
    <img height="70" src="https://i.postimg.cc/PrrMbYVN/nodejs.png" alt="nodejs"/>
  </a>
  <a  target='_blank'>
    <img src='https://i.postimg.cc/FdVQRPjx/mongodb.png' height='70' alt='mongodb'/>
  </a>
  <a target='_blank'>
    <img  height="70" src='https://i.postimg.cc/T1MqQ19C/insomnia.png'alt='insomnia'/>
  </a>
  <a target='_blank'>
    <img src='https://i.postimg.cc/18Tycw05/docker.png' height='70' alt='docker'/>
  </a>
  <a target="_blank">
    <img height="70" src="https://i.postimg.cc/6yr2dMDM/git.png" alt="git"/>
  </a>
  <a target="_blank">
    <img  height="70" src="https://i.postimg.cc/Yv8vPh2g/github.png" alt="github"/>
  </a>
  <a target="_blank">
    <img height="70" src="https://i.postimg.cc/qtRNH4gF/vs-code.png" alt="vs-code"/>
  </a>

</div>

# Backend DevRadar
Backend desenvolvido durante décima Semana Omnistack oferecida pela Rocketseat

## Linguagem utilizada:
   Javascript

## Plataforma utilizada:
  [NodeJS](https://github.com/nodejs/node)
  >Node.js JavaScript runtime ✨🐢🚀✨

## Framework utilizado:
  [express](https://github.com/expressjs/express)
  >Fast, unopinionated, minimalist web framework for node.

## Objetivo:
  Desenvolver um backend para a aplicação GoBarber utilizando a plataforma Nodejs e framework express afim de aplicar e exercitar os conhecimentos adquiridos em módulos passados.


## Dependências utilizadas:
  * [express @4.17.1](https://github.com/expressjs/express)
    >Fast, unopinionated, minimalist web framework for node.
  * [Nodemon @2.0.2](https://github.com/remy/nodemon)
    >Monitor for any changes in your node.js application and automatically restart the server - perfect for development.
  * [eslint @6.8.0](https://github.com/eslint/eslint)
    >A fully pluggable tool for identifying and reporting on patterns in JavaScript.
  * [prettier @1.19.1](https://github.com/prettier/prettier)
    >Prettier is an opinionated code formatter.
  * [mongoose @5.8.7](https://github.com/Automattic/mongoose)
    >MongoDB object modeling designed to work in an asynchronous environment.
## Conceitos,tecnologias e técnicas trabalhadas:
  * Javascript
    - Conceitos básicos;
    - Variáveis;
    - Desestruturação;
    - Classes;

  * Nodejs
    - Conceito;
    - Funcionalidade;
    - Requisições;
    - Comunicação com o front (rotas);

  * Express
    - Conceito;
    - Vantagens;
    - Criação de Rotas;

  * Nodemon
    - Uso;
    - Instalação e configuração;

  * ESlint
    - Funcionalidade;
    - Instalação e configuração;

  * Prettier
    - Funcionalidade;
    - Instalação e configuração;

  * MongoDB
    - Conceitos;
    - Funcionalidade;
    - Instalação

  * Mongoose
    - Funcionalidade;
    - Uso


## Clonagem e debug
  * Primeiramente, é necessário instalar o Docker em sua máquina.
  * Com o Docker instalado abra o seu terminal e execute o comando```docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres```
  para criar um container com a imagem do SGDB Postgres.
  * Após isso, baixe o PostBird e conecte utilizando o usuário ```postgres``` e a senha ```docker```.
  * Já conectado, crie um novo banco de dados chamado ```database```. ]
  * Além disso, também é necessário criar um container contendo o MongoDB. 
  * Execute o comando ```docker run --name mongobarber -p 27017:27017 -d -t mongo``` e aguarde a criação do container.
  * Após desligar sua máquina o container é desligado, portanto, é necessário iniciar o mesmo antes do debug da aplicação.
  * Para iniciar os containers digite em seu terminal```docker start database``` e ```docker start mongobarber```.
  * Com o container do database iniciado é necessário criar as tabelas do banco, para isso utilizaremos o ```sequelize-cli```.
  * Abra uma janela no terminal e navegue até a pasta raíz da aplicação.
  * Após isso, execute o comando ```yarn dbcreate``` para criar as tabelas no banco de dados. Aguarde o término da execução
  * Com o comando já executado, execute ```yarn dev``` em seu terminal para executar o script de debug do servidor.
  * Com o ultímo passo concluído, utilize o Insomnia ou o próprio navegador para testar as rotas da aplicação.
  * Caso for necessário resetar o banco de dados execute o comando ```yarn dbreset``` para deletar as tebelas do banco e em seguida execute ```yarn dbcreate``` para criar as tabelas excluidas anteriormente.

## Desenvolvedor:
  [@leandrosouzaa](https://github.com/leandrosouzaa)
  >A Padawan Programmer

