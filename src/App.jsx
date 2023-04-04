import React from 'react'
import GlobalStyle from './globals'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Homepage from './pages/Homepage'
import Navbar from './components/Navbar';

import styled from 'styled-components';

const AppStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--padding-18);
  // position: relative;
`

function App() {
  return (
    <AppStyled>
      <GlobalStyle />

      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </AppStyled>
  )
}

export default App
