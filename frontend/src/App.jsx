import axios from 'axios'
import { useState } from 'react'
import { KanjiInput } from './components/KanjiInput'
import { KanjiInfo } from './components/KanjiInfo'
import { KanjiVocab } from './components/KanjiVocab'
import { KanjiLists } from './components/KanjiLists'
import { LoadingSpinner } from './components/LoadingSpinner'
import { KanjiPhrases } from './components/KanjiPhrases'
import './App.css'

function App() {
  const [kanjiInfo, setKanjiInfo] = useState(null)
  const [kanjiVocab, setKanjiVocab] = useState(null)
  const [kanjiPhrases, setKanjiPhrases] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [kanjiInput, setKanjiInput] = useState('')

  async function searchKanjiInfo(kanjiInput) {
    if (kanjiInput !== kanjiInfo?.query) {
      setIsLoading(true)
      setKanjiInput(kanjiInput)
      const response = await axios.get(`http://localhost:3001/api/kanji/${kanjiInput}/info`)
      setKanjiInfo({
        data: response.data,
        query: kanjiInput
      })
      setIsLoading(false)
    }

  }

  async function searchKanjiVocab(kanjiInput) {
    if (kanjiInput !== kanjiVocab?.query) {
      setIsLoading(true)
      setKanjiInput(kanjiInput)
      const response = await axios.get(`http://localhost:3001/api/kanji/${kanjiInput}/vocab`)
      setKanjiVocab({
        data: response.data,
        query: kanjiInput
      })
      setIsLoading(false)
    }

  }

  async function searchKanjiPhrases(kanjiInput) {
    if (kanjiInput !== kanjiPhrases?.query) {
      setIsLoading(true)
      setKanjiInput(kanjiInput)
      const response = await axios.get(`http://localhost:3001/api/kanji/${kanjiInput}/phrases`)
      setKanjiPhrases({
        data: response.data,
        query: kanjiInput
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <div>
        <KanjiLists
          searchKanjiInfo={searchKanjiInfo}
        />

        <h1>Kanji dic</h1>
        <KanjiInput
          kanjiInput={kanjiInput}
          setKanjiInput={setKanjiInput}
          searchKanjiInfo={searchKanjiInfo}
          searchKanjiVocab={searchKanjiVocab}
          searchKanjiPhrases={searchKanjiPhrases}
        />
        {
          isLoading ?
            (
              <LoadingSpinner
                kanjiInput={kanjiInput}
              />
            ) : (
              <>
                <KanjiInfo
                  info={kanjiInfo}
                />
                <KanjiVocab
                  vocab={kanjiVocab}
                />
                <KanjiPhrases
                  phrases={kanjiPhrases}
                />
              </>
            )
        }
      </div>
    </>
  )
}

export default App
