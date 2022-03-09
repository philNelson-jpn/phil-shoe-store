import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
        <ShoeCard  {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;
`;

// Support for IE

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: -16px; 
// `;

// const ShoeWrapper = styled.div`
//   width: 275px;
//   margin: 16px;
// `;


/* display: flex;
flex-wrap: wrap;
justify-content: flex-start;
gap: 20px; */

export default ShoeGrid;
