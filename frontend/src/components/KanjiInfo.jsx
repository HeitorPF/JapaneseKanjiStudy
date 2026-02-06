import './KanjiInfo.css'

export function KanjiInfo({ info }) {
  console.log(info)

  return (
    <>
      {info ? (
        <div>
          <p>Kanji: {info.data.query}</p>
          <img src={info.data.strokeOrderGifUri} alt="Stroke order" />
          <p>Stroke order GIF: {info.data.strokeOrderGifUri}</p>
          <p>Taught in: {info.data.taughtIn}</p>
          <p>JLPT level: {info.data.jlptLevel}</p>
          <p>Meaning: {info.data.meaning}</p>
          <p>Kunyomi: {info.data.kunyomi.join('、 ')}</p>
          <p>Onyomi: {info.data.onyomi.join('、 ')}</p>
          <p>Radical: {info.data.radical.symbol} {info.data.radical.forms ? `(${info.data.radical.forms})` : ''} - {info.data.radical.meaning}</p>
          <p>Jisho Uri: {info.data.uri}</p>
        </div>
      ) :
        <></>
      }

    </>
  )
}