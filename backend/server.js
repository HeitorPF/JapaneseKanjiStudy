const express = require('express');
const cors = require('cors');
const path = require('path');
const JishoAPI = require('unofficial-jisho-api');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());

const jisho = new JishoAPI();

app.get('/api/kanji/:character', async (req, res) => {
    const kanji = req.params.character;
    
    try {
        console.log(`Buscando kanji: ${kanji}`)
        // `https://api.tatoeba.org/unstable/sentences?lang=jpn&q=${encodeURIComponent(kanji)}&word_count=8-20&sort=relevance&limit=20&showtrans%3Alang=eng`
        const result = await jisho.searchForKanji(kanji)
        const tatoebaResponse = await fetch(`https://api.tatoeba.org/unstable/sentences?lang=jpn&q=${encodeURIComponent(kanji)}&word_count=8-20&sort=relevance&limit=20&showtrans%3Alang=eng`);
        
        const tatoebaData = await tatoebaResponse.json();

        result['exampleSentences'] = tatoebaData.data;

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

app.get('/api/kanji/:category/:level', async (req, res) => {
    const category = req.params.category;
    const level = req.params.level;
    let nameArq = ''

    if (category === 'jlpt') {
        nameArq = `jlpt_${level}.json`;
    } else if (category === 'grade') {
        nameArq = `grade_${level}.json`;
    } else {
        return res.status(400).json({ erro: "Categoria inválida. Use 'jlpt' ou 'grade'." });
    }

    const caminhoArquivo = path.join(__dirname, 'src/data', nameArq);
    console.log('camim', caminhoArquivo)
    try {
        const dados = fs.readFileSync(caminhoArquivo, 'utf8');
        const json = JSON.parse(dados);
        res.json(json);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao ler o arquivo de dados." });
    }
})

app.listen(port, () => {
    console.log(`Servidor Backend rodando em http://localhost:${port}`);
});