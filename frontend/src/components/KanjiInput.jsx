import './KanjiInput.css'

export function KanjiInput({ searchKanjiInfo, searchKanjiVocab, searchKanjiPhrases, kanjiInput, setKanjiInput }) {

  function saveKanjiInput(event) {
    setKanjiInput(event.target.value)
  }

  return (
    <>
      <button className='search-buttons' onClick={() => { searchKanjiInfo(kanjiInput) }}>Procurar info</button>
      <button className='search-buttons' onClick={() => { searchKanjiVocab(kanjiInput) }}>Procurar Vocab</button>
      <button className='search-buttons' onClick={() => { searchKanjiPhrases(kanjiInput) }}>Procurar Phrases</button>
      <input className="kanjiInput"onChange={saveKanjiInput} value={kanjiInput} />
    </>
  )
}