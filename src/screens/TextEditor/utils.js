import { TYPES } from './constants';

export const defineWordsProperties = ({ wordProperties, selectedWord, type }) => {
  const prevProps = wordProperties[selectedWord];

  return {
    ...wordProperties,
    [selectedWord]: {
      [TYPES.BOLD]: type === TYPES.BOLD ? !prevProps || !prevProps[TYPES.BOLD] : prevProps && prevProps[TYPES.BOLD],
      [TYPES.ITALIC]:
        type === TYPES.ITALIC ? !prevProps || !prevProps[TYPES.ITALIC] : prevProps && prevProps[TYPES.ITALIC],
      [TYPES.UNDERLINE]:
        type === TYPES.UNDERLINE ? !prevProps || !prevProps[TYPES.UNDERLINE] : prevProps && prevProps[TYPES.UNDERLINE]
    }
  };
};

export const calculateCoordinates = (x, y) => ({ x: x - 55, y: y - 60 });