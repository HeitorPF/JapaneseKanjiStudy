# 🎌 KanjiDic — Dicionário Personalizado de Kanji

Uma aplicação **Full-Stack** desenvolvida para auxiliar estudantes de japonês na organização e consulta de Kanjis por grade escolar e vocabulário cotidiano. O projeto nasceu da necessidade de centralizar informações de diversas fontes para otimizar o estudo diário.

### 🚀 Acesse Agora
O projeto está hospedado e pronto para uso, sem necessidade de configuração local:
👉 **[KanjiDic](https://kanji-dic.vercel.app/)**

---

### ✨ Funcionalidades Principais

* **Busca Inteligente:** Pesquise por Kanjis específicos e obtenha detalhes instantâneos sobre significados, leituras (On-yomi e Kun-yomi) e radicais.
* **Listagem por Grade (Kyōiku Kanji):** Visualize e estude Kanjis organizados pelos níveis da grade escolar japonesa.
* **Integração de Dados Multimídia:**
    * **Informações Gerais:** Integração com Jisho para dados técnicos dos caracteres.
    * **Exemplos de Palavras:** Exemplos contextualizados via KanjiAlive.
    * **Sentenças Reais:** Integração com a API do Tatoeba para fornecer exemplos de frases completas.
* **Interface Otimizada:** Design focado em produtividade para auxiliar durante sessões de estudo e revisões.

---

### 🚀 Ideias Futuras & Roadmap

O projeto está em constante evolução. As próximas funcionalidades planejadas são:

* **Integração com Anki:** Conexão direta com o Anki através do plugin [AnkiConnect](https://github.com/amikey/anki-connect).
* **Criação Instantânea de Cards:** Botão para adicionar o Kanji ou a sentença de exemplo diretamente ao deck do Anki, sem precisar de copiar e colar.
* **Trackear seu progresso:** Conseguir marcar kanjis como já vistos/estudados

---

### 🛠️ Tecnologias Utilizadas

* **Frontend:** React.js e Axios para consumo de APIs.
* **Backend:** Node.js (Express) para orquestração de dados.
* **APIs:** Unofficial Jisho API, KanjiAlive API e Tatoeba API.

---

### 🌐 Deployment

A aplicação utiliza uma arquitetura distribuída para garantir performance e escalabilidade gratuita:

* **Frontend (React):** Hospedado na **Vercel**, garantindo entrega rápida e integração contínua.
* **Backend (Node.js):** Hospedado no **Render**.
    * *Nota:* Por estar no plano gratuito, o backend pode levar cerca de 50 segundos para "acordar" após um período de inatividade no primeiro acesso.

---

### 💻 Como rodar localmente (Desenvolvedores)

Caso deseje explorar o código ou rodar um ambiente de desenvolvimento:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/kanjidic.git](https://github.com/seu-usuario/kanjidic.git)
    ```
2.  **Instale as dependências:**
    ```bash
    cd ./frontend
    npm install

    cd ../backend
    npm install
    ```
3.  **Inicie o sistema (necessário dois terminais):**
    * **Terminal 1 (Backend):** `node ./server.js`
    * **Terminal 2 (Frontend):** `npm run dev`

---

### 👤 Autor

Desenvolvido como parte do meu fluxo de estudos de japonês e para aplicar conhecimentos em **React** e **Node.js**.