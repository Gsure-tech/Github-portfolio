import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoList from './components/RepoList';
import RepoDetails from './components/RepoDetails';
import NotFoundPage from './components/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ChakraProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<RepoList />} />
            <Route path="/repo/:repoId" element={<RepoDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
