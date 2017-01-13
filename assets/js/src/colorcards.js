import React from 'react';
import styled from 'styled-components';

const ColorCardsUnStyled = ({colors, className}) => {
  console.log(colors, className);
  let cards = colors.map((obj, index) => {
    let styles = {
      backgroundColor: obj.hex
    };
    return (
      <div key={index} style={styles}>
        <span>{obj.hex}</span>
      </div>
    );
  });
  return (
    <div className={className}>
      {cards}
    </div>
  )
};

export const ColorCards = styled(ColorCardsUnStyled)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & > div {
    width: 10em;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & span {
    display: inline-block;
    padding: .1em .3em;
    background-color: rgba(255, 255, 255, .7);
    color: black;
  }
`;
