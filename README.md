<p align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/logo.svg" width="160px" />
</p>

<h3 align="center">Next Level Week #01</h3>

<p align="center">
  <img alt="GitHub language count" src="https://github.com/joel-fragoso/nlw-01.git">

  <img alt="Repository size" src="hhttps://github.com/joel-fragoso/nlw-01.git">
	

  <a href="https://github.com/joel-fragoso/nlw-01.git">
    <img alt="GitHub last commit" src="https://github.com/joel-fragoso/nlw-01.git">
  </a>

  <img alt="License" src="https://github.com/joel-fragoso/nlw-01.gitn">
   <a href="https://github.com/joel-fragoso/nlw-01.git">
    <img alt="Stargazers" src="https://github.com/joel-fragoso/nlw-01.git">
  </a>
</p>
<p align="center">
  <a href="https://github.com/joel-fragoso/nlw-01.git" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
  <a href="#-nlw">Next Level Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## O que é o Next Level Week?

O NLW é uma semana prática com muito código, desafios, networking e um único objetivo: te levar para o próximo nível.

Através do nosso método você vai aprender novas ferramentas, conhecer novas tecnologias e descobrir hacks que vão impulsionar a sua carreira.

Um evento online e totalmente gratuito que vai te ajudar a dar o próximo passo na sua evolução como dev.

## Projeto

A coleta seletiva de lixo é de extrema importância para a sociedade. Além de gerar renda para milhões de pessoas e economia para as empresas, também significa uma grande vantagem para o meio ambiente, uma vez que diminui a poluição dos solos e rios. Dessa maneira possibilitamos o maior aproveitamento do resíduo, que antes era descartado e como consequência do seu não aproveitamento aumentaria a quantidade de lixo causando grandes problemas ambientais.

O Ecoleta é uma aplicação que ajuda pessoas a encontrem pontos de coleta de forma eficiente.

<p align="center">
    <img alt="Example" title="Example" src="./assets/ecoleta-web.png"  height="400px" />
    <img alt="Example" title="Example" src="./assets/ecoleta-mobile.png"  height="400px" />
</p>

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## Layout

Confira o layout no [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).

## Como usar

Para clonar e executar esta aplicação, você vai percisar do [Git](https://git-scm.com) e do [Node.js][nodejs] instalado no seu computador.

### Clonando o Projeto
```bash
# Clonar deste repositório
$ git clone https://github.com/joel-fragoso/nlw-01.git
```

### Instalando o Server

```bash
# Entre na pasta do projeto
$ cd nlw-01/server/

# Instale as dependências
$ npm run install

# Execute as migrations
$ npm run knex:migrate

# Execute os seeds
$ npm run knex:seed

# Execute o projeto
$ npm run dev

# O Servidor vai executar na porta 3333
```

### Instalando o Front-end

```bash
# Entre na pasta do projeto
$ cd nlw-01/web/

# Instale as dependências
$ npm install

# Execute o projeto
$ npm start

# O Front-end vai executar na porta 3000
```

### Instalando o Mobile

```bash
# Entre na pasta do projeto
$ cd nlw-01/mobile/

# Instale as dependências
$ expo install

# Execute o projeto
$ expo start

# O Expo vai abrir o Dev Tools no browser.
# Para executar o projeto no seu dispositivo, é só scanear
# o qrcode do browser ou do terminal.

# Se tiver algum problema com as fontes, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

## Licença

Este projeto está sobre a licença do MIT. Para mais informações, veja aqui [LICENSE](https://github.com/joel-fragoso/nlw-01/blob/master/LICENSE).

Feito por Joel Fragoso

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
