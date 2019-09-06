import React from 'react';
import { func, arrayOf, shape, bool, string, number } from 'prop-types';

import Word from './components/Word';
import Buttons from './components/Buttons';
import './styles.css';

function TextArea({
  buttonsPosition,
  handleChangeWord,
  handleWordPress,
  onSetBold,
  onSetItalic,
  onSetUnderline,
  selectedWord,
  setSelectedWord,
  synonyms,
  textArray,
  wordProperties
}) {
  return (
    <div className="editor-container">
      {selectedWord !== -1 && (
        <Buttons
          buttonsPosition={buttonsPosition}
          changeWord={handleChangeWord}
          setBold={onSetBold}
          setItalic={onSetItalic}
          setUnderline={onSetUnderline}
          synonyms={synonyms}
          wordProperties={wordProperties[selectedWord] || {}}
        />
      )}
      <div className="text-area" onClick={() => setSelectedWord(-1)}>
        {textArray.map((w, index) => (
          <Word
            index={index}
            key={index}
            onWordPress={handleWordPress}
            selected={selectedWord === index}
            word={w}
            wordProperties={wordProperties[index] || {}}
          />
        ))}
      </div>
    </div>
  );
}

TextArea.propTypes = {
  buttonsPosition: shape({
    x: number,
    y: number
  }),
  handleChangeWord: func.isRequired,
  handleWordPress: func.isRequired,
  selectedWord: func.isRequired,
  setSelectedWord: func.isRequired,
  onSetBold: func.isRequired,
  onSetItalic: func.isRequired,
  onSetUnderline: func.isRequired,
  synonyms: arrayOf(
    shape({ 
      word: string 
    })
  ),
  textArray: arrayOf(string),
  wordProperties: arrayOf(
    shape({ 
      bold: bool, 
      italic: bool, 
      underline: bool 
    })
  )
};

export default TextArea;
