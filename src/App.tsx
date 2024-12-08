import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Subscriptions from './pages/Subscriptions';
import Cashback from './pages/Cashback';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<Subscriptions />} />
          <Route path="/cashback" element={<Cashback />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App; 