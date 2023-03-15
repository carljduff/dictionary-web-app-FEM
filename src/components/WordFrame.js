import React from "react";

const WordFrame = ({data}) => {
    const word = {
        word: data[0]?.word,
        phonetic: data[0]?.phonetic,
        phonetics: data[0]?.phonetics[0]?.audio,
        partOfSpeech: data[0]?.meanings[0]?.partOfSpeech,
        meaning: data[0]?.meanings[0]?.definitions,
    }
        return(
            <div>
                <p>{data[0]?.word}</p>
               <p>{data[0]?.phonetic}</p>
               {word.meaning && word.meaning.map((item, index) => {
                     return(
                          <ul key={index}>
                            <li>{item.definition}</li>
                          </ul>
                     )
               })}
            </div>
        )
}

export default WordFrame;