import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Editor = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.children[0].text}</p>;
    case 'heading':
      return <h2>{block.children[0].text}</h2>;
    case 'image':
      return <ImagePlaceholder />;
    default:
      return null;
  }
};
