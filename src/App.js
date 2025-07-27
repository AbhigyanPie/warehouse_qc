import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Level1QCForm from './Level1QCForm';
import Level2QCForm from './Level2QCForm';
import Summary from './Summary';

const theme = {
  colors: {
    background: '#F5F5E9',
    primary: '#3c5743',
    secondary: '#bfa77a',
    text: '#333',
    accent: '#81836a',
    highlight: '#cfbe9f',
    error: '#ba5959',
    shadow: 'rgba(60, 87, 67, 0.1)',
  },
  fonts: {
    header: "'Garamond', serif",
    body: "'Times New Roman', serif",
    special: "'Playfair Display', serif",
  },
  fontSizes: {
    h1: '2.6rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1.25rem',
    label: '1.1rem',
    input: '1.2rem',
  },
};

const GlobalStyle = createGlobalStyle`
  /* Optional import if you want Playfair Display from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
    min-height: 100vh;
    letter-spacing: 0.02em;
  }

  h1, h2, h3 {
    font-family: ${(props) => props.theme.fonts.special || props.theme.fonts.header};
    letter-spacing: 0.03em;
    margin-top: 0;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.h1};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.h2};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.h3};
  }

  button {
    font-family: ${(props) => props.theme.fonts.header};
    cursor: pointer;
  }
`;

const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 40px 32px;
  background: ${(p) => p.theme.colors.highlight};
  border-radius: 12px;
  box-shadow: 0 6px 32px ${(p) => p.theme.colors.shadow};
  border: 2px solid ${(p) => p.theme.colors.accent};
`;

function App() {
  const [qcData, setQcData] = useState({});
  const [stage, setStage] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <h1
          style={{
            fontFamily: theme.fonts.special,
            fontSize: theme.fontSizes.h1,
            color: theme.colors.primary,
            marginBottom: '1.1em',
          }}
        >
          Warehouse QC
        </h1>

        {stage === 0 && (
          <Level1QCForm
            onComplete={(data) => {
              setQcData({ ...qcData, level1: data });
              setStage(1);
            }}
            defaultData={qcData.level1}
          />
        )}
        {stage === 1 && (
          <Level2QCForm
            onComplete={(data) => {
              setQcData({ ...qcData, level2: data });
              setStage(2);
            }}
            defaultData={qcData.level2}
          />
        )}
        {stage === 2 && <Summary data={qcData} onRestart={() => setStage(0)} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
