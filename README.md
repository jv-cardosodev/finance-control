# 💰 FinanceControl — Sistema de Controle Financeiro

O **FinanceControl** é uma aplicação web de controle financeiro pessoal desenvolvida com HTML5, CSS3 e JavaScript. O projeto tem como objetivo facilitar a organização das finanças, permitindo acompanhar entradas, saídas e movimentações financeiras por meio de uma interface intuitiva.

## 📌 Sobre o projeto

O sistema foi desenvolvido para oferecer uma experiência simples e organizada de controle financeiro, com funcionalidades de cadastro e autenticação de usuários, dashboard financeiro e visualização das movimentações.

## 🚀 Funcionalidades

- **Cadastro de usuários:** criação de uma conta para acessar o sistema.
- **Login:** acesso por e-mail e senha.
- **Controle de sessão:** gerenciamento do acesso do usuário.
- **Dashboard financeiro:** visualização das informações financeiras.
- **Entradas e saídas:** organização das movimentações financeiras.
- **Categorias:** classificação das despesas.
- **Histórico financeiro:** consulta das movimentações registradas.
- **Relatórios e gráficos:** visualização das informações financeiras.
- **Clientes:** página de gerenciamento de clientes.
- **Configurações:** página destinada às configurações do sistema.
- **Logout:** encerramento da sessão.

## 🛠️ Tecnologias utilizadas

- HTML5 — estrutura das páginas.
- CSS3 — estilização e layout.
- JavaScript — funcionalidades e interatividade.
- LocalStorage — armazenamento de dados no navegador.
- Chart.js — criação de gráficos, quando utilizado na aplicação.

## 📋 Pré-requisitos

Para executar o projeto localmente, você precisa de:

- Um navegador atualizado, como Google Chrome ou Microsoft Edge.
- Git, caso queira clonar o repositório.
- Visual Studio Code (recomendado).
- A extensão Live Server no Visual Studio Code, para executar as páginas em um servidor local.

**Observação:** este projeto é desenvolvido com tecnologias front-end e não exige um servidor back-end dedicado para a execução básica. A persistência e a autenticação devem ser entendidas conforme a implementação atual em JavaScript e LocalStorage.

## 📥 Como baixar o projeto

Abra o CMD ou o terminal do Visual Studio Code e execute:

```bash
git clone https://github.com/jv-cardosodev/finance-control.git
```

Entre na pasta:

```bash
cd finance-control
```

Se preferir, você também pode acessar o repositório pelo navegador e clicar em **Code → Download ZIP**.

## ▶️ Como executar o sistema

### Opção 1 — Visual Studio Code

1. Abra o Visual Studio Code.
2. Clique em **Arquivo → Abrir Pasta**.
3. Selecione a pasta `finance-control`.
4. Instale a extensão **Live Server**, caso ainda não esteja instalada.
5. Localize o arquivo `index.html`.
6. Clique com o botão direito e selecione **Open with Live Server**.
7. O navegador abrirá o sistema em um endereço local, geralmente `http://127.0.0.1:5500`.

### Opção 2 — Abrir pelo navegador

Você pode abrir o arquivo `index.html` diretamente no navegador. Entretanto, para testar corretamente a navegação entre páginas e o funcionamento dos recursos, recomenda-se utilizar o Live Server.

## 🔐 Como acessar o sistema

### 1. Tela inicial

Ao executar o projeto, abra a página inicial do FinanceControl.

### 2. Criar uma conta

1. Na página inicial, clique em **Criar conta**.
2. Acesse a página de cadastro.
3. Preencha os campos solicitados.
4. Conclua o cadastro conforme as instruções exibidas na tela.

### 3. Fazer login

1. Volte à tela inicial.
2. Clique em **Entrar** para abrir a página de login.
3. Informe o e-mail e a senha cadastrados.
4. Clique no botão de acesso.
5. Após a autenticação, acesse as funcionalidades disponíveis no sistema.

**Importante:** o cadastro e o login utilizam a implementação atual do projeto. Como a aplicação utiliza armazenamento no navegador, esses recursos não devem ser considerados um sistema de autenticação seguro para produção sem um back-end e mecanismos de segurança adequados.

## 🗂️ Estrutura do projeto

```text
finance-control/
├── index.html
├── login.html
├── cadastro.html
├── home.html
├── clientes.html
├── relatorios.html
├── configuracoes.html
├── splash.html
├── style.css
├── charts.js
└── src/
    └── js/
        ├── auth.js
        ├── storage.js
        ├── finance.js
        ├── dashboard.js
        ├── charts.js
        ├── ui.js
        └── main.js
```

## 💾 Armazenamento de dados

O projeto utiliza o LocalStorage do navegador para armazenar dados localmente.

Isso significa que os dados podem permanecer disponíveis no mesmo navegador após fechar e abrir a aplicação novamente. Eles não são automaticamente sincronizados entre computadores ou navegadores.

Limpar os dados do navegador pode apagar informações armazenadas pela aplicação.

## 🔒 Segurança

O FinanceControl é um projeto de desenvolvimento front-end. O armazenamento local não substitui um banco de dados seguro, e a autenticação implementada no navegador não deve ser utilizada como proteção para informações financeiras reais ou sensíveis.

Para uma versão de produção, recomenda-se implementar um back-end, autenticação segura, autorização de usuários e persistência de dados em banco de dados.

## 🎯 Objetivo do projeto

Este projeto tem como objetivo praticar desenvolvimento web, organização de interfaces, manipulação do DOM com JavaScript, armazenamento local e construção de funcionalidades para um sistema financeiro.

## 👨‍💻 Autor

**João Victor Duarte Cardoso**

GitHub: [@jv-cardosodev](https://github.com/jv-cardosodev)

Repositório: [FinanceControl](https://github.com/jv-cardosodev/finance-control)

---

Desenvolvido para fins de aprendizado e evolução em desenvolvimento de sistemas web.
