import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { DashboardProvider } from './context';
import { Main } from './pages';

const App = () => {
  return (
    <DashboardProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>
      </Layout>
    </DashboardProvider>
  )
}

export default App
