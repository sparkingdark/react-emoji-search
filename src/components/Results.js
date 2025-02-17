import React, { useEffect } from 'react'
import Item from './Item.js'
import Clipboard from "clipboard";
import { v4 as uuidv4 } from 'uuid';

function Results(props) {
  useEffect(() => {
    const clipboard = new Clipboard(".item");
    return () => {
        clipboard.destroy();
    };
  })
  return (
    <div className="results">
      {props.emojiFiltered.slice(0, 100).map((emoji) => (
        <Item id={uuidv4()} symbol={emoji.symbol} title={emoji.title} />
			))}
    </div>
  )
}

export default Results