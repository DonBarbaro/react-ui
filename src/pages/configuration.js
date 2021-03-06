 import React from 'react';
 import styled from 'styled-components';
 import { Alert } from 'react-bootstrap';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const configuration = () => (
  <GridWrapper>
    <h2>Configuration</h2>
  </GridWrapper>
)
