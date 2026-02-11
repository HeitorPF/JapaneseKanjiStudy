import { Fragment } from 'react'
import './KanjiPhrases.css'

export function KanjiPhrases({ phrases, copytoClipboard }) {

  function convertToHTML(textString){
    return textString.replace(/\[(.*?)\]/g, (match, content) => {
      // content será algo como "一緒|いっ|しょ"
      const parts = content.split('|');

      const kanji = parts[0]; // "一緒"
      const reading = parts.slice(1).join(''); // "いっしょ" (junta todas as leituras)

      // Retorna com o espaço na frente, exigido pelo Anki
      return `<ruby>${kanji}<rt>${reading}</rt></ruby>`;
    }).trim().replace(/\s+/g, ' ');
  }

  function convertToAnkiFormat(textString){
    if (!textString) return "";

    return textString.replace(/\[(.*?)\]/g, (match, content) => {
      // content será algo como "一緒|いっ|しょ"
      const parts = content.split('|');

      const kanji = parts[0]; // "一緒"
      const reading = parts.slice(1).join(''); // "いっしょ" (junta todas as leituras)

      // Retorna com o espaço na frente, exigido pelo Anki
      return ` ${kanji}[${reading}]`;
    }).trim().replace(/\s+/g, ' ');
  };

  if (phrases) {
    console.log(phrases)
    return (
      <div className='kanji-phrases'>
        <table className='kanji-phrases-table'>
          <tr className='kanji-phrases-table-header'>
            <th>Phrase</th>
            <th>Translations</th>
          </tr>
          {phrases.data.map((phrase) => {
            if (phrase.transcriptions[0]?.text && phrase.translations[0]?.text) {
              return (
                <tr className='kanji-phrases-table-row' key={phrase.id}>
                  <td className='transcriptions' onClick={() => {
                    copytoClipboard(convertToAnkiFormat(phrase.transcriptions[0].text))
                  }} dangerouslySetInnerHTML={{ __html: convertToHTML(phrase.transcriptions[0].text) }} />
                  {/* <div className='grid-row transcriptions'>{phrase.transcriptions[0].text}</div> */}
                  <td>{phrase.translations[0].text}</td>
                </tr>
              )
            }
          })}
        </table>
      </div>
    )
  }
}