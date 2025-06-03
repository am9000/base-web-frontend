import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './theme/ThemeContext';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <CssBaseline />
      <MainLayout onPageChange={setCurrentPage}>
        {renderPage()}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;