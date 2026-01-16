import { useState } from 'react';
import './App.css'

function App() {
  const [kanji, setKanji] = useState('');
  const [data, setData] = useState(null);

  

  function searchKanji() {
    fetch(`http://localhost:3001/api/kanji/${kanji}`)
      .then(response => response.json())
      .then(result => {
        console.log("Dados recebidos do backend:", result);
        setData(result);
      })
      .catch(err => console.error("Erro:", err));

  }

  function listKanjis(category, level){
    fetch(`http://localhost:3001/api/kanji/${category}/${level}`)
      .then(response => response.json())
      .then(result => {
        console.log(`Dados de ${category} encontrados: `, result)
      })
      .catch(err => console.log('Erro:', err))
  }

  return (
    <>
      <div>
        <input type="text" id='inputKanji' onChange={(e) => setKanji(e.target.value)}/>
        <button onClick={() => searchKanji()}>Procurar</button>
        <button onClick={() => listKanjis('grade', '1')}>grade 1</button>
        <button onClick={() => listKanjis('grade', '2')}>grade 2</button>
        <button onClick={() => listKanjis('grade', '3')}>grade 3</button>
        <button onClick={() => listKanjis('grade', '4')}>grade 4</button>
        <button onClick={() => listKanjis('grade', '5')}>grade 5</button>
        <button onClick={() => listKanjis('grade', '6')}>grade 6</button>
        <h1>Kanji dic</h1>
        {data ? (
          <div>
            <p>Kanji: {data.query}</p>
            <img src={data.strokeOrderGifUri} alt="Stroke order" />
            <p>Stroke order GIF: {data.strokeOrderGifUri}</p>
            <p>Significado: {data.meaning}</p>
            <p>Taught in: {data.taughtIn}</p>
            <p>JLPT level: {data.jlptLevel}</p>
            <p>Meaning: {data.meaning}</p>
            <p>Kunyomi: {data.kunyomi.join('、 ')}</p>
            <p>Onyomi: {data.onyomi.join('、 ')}</p>
            <p>Radical: {data.radical.symbol} {data.radical.forms ? `(${data.radical.forms})` : ''} - {data.radical.meaning}</p>
            <p>Stroke order diagram: {data.strokeOrderDiagramUri}</p>
            <p>Stroke order SVG: {data.strokeOrderSvgUri}</p>
            <p>Jisho Uri: {data.uri}</p>
            <ul>
              {data.exampleSentences.map((example, index) => {
                if(example.translations[0]){
                  return(
                    <li key={index}>
                      {example.text} - {example.translations[0].text}
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        ) : (
            <></>
        )}
      </div>
    </>
  )
}

export default App
