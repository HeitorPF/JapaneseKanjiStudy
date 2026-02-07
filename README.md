# Kanji Dic

Este é um dicionário interativo de Kanji desenvolvido para centralizar e otimizar meu processo de aprendizado da língua japonesa. O foco principal é facilitar a consulta para a **mineração de sentenças** e o estudo organizado por grades escolares (Kyōiku Kanji).

## 🚀 Funcionalidades

* **Busca Integrada:** Consulta de significados, leituras (On/Kun) e detalhes gerais via `unofficial-jisho-api`.
* **Exemplos de Palavras:** Lista de vocabulário comum que utiliza o Kanji pesquisado (via `KanjiAliveAPI`).
* **Contexto Real:** Exemplos de frases completas para estudo de gramática e contexto (via `Tatoeba API`).
* **Estudo por Grades:** Navegação organizada por níveis (Grade 1, 2, etc.) através de uma base de dados JSON local.
* **Interface Reativa:** Desenvolvido em React para uma navegação rápida e fluida.

## 🛠️ Tecnologias e APIs

O projeto utiliza uma arquitetura que consome múltiplas fontes de dados:

* **Frontend:** [React](https://reactjs.org/) (Vite)
* **Backend:** [Node.js](https://nodejs.org/)
* **APIs Utilizadas:**
    * **Unofficial Jisho API:** Dados principais do dicionário Jisho.
    * **KanjiAlive API:** Exemplos de palavras e suporte visual.
    * **Tatoeba API:** Base de dados de sentenças traduzidas.

## ⚙️ Configuração (Variáveis de Ambiente)

Para que a integração com a **KanjiAlive** funcione, você precisará de uma chave de API.

1. Obtenha sua chave gratuitamente no portal do [RapidAPI (KanjiAlive)](https://rapidapi.com/KanjiAlive/api/learn-to-read-and-write-japanese-kanji).
2. Na raiz do diretório do **backend**, renomeie o arquivo `.env.example` para `.env`.
3. Adicione sua chave no arquivo `.env`:

```env
KANJIALIVE_API_KEY=sua_chave_aqui_da_rapidapi
```

## 🔧 Como Rodar o Projeto
### 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/HeitorPF/JapaneseKanjiStudy.git

# Instale as dependências do Backend
cd backend
npm install

# Instale as dependências do Frontend
cd ../frontend
npm install
```
### 2. Execução
Você precisará de dois terminais abertos:

#### Terminal 1 (Servidor Backend):
```bash
cd ./backend/

node ./server.js
```

#### Terminal 2 (Interface Frontend):
```bash
cd ./frontend/

npm run dev
```
Nota: O backend deve estar rodando na porta 3001 para que o frontend consiga consumir os dados corretamente.

## 💡 Por que este projeto?
O diferencial do Kanji Dic é a conveniência. Em vez de abrir três abas diferentes para estudar um único Kanji, este app aglutina a anatomia do caractere, palavras compostas e frases reais. Isso torna o processo de criação de cards para o Anki muito mais rápido.