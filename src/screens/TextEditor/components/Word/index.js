import React, { Fragment, useMemo } from 'react';
import cn from 'classnames';
import { string, number, bool, func, shape } from 'prop-types';

import './styles.css';

function Word({ word, index, selected, onWordPress, wordProperties }) {
  const { bold, italic, underline } = useMemo(() => wordProperties, [wordProperties]);

  const handleWordPress = ({ clientX, clientY }) => onWordPress({ index, word, coordinates: { clientX, clientY } });

  return (
    <Fragment>
      <span
        className={cn("generic-word", {
          "bold": bold,
          "italic": italic,
          "underline": underline,
          "pressed": selected
        })}
        onClick={handleWordPress}
      >
        {word}
      </span>
    </Fragment>
  );
}

Word.propTypes = {
  index: number,
  word: string,
  selected: bool,
  onWordPress: func,
  wordProperties: shape({
    bold: bool,
    italic: bool,
    underline: bool
  })
};

export default Word;
