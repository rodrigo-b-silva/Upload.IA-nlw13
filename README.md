<p align="center">
    <img src="https://github.com/rodrigo-b-silva/Upload.IA-nlw13/blob/main/.github/images/logo_upload_ai.png" width="200"/>
</p>

<h1 align="center">Upload.IA</h1>

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalacao">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#desafio">Desafios</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licenca">Licença</a>
</p>


<h2 id="projeto">:computer: Projeto</h2>
<p align="center">
    <img src="https://github.com/rodrigo-b-silva/Upload.IA-nlw13/blob/main/.github/images/upload_ai_devices.png" width="900"/>
</p>
Upload.IA é uma aplicação web que propõe descrições e títulos de vídeos para o Youtube utilizando Inteligência Artificial. Com um simples upload de vídeo e algumas inserções, o usuário pode escolher qual a tarefa deseja que a IA cumpra. 


<h2 id="funcionalidades">:rocket: Funcionalidades</h2>

* Geração de título de vídeo para o Youtube (IA)
* Geração de descrição de vídeo para o Youtube (IA)
* Toogle de temas para estilizar a página (modo :butterfly:Light e :bat:Dark)
* Modo responsivo para se adaptar a smartphones, tablets, laptops e smart tvs


<h2 id="tecnologias">:hammer: Tecnologias utilizadas</h2>

* **Front-end**: React, Vite, Typescript, TailwindCSS, Radix, Shadcn/ui, WebAssembly (wasm) e FFMpeg
* **Back-end**: NodeJS, Typescript, Fastify, Prisma, SQLite, Zod e OpenAI (GPT 3.5-turbo 16k)


<h2 id="instalacao">:fire: Instalação e execução</h2>


Clone este repositório
```bash
git clone git@github.com:rodrigo-b-silva/Upload.IA-nlw13.git
```

Navegue nas pastas 'api' e 'web' para instalar as depedências:
```
npm install
```

Navegue até a pasta api, crie o .env e informe as variáveis de ambiente:
```
cp .env.example .env
```
<sup>PORT=<br/>
DATABASE_URL=""<br />
OPENAI_KEY=</sup>


Ainda na pasta api, execute o Prisma para criar as tabelas e popular a tabela 'prompts':
```
npx prisma migrate dev
npx prisma db seed
```

Execute a API do backend:
```
npm run dev
```

Navegue até a pasta web, crie o .env e altere a variável de ambiente com a URL da API:
```
cp .env_example .env
```
<sup>VITE_API_URL=""</sup>

Ainda na pasta web, execute o Vite:
```
npm run dev
```


<h2 id="layout">:art: Layout</h2>
<p align="center">
    <img src="https://github.com/rodrigo-b-silva/Upload.IA-nlw13/blob/main/.github/images/UploadIA_live.gif" width="900"/>
</p>


<h2 id="desafio">🧠 Desafios</h2>

Funcionalides para a versão Upload.IA 2.0 estão listadas abaixo:
* Geração de lista de capítulos para serem cadastrados como playlist no Youtube
* Geração de lista de perguntas e respostas (c/ uma certa) para video-aulas
* Geração de legenda com base no idioma oficial do video parametrizado por tempo
* Geração de legendas em outros idiomas escolhidos pelo usuário
* Novo modelo OpenAI de Inteligência Artificial (gpt-4)
* Autenticação OAuth2 (Github, Google, LinkedIn, Facebook e Twitter)


<h2 id="licenca">:memo: Licença</h2>

Este projeto está sob a licença MIT. Veja mais detalhes em [LICENSE](https://github.com/rodrigo-b-silva/Upload.IA-nlw13/blob/main/LICENSE) 


### Feito com :heart: by [Rodrigo Silva](https://www.linkedin.com/in/rodrigobarbosa1993)
