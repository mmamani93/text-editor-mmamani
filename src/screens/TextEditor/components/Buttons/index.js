import React, { useMemo } from 'react';
import { func, arrayOf, shape, string, bool, number } from 'prop-types';
import cn from 'classnames';

import CustomButton from '../../../../components/CustomButton';

import { TEXTS } from '../../constants';

import './styles.css';

function Buttons({ setBold, setUnderline, setItalic, synonyms, changeWord, wordProperties, buttonsPosition }) {
  const { bold, italic, underline } = useMemo(() => wordProperties, [wordProperties]);

  return (
    <div className="button-row" style={{ top: `${buttonsPosition.y}px`, left: `${buttonsPosition.x}px` }}>
      <CustomButton
        className={cn("button bold", {"selected-prop": bold})}
        onClick={setBold}
        text={TEXTS.BOLD}
      />
      <CustomButton
        className={cn("button bold", {"selected-prop": italic})}
        onClick={setItalic}
        text={TEXTS.ITALIC}
      />
      <CustomButton
        className={cn("button bold last-button", {"selected-prop": underline})}
        onClick={setUnderline}
        text={TEXTS.UNDERLINE}
      />
      {!!synonyms.length && (
        <select className="synonyms-list" onChange={changeWord}>
          <option disabled selected value>
            {TEXTS.SYNONYMS}
          </option>
          {synonyms && synonyms.map(({ word }, index) => (
            <option value={word} key={index}>
              {word}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

Buttons.propTypes = {
  buttonsPosition: shape({
    x: number,
    y: number
  }), 
  setBold: func.isRequired,
  setItalic: func.isRequired,
  setUnderline: func.isRequired,
  synonyms: arrayOf(
    shape({
      word: string
    })
  ),
  changeWord: func.isRequired,
  wordProperties: shape({
    bold: bool,
    italic: bool,
    underline: bool
  })
};

export default Buttons;
