import './KanjiPhrases.css'

export function KanjiPhrases({ phrases }) {

  return (
    <div>
      <ul>
        {phrases ?
          (
            phrases.data.map((phrase) => {
              return (
                <li key={phrase.id}>
                  <p>{phrase.transcriptions[0]?.text}</p>
                  <p>{phrase.translations[0]?.text}</p>
                </li>
              )
            })
          ) :
          <></>
        }
      </ul>
    </div>
  )
}