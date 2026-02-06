import './KanjiInput.css'

export function KanjiInput({ searchKanjiInfo, searchKanjiVocab, searchKanjiPhrases, kanjiInput, setKanjiInput }) {

  function saveKanjiInput(event) {
    setKanjiInput(event.target.value)
  }

  return (
    <>
      <button onClick={() => { searchKanjiInfo(kanjiInput) }}>Procurar info</button>
      <button onClick={() => { searchKanjiVocab(kanjiInput) }}>Procurar Vocab</button>
      <button onClick={() => { searchKanjiPhrases(kanjiInput) }}>Procurar Phrases</button>
      <input className="kanjiInput"onChange={saveKanjiInput} value={kanjiInput} />
    </>
  )
}