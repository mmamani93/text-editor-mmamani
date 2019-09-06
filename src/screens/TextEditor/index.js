import React, { useState, useCallback } from 'react';

import { getSynonyms } from '../../services/datamuseService';

import { defineWordsProperties, calculateCoordinates } from './utils';
import { TEXT, TYPES } from './constants';
import TextArea from './layout';


function TextAreaContainer() {
  const [textArray, setTextArray] = useState(TEXT.split(' '));
  const [wordProperties, setWordProperties] = useState({});
  const [selectedWord, setSelectedWord] = useState(-1);
  const [synonyms, setSynonyms] = useState([]);
  const [buttonsPosition, setButtonsPosition] = useState({})


  const handleChangeWord = ({ target }) => {
    const newTextArray = [...textArray];
    newTextArray[selectedWord] = target.value;
    setTextArray(newTextArray);
  };

  const handleWordPress = async ({ index, word, coordinates }) => {
    setButtonsPosition(calculateCoordinates(coordinates.clientX, coordinates.clientY));
    if (index === selectedWord) setSelectedWord(-1);
    else {
      const syn = await getSynonyms(word);
      setSynonyms(syn.data);
      setSelectedWord(index);
    }
  };

  const configureWord = useCallback(type =>
    setWordProperties(defineWordsProperties({ wordProperties, selectedWord, type })),
  [selectedWord, wordProperties]);

  const onSetBold = () => configureWord(TYPES.BOLD);
  const onSetItalic = () => configureWord(TYPES.ITALIC);
  const onSetUnderline = event => configureWord(TYPES.UNDERLINE);

  return (
    <TextArea
      buttonsPosition={buttonsPosition}
      handleChangeWord={handleChangeWord}
      handleWordPress={handleWordPress}
      onSetBold={onSetBold}
      onSetItalic={onSetItalic}
      onSetUnderline={onSetUnderline}
      selectedWord={selectedWord}
      setSelectedWord={setSelectedWord}
      synonyms={synonyms}
      textArray={textArray}
      wordProperties={wordProperties}
    />
  );
}

export default TextAreaContainer;
