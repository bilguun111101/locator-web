import { Main } from './pages';
import { Layout } from './components';
import { DashboardProvider } from './context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
