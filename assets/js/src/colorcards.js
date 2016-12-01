import React from 'react';

export const ColorCards = (colors, ...props) => {
  let cards = colors.colors.map((obj, index) => {
    let styles = {
      backgroundColor: obj.hex
    };
    return (
      <div key={index} style={styles} className="ColorCards">
        <span className="ColorCards-hex">{obj.hex}</span>
      </div>
    );
  });
  return (
    <div className="ColorCards-wrapper">
      {cards}
    </div>
  )
};