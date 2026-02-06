import './KanjiVocab.css'

export function KanjiVocab({ vocab }) {
  console.log(vocab)

  return (
    <div>
      <ul>
        {vocab ?
          (
            vocab.data.map((word) => {
              return (
                <li key={word.japanese}>
                  {word.japanese} - {word.meaning.english}
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